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
    title: "Por qué abandonamos los hábitos (aunque tengamos una app para seguirlos)",
    slug: "por-que-abandonamos-los-habitos",
    description:
      "Por qué muchas personas abandonamos hábitos tras romper una racha y qué enfoque queremos construir en Rutio para volver sin culpa.",
    date: "2026-06-01",
    readingTime: "5 min",
    category: "Habits",
    tags: ["hábitos", "consistencia", "rutio"],
    draft: false,
    content: [
      {
        type: "paragraphs",
        paragraphs: [
          "Enero. Nueva app descargada, notificaciones activadas, hábitos añadidos con toda la ilusión del mundo. Los primeros días van bien. Incluso la primera semana. Pero llega un viaje, una semana caótica, un mal día, y la racha se rompe.",
          "Y con ella, muchas veces, la motivación entera.",
          "Lo peor no es haber fallado. Lo peor es abrir la app al día siguiente y ver esa racha a cero, esa cadena rota, ese recordatorio silencioso de que has vuelto a empezar desde cero. En ese momento, la mayoría cierra la app. Y no vuelve.",
          "¿Te suena?",
          "El problema no es la disciplina. Es el diseño.",
          "¿Cuántas apps de hábitos has probado en los últimos años? La mayoría funcionan igual: entras, marcas lo que has hecho y sales. Es un sistema limpio, sencillo… y completamente frío.",
          "Estas apps tratan los hábitos como una lista de tareas. Si completas todo, eres constante. Si fallas, eres un número más en sus estadísticas de abandono. No hay contexto, no hay acompañamiento, no hay manera de distinguir entre alguien que lleva tres meses construyendo un hábito sólido y alguien que acaba de empezar.",
          "El resultado es siempre el mismo: funcionan durante unos días, quizás alguna semana, pero en cuanto la vida real aparece, el sistema colapsa. Y tú te vas con él.",
          "Rutio nace con una idea diferente.",
          "No solo registra lo que haces. Te acompaña en el proceso.",
          "Si llevas días sin abrir la app, Rutio no te recibe con una racha a cero y un contador roto. Te ayuda a retomar desde donde lo dejaste, a entender qué pasó y a seguir avanzando. Porque el objetivo no es mantener una racha perfecta, sino construir una versión de ti que sea más constante con el tiempo.",
          "Rutio identifica patrones en tus hábitos, reconoce en qué áreas de tu vida estás progresando y en cuáles necesitas más apoyo, y convierte ese proceso en algo que da gusto seguir. No porque sea fácil, sino porque por fin sientes que el sistema está de tu lado.",
          "Los hábitos no se construyen en rachas perfectas. Se construyen en la capacidad de volver después de fallar.",
          "Y para eso estamos aquí."
        ]
      }
    ]
  },
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
