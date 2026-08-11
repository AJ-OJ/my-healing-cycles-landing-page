export default function FollowAlong() {
  return (
    <section className="bg-white border-y border-line">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 text-center">
        <h2 className="font-serif text-[28px] sm:text-[32px] font-bold text-text-dark">
          Follow along
        </h2>
        <p className="mt-3 text-[16px] text-text-mid max-w-lg mx-auto">
          We&rsquo;re already sharing the journey daily on Instagram, real
          content, real posting history, not just a waitlist page.
        </p>
        <a
          href="https://instagram.com/myhealingcycles"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-[var(--radius-pill)] bg-wine px-6 py-3 text-[15px] font-semibold text-white transition hover:opacity-90"
        >
          Follow the journey · @myhealingcycles
        </a>
      </div>
    </section>
  );
}
