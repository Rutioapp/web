import type { LandingContent } from "@/types/landing";

import { siteConfig } from "@/config/site";

export const landingContent = {
  announcement: "Beta privada 2026 · Acceso anticipado con plazas limitadas.",
  nav: {
    links: [
      { label: "Cómo funciona", href: "/#como-funciona" },
      { label: "Familias", href: "/#familias" },
      { label: "Blog", href: "/blog" }
    ],
    cta: {
      label: "Unirme a la beta privada",
      href: "/#beta",
      ariaLabel: "Ir al formulario de acceso anticipado de la beta de Rutio"
    }
  },
  hero: {
    eyebrow: "Beta privada · Acceso anticipado 2026",
    titleLead: "El hábito",
    titleAccentPrefix: "de",
    titleAccent: "construir",
    titleStrong: "tu camino.",
    description:
      "Rutio es una app de hábitos para construir consistencia sostenible, ver progreso real y mantener la motivación con señales visuales claras.",
    primaryCta: {
      label: "Unirme a la beta privada",
      href: "/#beta",
      ariaLabel: "Abrir el formulario para pedir acceso anticipado a la beta privada de Rutio"
    },
    secondaryCta: {
      label: "Ver cómo funciona",
      href: "/#como-funciona",
      ariaLabel: "Ir a la sección que explica cómo funciona Rutio"
    },
    highlights: [
      {
        title: "Constancia sostenible",
        description: "Hábitos claros que encajan en tu ritmo diario para sostenerlos sin fricción."
      },
      {
        title: "Progreso visual",
        description: "Semanas, rachas y familias en vistas legibles para entender tu evolución."
      },
      {
        title: "Motivación calmada",
        description: "XP, logros y pequeños desbloqueos para volver mañana con intención."
      }
    ],
    socialProof: {
      detail: "Abrimos acceso por cupos para mantener una beta cuidada y aprender de cada tanda.",
      counter: {
        title: "Referencia de beta",
        fallbackValue: 30,
        metricLabel: "rutinas iniciadas",
        contextLabel: "en la beta privada",
        loadingLabel: "Actualizando referencia de la beta",
        fallbackHint: "Valor de referencia mientras finalizamos la integración del contador.",
        errorHint: "Mostrando un valor de referencia estable."
      },
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
          title: "Ritmo de mañana",
          subtitle: "3 mañanas seguidas",
          tone: "light",
          icon: "RM"
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
        "Constancia que se sostiene",
        "Progreso que se ve",
        "Hábitos por familias",
        "Diario y tareas en contexto",
        "Motivación calmada",
        "Diseño pensado para durar"
      ]
    },
    howItWorks: {
      eyebrow: "Así funciona",
      title: "Simple de usar.",
      highlight: "Fácil de sostener.",
      description:
        "Rutio está diseñada para que puedas empezar rápido, mantener el ritmo y ajustar con claridad cuando tu semana cambia.",
      steps: [
        {
          number: "01",
          eyebrow: "CREAR HÁBITO",
          title: "Empieza con un hábito claro",
          description:
            "Elige un hábito concreto, define su seguimiento y ubícalo en una familia para que encaje en tu rutina desde el inicio.",
          visual: {
            badge: "Captura pendiente",
            title: "Alta de hábito guiada",
            description: "Mostrará nombre, familia, tipo de seguimiento y frecuencia semanal.",
            helper: "Visual final: creación breve, clara y sin pasos innecesarios."
          },
          note: "Placeholder para la captura final de creación de hábito."
        },
        {
          number: "02",
          eyebrow: "REGISTRAR PROGRESO",
          title: "Marca avances sin fricción",
          description:
            "Registra en segundos hábitos tipo check o de conteo desde Today, sin menús largos ni ruido.",
          visual: {
            badge: "Captura pendiente",
            title: "Registro rápido en Today",
            description: "Mostrará acciones de completar y ajustar conteos desde una sola vista.",
            helper: "Visual final: interacción directa y ritmo calmado."
          }
        },
        {
          number: "03",
          eyebrow: "VER CONSISTENCIA",
          title: "Ve tu consistencia de forma visual",
          description:
            "Observa días, semanas, familias y rachas en vistas limpias para detectar patrones y ajustar con criterio.",
          visual: {
            badge: "Captura pendiente",
            title: "Semana y mes en contexto",
            description: "Mostrará días completados, pausas y equilibrio entre familias activas.",
            helper: "Visual final: lectura rápida de consistencia real."
          }
        },
        {
          number: "04",
          eyebrow: "MOTIVACIÓN CALMADA",
          title: "Mantén la motivación con calma",
          description:
            "Suma XP, niveles y logros discretos que celebran pequeños avances y sostienen la continuidad.",
          visual: {
            badge: "Captura pendiente",
            title: "XP, nivel y logro del día",
            description: "Mostrará progreso de nivel y un logro desbloqueado sin saturar la pantalla.",
            helper: "Visual final: recompensa sutil para volver mañana."
          }
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
        "Rutio organiza tus hábitos por áreas de vida para que avances con equilibrio, no solo por impulso.",
      items: [
        { slug: "mente", emoji: "ME", label: "Mente", description: "Lectura, aprendizaje, foco", color: "124 107 174" },
        { slug: "espiritu", emoji: "ES", label: "Espíritu", description: "Meditación, gratitud, calma", color: "106 158 127" },
        { slug: "cuerpo", emoji: "CU", label: "Cuerpo", description: "Ejercicio, nutrición, descanso", color: "201 112 72" },
        { slug: "emocional", emoji: "EM", label: "Emocional", description: "Autoconocimiento, emociones", color: "196 104 122" },
        { slug: "social", emoji: "SO", label: "Social", description: "Relaciones, comunidad", color: "90 143 173" },
        { slug: "disciplina", emoji: "DI", label: "Disciplina", description: "Constancia, metas, orden", color: "192 154 58" },
        { slug: "profesional", emoji: "PR", label: "Profesional", description: "Carrera, habilidades, red", color: "107 125 114" }
      ]
    },
    gamification: {
      eyebrow: "Gamificación",
      title: "Tu esfuerzo",
      highlight: "tiene valor real.",
      description:
        "La motivación en Rutio es visual y serena: progreso por semanas, equilibrio por familias y pequeñas recompensas que acompañan.",
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
          shortLabel: "VIS",
          title: "Constancia visible",
          description:
            "Detecta patrones semanales y mensuales de un vistazo para entender qué sostienes de verdad."
        },
        {
          shortLabel: "FAM",
          title: "Equilibrio por familias",
          description:
            "Comprueba si tu energía está repartida entre mente, cuerpo, emocional, social y foco profesional."
        },
        {
          shortLabel: "XP",
          title: "Motivación calmada",
          description:
            "Suma XP, niveles y logros discretos. Recompensas pequeñas que celebran progreso real sin convertirlo en presión."
        }
      ]
    },
    testimonials: {
      eyebrow: "Beta testers",
      title: "Primeros en el",
      highlight: "camino.",
      description: "Primeras impresiones de personas que están construyendo consistencia con Rutio.",
      items: [
        {
          quote: "Por fin una app que no me hace sentir culpable cuando fallo un día. Me ayuda a retomar sin drama.",
          author: "Alba M.",
          role: "Diseñadora UX · 28 años",
          initials: "A",
          color: "122 158 126"
        },
        {
          quote: "Los XP y los logros están bien medidos. Motivan sin convertir el hábito en una competición constante.",
          author: "Marc T.",
          role: "Emprendedor · 31 años",
          initials: "M",
          color: "184 137 90"
        },
        {
          quote: "El diario integrado me ayuda a entender por qué cumplo más en unas semanas que en otras.",
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
      title: "Únete a la beta",
      highlight: "privada.",
      description:
        "Solicita acceso anticipado, comparte tu contexto y ayúdanos a pulir una experiencia de hábitos más calmada y útil.",
      spotsLabel: "Solo 200 plazas disponibles · iOS primero",
      benefits: [
        { label: "Acceso anticipado a la experiencia completa" },
        { label: "500 ámbar de bienvenida" },
        { label: "Feedback directo con el equipo de producto" }
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
        submitLabel: "Unirme a la beta privada",
        note: "Recibirás un email de confirmación al apuntarte. Tu acceso será personal e intransferible.",
        successTitle: "Tu solicitud ya está guardada.",
        successDescription: "Cuando abramos la siguiente ola de invitaciones, te avisaremos por email.",
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
      "Rutio convierte la constancia diaria en una experiencia más humana, visual y sostenible.",
    columns: [
      {
        title: "Producto",
        links: [
          { label: "Inicio", href: "/" },
          { label: "Cómo funciona", href: "/#como-funciona" },
          { label: "Blog", href: "/blog" },
          { label: "Beta", href: "/#beta" }
        ]
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` }
        ]
      }
    ],
    legal: "Rutio · Construye tu camino · Beta 2026"
  }
} satisfies LandingContent;







