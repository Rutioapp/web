import type { LandingContent } from "@/types/landing";

export const landingContent = {
  announcement: "Beta privada 2026 · Plazas limitadas para iPhone y iPad.",
  nav: {
    links: [
      { label: "Cómo funciona", href: "/#como-funciona" },
      { label: "Familias", href: "/#familias" }
    ],
    cta: {
      label: "Unirse a la beta",
      href: "/#beta",
      ariaLabel: "Ir al formulario de acceso anticipado de la beta de Rutio"
    }
  },
  hero: {
    eyebrow: "Beta privada · iOS · 2026",
    titleLead: "El hábito",
    titleAccentPrefix: "de",
    titleAccent: "construir",
    titleStrong: "tu camino.",
    description:
      "Rutio convierte tus hábitos en una experiencia que engancha de verdad. Gamificación, reflexión personal y siete dimensiones del crecimiento, en una sola app.",
    primaryCta: {
      label: "Pedir mi plaza en la beta",
      href: "/#beta",
      ariaLabel: "Abrir el formulario para pedir una plaza en la beta privada de Rutio"
    },
    secondaryCta: {
      label: "Cómo funciona",
      href: "/#como-funciona",
      ariaLabel: "Ir a la sección que explica cómo funciona Rutio"
    },
    highlights: [
      {
        title: "Gamificación real",
        description: "Progreso visible, moneda interna y rachas diseñadas con un tono sobrio y premium."
      },
      {
        title: "Siete familias",
        description: "Una estructura clara para abarcar mente, cuerpo, disciplina, relaciones y más."
      },
      {
        title: "Reflexión integrada",
        description: "Rutinas, journal y feedback visual unidos en una experiencia mobile-first."
      }
    ],
    socialProof: {
      summary: "+200 personas ya en lista de espera",
      detail: "Plazas limitadas para la beta privada inicial.",
      avatars: [
        { name: "Alba M.", initials: "A", color: "122 158 126" },
        { name: "Marc T.", initials: "M", color: "184 137 90" },
        { name: "Laura G.", initials: "L", color: "124 107 174" },
        { name: "Julia P.", initials: "J", color: "91 143 168" }
      ]
    },
    devicePanel: {
      greeting: "Buenos días, Vicenç",
      dateLabel: "JUEVES · 5 DE JUNIO",
      levelLabel: "Nivel 7",
      progress: 68,
      progressValue: "68%",
      sectionLabel: "Hábitos de hoy",
      habits: [
        {
          name: "Meditación",
          family: "Espíritu",
          duration: "10 min",
          emoji: "SP",
          color: "91 143 168",
          completed: true
        },
        {
          name: "Entrenamiento",
          family: "Cuerpo",
          duration: "45 min",
          emoji: "GY",
          color: "201 112 72",
          completed: true
        },
        {
          name: "Lectura",
          family: "Mente",
          duration: "20 min",
          emoji: "RD",
          color: "124 107 174",
          completed: false
        },
        {
          name: "Journaling",
          family: "Emocional",
          duration: "8 min",
          emoji: "JR",
          color: "212 116 140",
          completed: false
        }
      ],
      amberAmount: "320",
      amberLabel: "ámbar acumulado",
      amberCoin: "A",
      secondaryPreview: {
        title: "Tu semana",
        habits: [
          { label: "Movimiento suave", color: "122 158 126" },
          { label: "Lectura consciente", color: "124 107 174" },
          { label: "Respiración guiada", color: "91 143 168" },
          { label: "Check-in emocional", color: "212 116 140" }
        ],
        streak: [
          "122 158 126",
          "122 158 126",
          "122 158 126",
          "122 158 126",
          "201 168 76",
          "201 168 76",
          "255 255 255"
        ],
        caption: "Esta semana"
      },
      floatingBadges: [
        {
          title: "Badge desbloqueado",
          subtitle: "3 mañanas seguidas",
          tone: "light",
          icon: "+"
        },
        {
          title: "+12 XP",
          subtitle: "Racha activa",
          tone: "dark",
          dotColor: "122 158 126"
        }
      ]
    }
  },
  sections: {
    marquee: {
      items: [
        "Construye tu camino",
        "Gamificación real",
        "7 dimensiones del crecimiento",
        "Hábitos que duran",
        "Gana mientras creces",
        "Tu vida, organizada"
      ]
    },
    howItWorks: {
      eyebrow: "Así funciona",
      title: "Simple de usar.",
      highlight: "Difícil de dejar.",
      description:
        "Rutio está diseñada para que empieces en 2 minutos y sigas durante años. Sin fricción, con recompensa real.",
      steps: [
        {
          number: "01",
          title: "Elige tus hábitos",
          description: "Más de 200 hábitos listos, organizados en 7 familias. O crea los tuyos. En minutos tienes tu primera rutina."
        },
        {
          number: "02",
          title: "Completa y gana",
          description: "Cada hábito completado suma XP y moneda Ámbar. Tu progreso se convierte en algo tangible, no solo en números vacíos."
        },
        {
          number: "03",
          title: "Personaliza tu experiencia",
          description: "Usa el Ámbar en la tienda: temas de cielo, fondos nocturnos, amanecer. Tu app evoluciona contigo."
        },
        {
          number: "04",
          title: "Reflexiona en tu diario",
          description: "El diario integrado te conecta con tus avances. Prompts guiados, resúmenes semanales y patrones que no verías solo."
        }
      ],
      gallery: {
        primary: {
          eyebrow: "Screenshots del flujo",
          title: "Creación / Today / Celebración",
          description:
            "Pantalla de creación de hábito, vista Today con hábito activo y celebración de completado con frase motivacional.",
          height: "lg"
        },
        secondary: [
          {
            eyebrow: "Vista diario",
            title: "Journal con prompt del día",
            description: "Espacio pensado para registrar sensaciones, aprendizajes y patrones semanales.",
            height: "md"
          },
          {
            eyebrow: "Rutinas",
            title: "Library de hábitos y packs",
            description: "Exploración clara de rutinas listas para usar, editables y preparadas para crecer.",
            height: "md"
          }
        ]
      }
    },
    families: {
      eyebrow: "Las 7 familias",
      title: "Cada parte de ti,",
      highlight: "cubierta.",
      description:
        "No solo deporte o meditación. Rutio cubre el espectro completo del crecimiento personal.",
      items: [
        { slug: "mente", emoji: "ME", label: "Mente", description: "Lectura, aprendizaje, foco", color: "124 107 174" },
        { slug: "espiritu", emoji: "ES", label: "Espíritu", description: "Meditación, gratitud, calma", color: "91 143 168" },
        { slug: "cuerpo", emoji: "CU", label: "Cuerpo", description: "Ejercicio, nutrición, descanso", color: "201 112 72" },
        { slug: "emocional", emoji: "EM", label: "Emocional", description: "Autoconocimiento, emociones", color: "212 116 140" },
        { slug: "social", emoji: "SO", label: "Social", description: "Relaciones, comunidad", color: "107 158 107" },
        { slug: "disciplina", emoji: "DI", label: "Disciplina", description: "Constancia, metas, orden", color: "139 115 85" },
        { slug: "profesional", emoji: "PR", label: "Profesional", description: "Carrera, habilidades, red", color: "74 124 158" }
      ]
    },
    gamification: {
      eyebrow: "Gamificación",
      title: "Tu esfuerzo",
      highlight: "tiene valor real.",
      description:
        "No es solo una racha que no quieres romper. Es una economía de recompensa que hace que quieras volver cada día.",
      amber: {
        title: "Tu moneda · Ámbar",
        amount: "320",
        unit: "ámbar acumulado",
        nextUnlock: "Tema Tormenta · 500 ámbar",
        progress: 63,
        rewards: [
          { icon: "AM", name: "Amanecer", cost: "200 ámbar" },
          { icon: "TR", name: "Tormenta", cost: "500 ámbar" },
          { icon: "NC", name: "Noche", cost: "350 ámbar" }
        ]
      },
      streak: {
        label: "Racha actual",
        value: "14",
        sublabel: "días consecutivos",
        dots: [
          "122 158 126",
          "122 158 126",
          "122 158 126",
          "122 158 126",
          "201 168 76",
          "201 168 76",
          "255 255 255"
        ],
        caption: "Esta semana"
      },
      metrics: [
        {
          shortLabel: "XP",
          title: "Puntos de experiencia",
          description: "Cada hábito completado sube tu nivel. Los hábitos difíciles dan más XP. Sube de nivel y desbloquea logros."
        },
        {
          shortLabel: "AM",
          title: "Moneda Ámbar",
          description: "La moneda interna de Rutio. Gánala completando hábitos y rachas. Gástala en la tienda para personalizar tu app."
        }
      ]
    },
    testimonials: {
      eyebrow: "Beta testers",
      title: "Primeros en el",
      highlight: "camino.",
      description: "Sensaciones tempranas de usuarios que ya entienden el tono del producto.",
      items: [
        {
          quote: "Por fin una app que no me hace sentir culpable cuando fallo un día. Es como tener un compañero que te entiende.",
          author: "Alba M.",
          role: "Diseñadora UX · 28 años",
          initials: "A",
          color: "122 158 126"
        },
        {
          quote: "La gamificación engancha de verdad. Llevo 34 días seguidos y lo que más me sorprende es que no parece forzado.",
          author: "Marc T.",
          role: "Emprendedor · 31 años",
          initials: "M",
          color: "184 137 90"
        },
        {
          quote: "El diario integrado cambió cómo me relaciono con mis hábitos. Ver los patrones semanales es revelador.",
          author: "Laura G.",
          role: "Psicóloga · 25 años",
          initials: "L",
          color: "91 143 168"
        }
      ],
      lifestylePlaceholder: {
        eyebrow: "Foto lifestyle",
        title: "Rutio en un momento cálido y real",
        description:
          "Persona usando Rutio en un ambiente natural, luz suave y una sensación mindful. Sin estética stock de fondo blanco.",
        height: "md"
      }
    },
    beta: {
      eyebrow: "Beta privada",
      title: "Empieza antes",
      highlight: "que los demás.",
      description:
        "La beta de Rutio es limitada e invitación. Únete a la lista, forma parte del proceso y ayuda a construir la mejor app de hábitos que haya existido.",
      spotsLabel: "Solo 200 plazas disponibles · iOS primero",
      benefits: [
        { label: "Acceso anticipado a la versión completa" },
        { label: "500 ámbar de bienvenida" },
        { label: "Influencia directa en el producto" }
      ],
      form: {
        title: "Reserva tu plaza",
        subtitle: "Te avisamos cuando tu invitación esté lista. Sin spam, solo lo que importa.",
        fields: {
          firstName: "Nombre",
          lastName: "Apellido",
          email: "Email",
          challenge: "¿Cuál es tu mayor reto?",
          device: "Dispositivo",
          consent: "Acepto recibir novedades y actualizaciones de Rutio por email. Puedes darte de baja cuando quieras."
        },
        placeholders: {
          firstName: "Tu nombre",
          lastName: "Apellido",
          email: "tu@email.com"
        },
        challengeOptions: [
          { value: "mente", label: "ME Mente — constancia intelectual" },
          { value: "espiritu", label: "ES Espíritu — meditación y calma" },
          { value: "cuerpo", label: "CU Cuerpo — deporte y salud" },
          { value: "emocional", label: "EM Emocional — bienestar interior" },
          { value: "social", label: "SO Social — relaciones y comunidad" },
          { value: "disciplina", label: "DI Disciplina — metas y orden" },
          { value: "profesional", label: "PR Profesional — carrera y habilidades" }
        ],
        deviceOptions: [
          { value: "iphone", label: "iPhone (iOS)" },
          { value: "android", label: "Android" },
          { value: "both", label: "Ambos" }
        ],
        submitLabel: "Quiero mi plaza en la beta",
        note: "Recibirás un email de confirmación al apuntarte. Tu plaza es personal e intransferible.",
        successTitle: "Tu solicitud ya está guardada.",
        successDescription: "Cuando abramos la siguiente ola de invitaciones, serás de las primeras personas en enterarte.",
        successAction: "Enviar otra solicitud"
      }
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Una base lista para resolver dudas de producto, acceso y roadmap.",
      description: "La sección queda preparada para añadirse en la siguiente iteración."
    }
  },
  footer: {
    blurb:
      "Rutio nace para convertir la constancia diaria en una experiencia más humana, motivadora y visualmente cuidada.",
    columns: [
      {
        title: "Producto",
        links: [
          { label: "Inicio", href: "/" },
          { label: "Cómo funciona", href: "/#como-funciona" },
          { label: "Beta", href: "/#beta" }
        ]
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: "hola@rutio.app", href: "mailto:hola@rutio.app" }
        ]
      }
    ],
    legal: "Rutio · Construye tu camino · Beta 2026"
  }
} satisfies LandingContent;




