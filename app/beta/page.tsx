import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BetaSignupForm from "@/components/BetaSignupForm";

// Deliberately not linked from the site nav or footer — this page is meant
// to be shared directly (e.g. in the WhatsApp group), not discovered by a
// random visitor to the waitlist landing page, since it's an unreviewed
// beta build, not a public release.
export const metadata: Metadata = {
  title: "My Healing Cycles: Beta",
  description: "Download the My Healing Cycles Android beta.",
  robots: { index: false, follow: false },
};

export default function BetaPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-2xl px-6 py-14 sm:py-16 text-center">
        <h1 className="font-serif text-[28px] sm:text-[32px] font-bold text-text-dark">
          Try the beta
        </h1>
        <p className="mt-3 text-[15px] text-text-mid max-w-lg mx-auto">
          This is an early Android build, ahead of the Play Store release.
          Leave your details below and it&rsquo;s yours.
        </p>

        <div className="mt-8 rounded-[var(--radius-card)] bg-white border border-line shadow-[var(--shadow-card)] px-6 py-8 sm:px-10 sm:py-10">
          <BetaSignupForm />
        </div>

        <div className="mt-8 text-left text-xs text-text-muted leading-relaxed max-w-lg mx-auto space-y-2">
          <p>
            <strong className="text-text-mid">Android only, for now.</strong>{" "}
            An iOS beta isn&rsquo;t available yet, see the app&rsquo;s
            Settings screen once installed for how updates work while we&rsquo;re
            off the Play Store.
          </p>
          <p>
            We collect your name, email, and WhatsApp number here so we can
            let you know when a new version is ready and match your
            download to the WhatsApp group. This is separate from the
            app itself, which stores your health data only on your own
            device, never on our servers. See our{" "}
            <Link href="/privacy" className="underline hover:text-text-mid">
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
