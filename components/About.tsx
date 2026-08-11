const PILLARS = [
  {
    title: "Nigerian foods & traditional herbs",
    body:
      "Bitter leaf, moringa, ugu, turmeric: real Nigerian ethnobotany at the center of the protocol, not a footnote.",
  },
  {
    title: "Faith-anchored daily practice",
    body:
      "Scripture, prayer, and daily structure woven into the protocol itself. Healing that never asks you to set your faith aside.",
  },
  {
    title: "A structured protocol, not a passive tracker",
    body:
      "A specific daily plan for exactly where you are in your protocol, with your habits and your lab results tracked side by side, all in one private app. No login, no server.",
  },
];

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <div className="max-w-2xl">
        <h2 className="font-serif text-[28px] sm:text-[32px] font-bold text-text-dark">
          Why this exists
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-text-mid">
          Too many Nigerian women are told to just manage their condition, or
          handed surgery as the only real option, with nothing structured in
          between. My Healing Cycles exists to be that structured middle
          path: daily, specific, and built around how she actually eats,
          prays, and lives, not a generic wellness plan translated from
          somewhere else. We&rsquo;re starting with a 90-day protocol for
          uterine fibroids, built the same way we&rsquo;ll build for
          whatever comes after it.
        </p>
      </div>

      <h3 className="mt-12 text-xs font-semibold tracking-wide text-wine uppercase">
        What makes it different
      </h3>
      <ul className="mt-5 grid gap-6 sm:grid-cols-3">
        {PILLARS.map((p) => (
          <li
            key={p.title}
            className="rounded-[var(--radius-card)] bg-white border border-line p-5 shadow-[var(--shadow-soft)]"
          >
            <h4 className="font-semibold text-[15px] text-text-dark">
              {p.title}
            </h4>
            <p className="mt-2 text-[14px] leading-relaxed text-text-mid">
              {p.body}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-10 max-w-2xl font-serif italic text-[16px] leading-relaxed text-text-mid">
        We are not doctors. We are not promising miracles. We are sharing
        what we have researched, built, and are living ourselves.
      </p>
    </section>
  );
}
