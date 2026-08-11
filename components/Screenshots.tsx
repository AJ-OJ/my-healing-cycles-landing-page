import Image from "next/image";

const SHOTS = [
  {
    src: "/images/mock-today.png",
    alt: "Today screen showing a daily scripture, a 'Next up' reminder, and a morning checklist",
    caption: "Today",
  },
  {
    src: "/images/mock-progress.png",
    alt: "Progress screen showing Energy and Pain trends alongside a fibroid volume lab trend",
    caption: "Progress",
  },
  {
    src: "/images/mock-journal.png",
    alt: "Journal history screen with a calendar of past entries",
    caption: "Journal",
  },
];

export default function Screenshots() {
  return (
    <section className="bg-white border-y border-line">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 text-center">
        <h2 className="font-serif text-[28px] sm:text-[32px] font-bold text-text-dark">
          A first look
        </h2>
        <p className="mt-3 text-[16px] text-text-mid max-w-xl mx-auto">
          Early mockups from the app currently in development. The design is
          locked in, we&rsquo;re building the real thing next.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {SHOTS.map((s) => (
            <figure key={s.src} className="w-[220px]">
              <div className="rounded-[20px] overflow-hidden border border-line shadow-[var(--shadow-card)]">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={544}
                  height={1148}
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-3 text-sm font-medium text-text-muted">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
