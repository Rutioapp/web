import type { Metadata } from "next";

import { landingContent } from "@/content/landing-content";
import { siteConfig } from "@/config/site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Habitos premium y calmados`,
    template: `%s | ${siteConfig.name}`
  },
  description: landingContent.hero.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Habitos premium y calmados`,
    description: landingContent.hero.description,
    images: [
      {
        url: "/images/og/og-default.svg",
        width: 1200,
        height: 630,
        alt: "Vista previa de la landing de Rutio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Habitos premium y calmados`,
    description: landingContent.hero.description,
    images: ["/images/og/og-default.svg"]
  },
  icons: {
    icon: "/images/brand/rutio-mark.svg",
    apple: "/images/brand/rutio-mark.svg"
  },
  keywords: [
    "Rutio",
    "app de habitos",
    "habit tracker",
    "mobile first",
    "ios first",
    "next.js landing"
  ]
};
