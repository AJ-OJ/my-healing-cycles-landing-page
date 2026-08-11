import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";

// Simple, dependency-free email format check. Not exhaustive RFC 5322
// validation on purpose — that's a false-precision trap for a waitlist form;
// this just catches obvious typos before they hit the database.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const email =
    typeof body === "object" && body !== null && "email" in body
      ? String((body as { email: unknown }).email ?? "").trim().toLowerCase()
      : "";
  const source =
    typeof body === "object" && body !== null && "source" in body
      ? String((body as { source: unknown }).source ?? "").slice(0, 40)
      : "unknown";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    const supabase = getSupabaseAdminClient();
    const { error } = await supabase
      .from("waitlist_signups")
      .insert({ email, source });

    if (error) {
      // Unique violation — she's already on the list. Treat as success so
      // the form doesn't leak whether an email is already registered, and
      // so re-submitting isn't an error from the user's point of view.
      if (error.code === "23505") {
        return NextResponse.json({ ok: true, already: true });
      }
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Something went wrong on our end. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, already: false });
  } catch (err) {
    console.error("Waitlist route error:", err);
    return NextResponse.json(
      { error: "Something went wrong on our end. Please try again shortly." },
      { status: 500 }
    );
  }
}
