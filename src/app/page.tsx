import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { BetaSection } from "@/components/sections/beta-form/beta-section";
import { FamiliesSection } from "@/components/sections/families/families-section";
import { GamificationSection } from "@/components/sections/gamification/gamification-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works/how-it-works-section";
import { MarqueeSection } from "@/components/sections/marquee/marquee-section";
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <HowItWorksSection />
        <FamiliesSection />
        <GamificationSection />
        <TestimonialsSection />
        <BetaSection />
      </main>
      <Footer />
    </>
  );
}
