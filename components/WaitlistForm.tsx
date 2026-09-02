"use client";

import { useId, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm({
  source,
  variant = "light",
}: {
  /** Which section this form instance lives in, for basic attribution. */
  source: string;
  /** "light" sits on the cream background (hero); "card" sits on a white card. */
  variant?: "light" | "card";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const inputId = useId();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(
        data.already
          ? "You're already on the list. We'll be in touch as soon as early access opens."
          : "You're on the list. We'll be in touch as soon as early access opens."
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Couldn't reach the server. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className={
          variant === "card"
            ? "rounded-[var(--radius-card)] bg-sage/10 border border-sage/30 px-5 py-4 text-sage font-medium"
            : "rounded-[var(--radius-card)] bg-white/80 border border-sage/30 px-5 py-4 text-sage font-medium"
        }
      >
        <p>{message}</p>
        <p className="mt-2 text-sm font-normal">
          Don&rsquo;t want to wait? An early Android beta is available now
          {" "}
          <a href="/beta" className="underline hover:opacity-80">
            get it here
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md"
      noValidate
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-[var(--radius-btn)] border border-line bg-white px-4 py-3 text-[15px] text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-wine/40 focus:border-wine"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-[var(--radius-pill)] bg-wine px-6 py-3 text-[15px] font-semibold text-white transition hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
      {status === "error" && message && (
        <p role="alert" className="mt-2 text-sm text-terra">
          {message}
        </p>
      )}
    </form>
  );
}
