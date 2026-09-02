import type { Metadata } from "next";
// Fonts are vendored via @fontsource (npm packages, bundled at build time)
// rather than next/font/google, so the build never depends on reaching
// Google's font CDN — it just reads from node_modules like any other
// dependency. Same end result (self-hosted, no runtime request to Google).
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/libre-baskerville/400.css";
import "@fontsource/libre-baskerville/700.css";
import "./globals.css";

// "||" (not "??") on purpose: an env var set to an empty string ("") is not
// null/undefined, so "??" would let "" through and new URL("") below would
// throw "Invalid URL". "||" treats "" as falsy too, so a blank
// NEXT_PUBLIC_SITE_URL in .env.local falls back correctly either way.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://myhealingcycles.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "My Healing Cycles: daily healing protocols, starting with fibroids",
  description:
    "A private, faith-anchored app for daily healing protocols that pairs your habits with your lab and imaging results. Our first protocol: a structured program for uterine fibroids that adapts to your own cycle, built around Nigerian food and herbs. Join the waitlist for early access.",
  openGraph: {
    title: "My Healing Cycles",
    description:
      "Daily, faith-anchored healing protocols that track your habits and your lab results together, all in one private app. Starting with a fibroid protocol that adapts to your own cycle, built around Nigerian food and herbs. Join the waitlist.",
    url: siteUrl,
    siteName: "My Healing Cycles",
    images: [{ url: "/images/logo.png", width: 1080, height: 1080 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "My Healing Cycles",
    description:
      "Daily, faith-anchored healing protocols, starting with a fibroid protocol that adapts to your own cycle. Join the waitlist for early access.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-cream text-text-dark" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
