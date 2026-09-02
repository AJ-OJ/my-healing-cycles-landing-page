import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";

// Same intentionally-simple email check as the waitlist route: catches
// obvious typos without pretending to be full RFC 5322 validation.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// WhatsApp numbers arrive in all sorts of formats (spaces, dashes,
// country-code +). This just checks there are enough digits to be a real
// number, it does not attempt to validate a specific country format.
const DIGITS_RE = /\d/g;
const MIN_PHONE_DIGITS = 8;

function readString(body: unknown, key: string, maxLen: number): string {
  if (typeof body !== "object" || body === null || !(key in body)) return "";
  return String((body as Record<string, unknown>)[key] ?? "").trim().slice(0, maxLen);
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = readString(body, "name", 100);
  const email = readString(body, "email", 200).toLowerCase();
  const whatsappNumber = readString(body, "whatsappNumber", 30);
  const source = readString(body, "source", 40) || "beta_page";

  if (!name) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  const phoneDigitCount = (whatsappNumber.match(DIGITS_RE) ?? []).length;
  if (phoneDigitCount < MIN_PHONE_DIGITS) {
    return NextResponse.json(
      { error: "Please enter a valid WhatsApp number, with country code." },
      { status: 400 },
    );
  }

  try {
    const supabase = getSupabaseAdminClient();
    const { error } = await supabase
      .from("beta_signups")
      .insert({ name, email, whatsapp_number: whatsappNumber, source });

    if (error) {
      // Unique violation on email — she's already signed up. Treat as
      // success so re-submitting (e.g. after reinstalling) isn't an error,
      // and so the form doesn't leak whether an email already exists.
      if (error.code === "23505") {
        return NextResponse.json({ ok: true, already: true });
      }
      console.error("Supabase beta_signups insert error:", error);
      return NextResponse.json(
        { error: "Something went wrong on our end. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, already: false });
  } catch (err) {
    console.error("Beta signup route error:", err);
    return NextResponse.json(
      { error: "Something went wrong on our end. Please try again shortly." },
      { status: 500 },
    );
  }
}
