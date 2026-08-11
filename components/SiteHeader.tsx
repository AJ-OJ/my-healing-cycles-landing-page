import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="My Healing Cycles"
            width={32}
            height={32}
            className="rounded-full"
            priority
          />
          <span className="font-serif text-[17px] font-bold text-text-dark">
            My Healing Cycles
          </span>
        </div>
        <a
          href="#waitlist"
          className="hidden sm:inline-flex rounded-[var(--radius-pill)] border border-wine px-4 py-2 text-sm font-semibold text-wine transition hover:bg-wine hover:text-white"
        >
          Join the waitlist
        </a>
      </div>
    </header>
  );
}
