import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Screenshots from "@/components/Screenshots";
import FollowAlong from "@/components/FollowAlong";
import WaitlistSection from "@/components/WaitlistSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Screenshots />
        <FollowAlong />
        <WaitlistSection />
      </main>
      <SiteFooter />
    </div>
  );
}
