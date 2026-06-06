import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { BetaSection } from "@/components/sections/beta-form/beta-section";
import { FamiliesSection } from "@/components/sections/families/families-section";
import { GamificationSection } from "@/components/sections/gamification/gamification-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works/how-it-works-section";
import { MarqueeSection } from "@/components/sections/marquee/marquee-section";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute: "Rutio - hábitos visuales para construir constancia"
  },
  description:
    "Rutio es una app de hábitos para construir constancia sostenible, ver tu progreso con claridad y mantener una motivación calmada.",
  alternates: {
    canonical: absoluteUrl("/")
  },
  openGraph: {
    type: "website",
    title: "Rutio - hábitos visuales para construir constancia",
    description:
      "Rutio es una app de hábitos para construir constancia sostenible, ver tu progreso con claridad y mantener una motivación calmada.",
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    images: [
      {
        ...siteConfig.metadata.ogImage,
        url: absoluteUrl(siteConfig.metadata.ogImage.url)
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rutio - hábitos visuales para construir constancia",
    description:
      "Rutio es una app de hábitos para construir constancia sostenible, ver tu progreso con claridad y mantener una motivación calmada.",
    images: [absoluteUrl(siteConfig.metadata.ogImage.url)]
  }
};

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
        <BetaSection />
      </main>
      <Footer />
    </>
  );
}
