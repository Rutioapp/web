import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

const defaultTitle = siteConfig.metadata.title;
const defaultDescription = siteConfig.description;
const openGraphImage = siteConfig.metadata.ogImage;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`
  },
  description: defaultDescription,
  applicationName: siteConfig.name,
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.metadata.openGraphTitle,
    description: siteConfig.metadata.openGraphDescription,
    images: [openGraphImage]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metadata.openGraphTitle,
    description: siteConfig.metadata.openGraphDescription,
    images: [openGraphImage.url]
  },
  icons: {
    icon: [{ url: "/images/brand/rutio-mark.svg", type: "image/svg+xml" }],
    apple: [{ url: "/images/brand/rutio-mark.svg", type: "image/svg+xml" }],
    shortcut: ["/images/brand/rutio-mark.svg"]
  }
};
