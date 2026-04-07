import Image, { type StaticImageData } from "next/image";

import diarioScreenshot from "@/assets/screenshots/diario.jpeg";
import estadisticasScreenshot from "@/assets/screenshots/estadisticas.jpeg";
import mensualScreenshot from "@/assets/screenshots/mensual.jpeg";
import semanalScreenshot from "@/assets/screenshots/semanal.jpeg";
import { cn } from "@/lib/utils";

interface ScreenshotCard {
  eyebrow: string;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
}

const featuredScreenshot: ScreenshotCard = {
  eyebrow: "Estadisticas",
  title: "Seguimiento visual que invita a volver",
  description:
    "Rutio muestra progreso, consistencia y rachas en una pantalla clara para entender que esta funcionando sin perder el tono calido del producto.",
  image: estadisticasScreenshot,
  alt: "Pantalla de estadisticas de Rutio con progreso semanal, consistencia y racha actual."
};

const secondaryScreenshots: ScreenshotCard[] = [
  {
    eyebrow: "Diario",
    title: "Tu dia, listo para actuar",
    description: "Una lista directa de habitos para completar sin friccion, con progreso visible y acciones rapidas.",
    image: diarioScreenshot,
    alt: "Pantalla diaria de Rutio con habitos organizados para el dia."
  },
  {
    eyebrow: "Semanal",
    title: "La semana entera, de un vistazo",
    description: "Una cuadricula sencilla para detectar ritmo, huecos y constancia real durante los ultimos dias.",
    image: semanalScreenshot,
    alt: "Pantalla semanal de Rutio con una cuadricula de habitos completados."
  },
  {
    eyebrow: "Mensual",
    title: "Perspectiva mensual sin perder foco",
    description: "Calendario mensual para revisar avance, habitos activos y mejores rachas desde una vista mas amplia.",
    image: mensualScreenshot,
    alt: "Pantalla mensual de Rutio con calendario y resumen de habitos."
  }
];

function ScreenshotFrame({
  eyebrow,
  title,
  description,
  image,
  alt,
  className
}: ScreenshotCard & { className?: string }) {
  return (
    <article className={cn("surface-card surface-glow overflow-hidden bg-white/55 p-4 sm:p-5", className)}>
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-strong">{eyebrow}</p>
          <h3 className="mt-2 text-xl leading-6 text-foreground">{title}</h3>
        </div>
        <span className="hidden rounded-full border border-brand/15 bg-white/80 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:inline-flex">
          App real
        </span>
      </div>

      <div className="mx-auto max-w-[12rem] overflow-hidden rounded-[1.8rem] border border-white/80 bg-[#f6efe3] p-1 shadow-soft">
        <Image src={image} alt={alt} sizes="(min-width: 1024px) 192px, (min-width: 640px) 176px, 240px" className="h-auto w-full rounded-[1.4rem]" />
      </div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
    </article>
  );
}

export function FlowGallery() {
  return (
    <div className="space-y-4">
      <article className="surface-card surface-glow overflow-hidden bg-white/60 p-4 sm:p-5">
        <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_12rem] sm:items-center">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-strong">{featuredScreenshot.eyebrow}</p>
            <h3 className="mt-3 max-w-[16ch] text-2xl leading-7 text-foreground">{featuredScreenshot.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">{featuredScreenshot.description}</p>
          </div>

          <div className="mx-auto w-full max-w-[12rem] overflow-hidden rounded-[1.9rem] border border-white/80 bg-[#f6efe3] p-1 shadow-soft">
            <Image
              src={featuredScreenshot.image}
              alt={featuredScreenshot.alt}
              sizes="(min-width: 1024px) 192px, (min-width: 640px) 176px, 240px"
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
        </div>
      </article>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {secondaryScreenshots.map((item) => (
          <ScreenshotFrame
            key={item.title}
            eyebrow={item.eyebrow}
            title={item.title}
            description={item.description}
            image={item.image}
            alt={item.alt}
          />
        ))}
      </div>
    </div>
  );
}
