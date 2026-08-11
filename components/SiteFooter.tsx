import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-sm text-text-muted">
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/myhealingcycles"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-wine transition"
          >
            Instagram
          </a>
          {/* TODO: swap in real X/Twitter and LinkedIn URLs once those
              accounts exist — remove this comment once done. */}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-wine transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-wine transition">
            Terms of Service
          </Link>
          {/* TODO: replace with your real contact address */}
          <a
            href="mailto:myhealingcycles@outlook.com"
            className="hover:text-wine transition"
          >
            Contact
          </a>
        </div>

        <p>
          &copy; {year} My Healing Cycles, a Didymus Digital Services
          product. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
