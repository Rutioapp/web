export type BlogSection =
  | {
      type: "paragraphs";
      heading?: string;
      paragraphs: string[];
    }
  | {
      type: "list";
      heading: string;
      items: string[];
    };

export interface BlogVisual {
  type: "hero" | "inline" | "concept";
  placement: "after-title" | "after-intro" | "between-sections" | "near-conclusion";
  concept: string;
  alt: string;
  caption?: string;
  imageSrc?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  updatedAt?: string;
  readingTime?: string;
  category?: string;
  tags?: string[];
  draft?: boolean;
  visual?: BlogVisual;
  content: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "Por qué abandonamos los hábitos, incluso cuando usamos una app para seguirlos",
    slug: "por-que-abandonamos-los-habitos",
    description:
      "Por qué una racha rota puede hacernos abandonar un hábito y qué queremos construir en Rutio para volver con más calma y menos culpa.",
    date: "2026-06-01",
    readingTime: "5 min",
    category: "Habits",
    tags: ["hábitos", "consistencia", "rutio"],
    draft: false,
    visual: {
      type: "concept",
      placement: "after-intro",
      concept:
        "Un visual sereno en pantalla dividida que contraste una app de hábitos centrada en rachas rotas con una vista de recuperación y progreso gradual en Rutio.",
      alt: "Comparativa visual entre una app de hábitos centrada en una racha rota y una experiencia más calmada de recuperación y progreso inspirada en Rutio.",
      caption: "Los hábitos no se construyen en rachas perfectas, sino en la capacidad de volver después de fallar.",
      imageSrc: "/images/blog/image_blog1.webp"
    },
    content: [
      {
        type: "paragraphs",
        paragraphs: [
          "Enero. Nueva app descargada, notificaciones activadas, hábitos añadidos con toda la ilusión del mundo. Los primeros días van bien. Incluso la primera semana.",
          "Pero llega un viaje, una semana caótica o un mal día, y la racha se rompe.",
          "Y con ella, muchas veces, se va también la motivación entera.",
          "Lo peor no es haber fallado. Lo peor es abrir la app al día siguiente y ver esa racha a cero, esa cadena rota, ese recordatorio silencioso de que has vuelto a empezar desde cero.",
          "¿Te suena?",
          "El problema no es la disciplina. Es el diseño."
        ]
      },
      {
        type: "paragraphs",
        heading: "Cuando la app solo cuenta rachas",
        paragraphs: [
          "Muchas apps de hábitos funcionan igual: entras, marcas lo que has hecho y sales. Es un sistema limpio, sencillo… y completamente frío.",
          "Tratan los hábitos como una lista de tareas. Si completas todo, eres constante. Si fallas, el sistema te devuelve a cero.",
          "No hay contexto, no hay acompañamiento y no hay manera de distinguir entre alguien que lleva tres meses construyendo un hábito sólido y alguien que acaba de empezar."
        ]
      },
      {
        type: "paragraphs",
        heading: "Qué queremos que haga Rutio",
        paragraphs: [
          "Rutio nace con una idea diferente: no solo registrar lo que haces, sino acompañarte en el proceso.",
          "Si llevas días sin abrir la app, Rutio no te recibe con una racha rota y un contador castigándote. Te ayuda a retomar desde donde lo dejaste y a entender qué pasó.",
          "El objetivo no es mantener una racha perfecta, sino construir una versión de ti que sea más constante con el tiempo.",
          "Rutio identifica patrones, reconoce en qué partes de tu vida estás progresando y en cuáles necesitas más apoyo, y convierte ese proceso en algo que da gusto seguir."
        ]
      },
      {
        type: "paragraphs",
        heading: "Volver importa más que la racha",
        paragraphs: [
          "Los hábitos no se construyen en rachas perfectas. Se construyen en la capacidad de volver después de fallar.",
          "Y para eso estamos aquí."
        ]
      }
    ]
  },
  {
    title: "¿Por qué otra app de hábitos?",
    slug: "por-que-otra-app-de-habitos",
    description:
      "Borrador inicial sobre la visión de Rutio: hábitos sostenibles, progreso visual y motivación serena.",
    date: "2026-05-31",
    readingTime: "5 min",
    category: "Rutio",
    tags: ["producto", "hábitos", "beta"],
    draft: true,
    content: [
      {
        type: "paragraphs",
        paragraphs: [
          "Este artículo es un borrador de trabajo para abrir el blog de Rutio. Lo usamos para validar estructura, tono y formato antes de publicar contenido final.",
          "No buscamos otra lista de tareas disfrazada de app de hábitos. Queremos una experiencia que ayude a volver al camino con calma incluso después de una semana difícil."
        ]
      },
      {
        type: "paragraphs",
        heading: "Lo que estamos construyendo",
        paragraphs: [
          "Rutio combina hábitos diarios, familias de hábitos, seguimiento visual, diario y tareas en contexto para entender progreso real.",
          "La motivación se apoya en XP y logros discretos. La meta no es competir, sino sostener una práctica que te ayude a largo plazo."
        ]
      },
      {
        type: "list",
        heading: "Qué vendrá en siguientes artículos",
        items: [
          "Por qué muchas apps de hábitos fallan cuando cambia tu semana.",
          "Cómo usamos progreso visual para detectar consistencia real.",
          "Notas de beta y decisiones de producto en público."
        ]
      }
    ]
  }
];
