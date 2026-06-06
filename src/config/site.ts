export const siteConfig = {
  name: "Rutio",
  shortName: "Rutio",
  description:
    "Rutio te ayuda a crear habitos sostenibles, visualizar tu progreso y mantener la motivacion con una gamificacion calmada.",
  url: "https://www.rutioapp.com",
  locale: "es_ES",
  footer: {
    summary:
      "Rutio es una app de habitos calmada y premium para construir constancia sostenible con progreso visual.",
    betaStatus:
      "Rutio esta en desarrollo. Unete a la beta para seguir el progreso y recibir novedades."
  },
  contact: {
    email: "contact@rutioapp.com"
  },
  links: {
    waitlist: "/#beta",
    legal: {
      privacy: "/privacy",
      terms: "/terms"
    },
    social: [] as Array<{ label: string; href: string }>
  },
  metadata: {
    title: "Rutio - Habitos visuales para construir constancia",
    openGraphTitle: "Rutio - Construye habitos con calma y constancia",
    openGraphDescription:
      "Una app de habitos visual, premium y calmada para seguir tu progreso, organizar familias de habitos y celebrar pequenos avances.",
    ogImage: {
      url: "/images/og/og-default.svg",
      width: 1200,
      height: 630,
      alt: "Vista previa de Rutio con enfoque en habitos visuales y constancia calmada"
    }
  }
} as const;
