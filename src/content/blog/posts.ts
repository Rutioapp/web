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
  content: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "Por que otra app de habitos?",
    slug: "por-que-otra-app-de-habitos",
    description:
      "Borrador inicial sobre la vision de Rutio: habitos sostenibles, progreso visual y motivacion serena.",
    date: "2026-05-31",
    readingTime: "5 min",
    category: "Construyendo Rutio",
    tags: ["producto", "habitos", "beta"],
    draft: true,
    content: [
      {
        type: "paragraphs",
        paragraphs: [
          "Este articulo es un borrador de trabajo para abrir el blog de Rutio. Lo usamos para validar estructura, tono y formato antes de publicar contenido final.",
          "No buscamos otra lista de tareas disfrazada de app de habitos. Queremos una experiencia que ayude a volver al camino con calma incluso despues de una semana dificil."
        ]
      },
      {
        type: "paragraphs",
        heading: "Lo que estamos construyendo",
        paragraphs: [
          "Rutio combina habitos diarios, familias de habitos, seguimiento visual, diario y tareas en contexto para entender progreso real.",
          "La motivacion se apoya en XP y logros discretos. La meta no es competir, sino sostener una practica que te ayude a largo plazo."
        ]
      },
      {
        type: "list",
        heading: "Que vendra en siguientes articulos",
        items: [
          "Por que muchas apps de habitos fallan cuando cambia tu semana.",
          "Como usamos progreso visual para detectar consistencia real.",
          "Notas de beta y decisiones de producto en publico."
        ]
      }
    ]
  }
];
