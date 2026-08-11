import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "My Healing Cycles: Terms of Service",
  description: "Terms for using the My Healing Cycles waitlist site.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-2xl px-6 py-14 sm:py-16">
        <h1 className="font-serif text-[28px] sm:text-[32px] font-bold text-text-dark">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-8 space-y-7 text-[15px] leading-relaxed text-text-mid">
          <section>
            <h2 className="font-semibold text-text-dark text-[17px]">This site</h2>
            <p className="mt-2">
              This website is operated by Didymus Digital Services (Abuja,
              Nigeria) as a pre-launch waitlist page for the My Healing
              Cycles app, which is currently in development and not yet
              published to any app store. By joining the waitlist, you agree
              to receive occasional email updates about the app&rsquo;s
              launch. You can unsubscribe at any time.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-text-dark text-[17px]">Not medical advice</h2>
            <p className="mt-2">
              Nothing on this site, or in the My Healing Cycles app once
              launched, is medical advice, diagnosis, or treatment. My
              Healing Cycles is designed to support daily habits and help you
              track markers over time, alongside guidance from your own
              doctor or healthcare provider, not to replace it. Always
              consult a qualified healthcare professional about your
              condition, medication, or treatment plan.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-text-dark text-[17px]">No guarantee of outcome</h2>
            <p className="mt-2">
              Individual results vary. We make no claim or guarantee that
              using My Healing Cycles will cure, treat, or eliminate any
              medical condition.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-text-dark text-[17px]">Changes</h2>
            <p className="mt-2">
              We may update these terms as the app moves toward launch. The
              app itself will carry its own, more detailed Terms of Service,
              written for its own no-login, local-first architecture and
              linked from its Settings screen; it should not be assumed to
              describe this website.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-text-dark text-[17px]">A note on these terms</h2>
            <p className="mt-2">
              This is a good-faith description of the terms for using this
              website, written by the team building it. It has not yet been
              reviewed by an attorney and should not be treated as a
              certified-compliant legal document.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-text-dark text-[17px]">Contact</h2>
            <p className="mt-2">
              Questions about these terms:{" "}
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
