import Link from "next/link";
import WaitlistForm from "./WaitlistForm";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <div className="rounded-[var(--radius-card)] bg-white border border-line shadow-[var(--shadow-card)] px-6 py-10 sm:px-12 sm:py-12 text-center">
        <h2 className="font-serif text-[26px] sm:text-[30px] font-bold text-text-dark">
          Be the first to know when we launch
        </h2>
        <p className="mt-3 text-[15px] text-text-mid max-w-lg mx-auto">
          Waitlist members get early access before the app store, and hear
          about it first.
        </p>

        <div className="mt-7 flex justify-center">
          <WaitlistForm source="mid_page" variant="card" />
        </div>

        <p className="mt-6 text-xs text-text-muted max-w-sm mx-auto leading-relaxed">
          We&rsquo;ll only email you about early access. No spam, unsubscribe
          anytime.{" "}
          <Link href="/privacy" className="underline hover:text-text-mid">
            Read our Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
