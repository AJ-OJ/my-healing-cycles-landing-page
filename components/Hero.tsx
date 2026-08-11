import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient wash in brand tones, not a photo — keeps this consistent
          with the app's own "custom-drawn, not stock" visual language. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 10%, rgba(48,126,53,0.10) 0%, rgba(48,126,53,0) 60%), radial-gradient(55% 45% at 90% 15%, rgba(156,53,96,0.10) 0%, rgba(156,53,96,0) 60%), radial-gradient(50% 50% at 50% 100%, rgba(116,86,200,0.08) 0%, rgba(116,86,200,0) 60%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 pt-10 pb-20 sm:pt-16 sm:pb-28 text-center">
        <span className="inline-block rounded-[var(--radius-pill)] bg-white border border-line px-4 py-1.5 text-xs font-semibold tracking-wide text-wine uppercase">
          Coming soon
        </span>

        <h1 className="mt-6 font-serif text-[34px] leading-[1.15] sm:text-[48px] sm:leading-[1.1] font-bold text-text-dark max-w-3xl mx-auto">
          Be the first to know when My Healing Cycles opens
        </h1>

        <p className="mt-5 text-[17px] sm:text-[19px] leading-relaxed text-text-mid max-w-2xl mx-auto">
          A guided, faith-anchored healing companion, built on Nigerian food
          and traditional herbs, that tracks your habits and your lab
          results side by side, all in one private app. No login. No
          server. We&rsquo;re starting with a structured protocol for
          uterine fibroids, with more conditions to come. Join the waitlist
          for early access.
        </p>

        <div className="mt-9 flex justify-center">
          <WaitlistForm source="hero" />
        </div>
        <p className="mt-3 text-sm text-text-muted">
          We&rsquo;ll only email you about early access. No spam, unsubscribe
          anytime.
        </p>
      </div>
    </section>
  );
}
