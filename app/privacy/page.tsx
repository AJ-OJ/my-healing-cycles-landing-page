import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "My Healing Cycles: Privacy Policy",
  description: "How My Healing Cycles handles your email and your data.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-2xl px-6 py-14 sm:py-16">
        <h1 className="font-serif text-[28px] sm:text-[32px] font-bold text-text-dark">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-8 space-y-7 text-[15px] leading-relaxed text-text-mid">
          <section>
            <h2 className="font-semibold text-text-dark text-[17px]">Who we are</h2>
            <p className="mt-2">
              Didymus Digital Services operates this website and is building
              the My Healing Cycles app. We&rsquo;re based in Abuja, Nigeria.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-text-dark text-[17px]">This waitlist site</h2>
            <p className="mt-2">
              If you join our waitlist, we collect only your email address and,
              internally, which section of the page you signed up from (so we
              can tell which parts of the site work). That&rsquo;s it, no name,
              no phone number, no tracking pixels, no third-party analytics or
              advertising scripts on this site.
            </p>
            <p className="mt-2">
              That email address is stored in our own database, hosted by
              Supabase, the third-party database provider we use to run this
              waitlist. It is not used for advertising or analytics, and it
              is never sold, rented, or shared with anyone else. Your email
              is used only to notify you when My Healing Cycles launches and
              to occasionally share meaningful updates before then. You can
              ask us to remove it at any time by emailing{" "}
              <a href="mailto:myhealingcycles@outlook.com" className="underline hover:text-wine">
                myhealingcycles@outlook.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-text-dark text-[17px]">The My Healing Cycles app</h2>
            <p className="mt-2">
              This website and the app are different things with different
              privacy practices, and this policy covers the website only.
              The app itself is being built local-first by design: your
              activity logs, journal entries, and lab or imaging uploads are
              stored on your own device, not on a server we control. There is
              no login or account required to use it. Lab and imaging text
              extraction runs on your device; nothing is sent to a cloud
              service unless you explicitly opt in to that fallback. The app
              is currently in development and testing and is not yet
              published to any app store. Its own, more detailed Privacy
              Policy is written specifically for that local-first
              architecture and will be published before launch, linked from
              the app&rsquo;s own Settings screen; it should not be assumed
              to describe how this website works.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-text-dark text-[17px]">Cookies</h2>
            <p className="mt-2">
              This site does not use cookies, advertising trackers, or
              analytics of any kind. The waitlist form runs entirely in your
              browser while the page is open; nothing is stored in your
              browser between visits.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-text-dark text-[17px]">Changes to this policy</h2>
            <p className="mt-2">
              If this policy changes, we&rsquo;ll update the date at the top
              of this page. Material changes will be called out in an update
              to our waitlist list before they take effect.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-text-dark text-[17px]">A note on this policy</h2>
            <p className="mt-2">
              This is a good-faith description of how this website currently
              works, written by the team building it. It has not yet been
              reviewed by an attorney and should not be treated as a
              certified-compliant legal document.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-text-dark text-[17px]">Contact</h2>
            <p className="mt-2">
              Questions about this policy or your data:{" "}
              <a href="mailto:myhealingcycles@outlook.com" className="underline hover:text-wine">
                myhealingcycles@outlook.com
              </a>
              .
            </p>
          </section>
        </div>

        <p className="mt-10 text-sm">
          <Link href="/" className="underline hover:text-wine">
            &larr; Back to home
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
