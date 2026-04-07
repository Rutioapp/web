export const siteConfig = {
  name: "Rutio",
  shortName: "Rutio",
  description: "App de hábitos premium, calmada y mobile-first, diseñada para una experiencia iOS-first.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es_ES"
} as const;
