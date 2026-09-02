"use client";

import { useId, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function BetaSignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [apkPath, setApkPath] = useState<string | null>(null);
  const nameId = useId();
  const emailId = useId();
  const whatsappId = useId();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/beta-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, whatsappNumber, source: "beta_page" }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      // Fetch the current APK location so the download link always points
      // at whatever build is actually live, rather than a value baked in
      // at page-build time.
      let path = "/downloads/my-healing-cycles-beta.apk";
      try {
        const versionRes = await fetch("/api/app-version");
        if (versionRes.ok) {
          const versionData = await versionRes.json();
          if (versionData.apkPath) path = versionData.apkPath;
        }
      } catch {
        // Fall back to the default path above — non-fatal.
      }

      setApkPath(path);
      setStatus("success");
      setMessage(
        data.already
          ? "You're already signed up. Here's the download again:"
          : "You're in. Here's the download:"
      );
    } catch {
      setStatus("error");
      setMessage("Couldn't reach the server. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-[var(--radius-card)] bg-sage/10 border border-sage/30 px-5 py-5 text-center"
      >
        <p className="text-sage font-medium">{message}</p>
        {apkPath ? (
          <a
            href={apkPath}
            className="mt-4 inline-block rounded-[var(--radius-pill)] bg-wine px-6 py-3 text-[15px] font-semibold text-white transition hover:opacity-90"
          >
            Download for Android
          </a>
        ) : null}
        <p className="mt-4 text-xs text-text-muted leading-relaxed">
          Android will warn you it&rsquo;s from outside the Play Store since
          this is a direct beta build, not a security problem. Choose
          &ldquo;Install anyway&rdquo; / &ldquo;Download anyway&rdquo; when
          prompted.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto" noValidate>
      <div className="flex flex-col gap-3">
        <div>
          <label htmlFor={nameId} className="sr-only">Your name</label>
          <input
            id={nameId}
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-[var(--radius-btn)] border border-line bg-white px-4 py-3 text-[15px] text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-wine/40 focus:border-wine"
          />
        </div>
        <div>
          <label htmlFor={emailId} className="sr-only">Email address</label>
          <input
            id={emailId}
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-[var(--radius-btn)] border border-line bg-white px-4 py-3 text-[15px] text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-wine/40 focus:border-wine"
          />
        </div>
        <div>
          <label htmlFor={whatsappId} className="sr-only">WhatsApp number</label>
          <input
            id={whatsappId}
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="WhatsApp number, with country code"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            className="w-full rounded-[var(--radius-btn)] border border-line bg-white px-4 py-3 text-[15px] text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-wine/40 focus:border-wine"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-[var(--radius-pill)] bg-wine px-6 py-3 text-[15px] font-semibold text-white transition hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Getting your download…" : "Get the beta"}
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
