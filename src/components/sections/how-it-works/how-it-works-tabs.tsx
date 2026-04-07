"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useId, useMemo, useRef, useState } from "react";

import diarioScreenshot from "@/assets/screenshots/diario.jpeg";
import estadisticasScreenshot from "@/assets/screenshots/estadisticas.jpeg";
import mensualScreenshot from "@/assets/screenshots/mensual.jpeg";
import semanalScreenshot from "@/assets/screenshots/semanal.jpeg";
import { cn } from "@/lib/utils";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";

interface HowItWorksTabsProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}

interface HowItWorksStep {
  id: "create" | "track" | "stats" | "streak";
  stepLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  note?: string;
}

const howItWorksSteps: HowItWorksStep[] = [
  {
    id: "create",
    stepLabel: "01",
    eyebrow: "CREAR HABITO",
    title: "Empieza con un habito claro",
    description:
      "Define una accion concreta, visible y facil de repetir para que el primer paso se sienta posible desde el primer dia.",
    image: diarioScreenshot,
    alt: "Pantalla diaria de Rutio usada como placeholder temporal para la creacion de habitos.",
    note: "Pendiente de sustituir por la pantalla exacta de creacion cuando la tengas."
  },
  {
    id: "track",
    stepLabel: "02",
    eyebrow: "REGISTRAR PROGRESO",
    title: "Marca avances sin friccion",
    description:
      "Completa tus habitos del dia y visualiza la semana en una vista clara para detectar ritmo, huecos y progreso real.",
    image: semanalScreenshot,
    alt: "Pantalla semanal de Rutio con una cuadricula de seguimiento de habitos."
  },
  {
    id: "stats",
    stepLabel: "03",
    eyebrow: "VER ESTADISTICAS",
    title: "Entiende lo que si funciona",
    description:
      "Consulta consistencia, rachas y porcentaje completado en una pantalla sobria que convierte tus datos en decisiones.",
    image: estadisticasScreenshot,
    alt: "Pantalla de estadisticas de Rutio con progreso, consistencia y mejor racha."
  },
  {
    id: "streak",
    stepLabel: "04",
    eyebrow: "MANTENER CONSTANCIA",
    title: "Convierte el impulso en rutina",
    description:
      "Mira tu progreso mensual para mantener perspectiva, proteger tu racha y seguir construyendo habitos que duran.",
    image: mensualScreenshot,
    alt: "Pantalla mensual de Rutio con calendario, racha y resumen del habito activo."
  }
];

export function HowItWorksTabs({ eyebrow, title, highlight, description }: HowItWorksTabsProps) {
  const prefersReducedMotion = useReducedMotionPreference();
  const [activeStepId, setActiveStepId] = useState<HowItWorksStep["id"]>(howItWorksSteps[0].id);
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = useMemo(
    () => howItWorksSteps.findIndex((step) => step.id === activeStepId),
    [activeStepId]
  );
  const activeStep = howItWorksSteps[activeIndex] ?? howItWorksSteps[0];

  const focusTab = (index: number) => {
    const target = howItWorksSteps[(index + howItWorksSteps.length) % howItWorksSteps.length];
    if (!target) return;
    setActiveStepId(target.id);
    tabRefs.current[(index + howItWorksSteps.length) % howItWorksSteps.length]?.focus();
  };

  const panelAnimation = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 1 }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 10, scale: 0.985 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -10, scale: 0.99 },
        transition: { duration: 0.26, ease: "easeOut" }
      };

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-16">
      <div>
        <p className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-strong">
          <span className="h-px w-6 bg-brand/80" />
          <span>{eyebrow}</span>
        </p>

        <h2 className="text-balance text-[2.5rem] font-light leading-[1.02] sm:text-[3.25rem] lg:text-[3.55rem]">
          <span className="block">{title}</span>
          {highlight ? <em className="block font-normal italic text-brand">{highlight}</em> : null}
        </h2>

        <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-muted-foreground">{description}</p>

        <div className="mt-10" role="tablist" aria-label="Pasos de como funciona Rutio" aria-orientation="vertical">
          <div className="flex flex-col gap-3">
            {howItWorksSteps.map((step, index) => {
              const isActive = step.id === activeStep.id;
              const tabId = `${tabsId}-tab-${step.id}`;
              const panelId = `${tabsId}-panel-${step.id}`;

              return (
                <button
                  key={step.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  id={tabId}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveStepId(step.id)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                      event.preventDefault();
                      focusTab(index + 1);
                    }

                    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                      event.preventDefault();
                      focusTab(index - 1);
                    }

                    if (event.key === "Home") {
                      event.preventDefault();
                      focusTab(0);
                    }

                    if (event.key === "End") {
                      event.preventDefault();
                      focusTab(howItWorksSteps.length - 1);
                    }
                  }}
                  className={cn(
                    "group w-full rounded-[1.75rem] border px-5 py-5 text-left transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand/40",
                    isActive
                      ? "border-line bg-white/88 shadow-soft"
                      : "border-transparent bg-white/42 hover:border-line/70 hover:bg-white/60"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        "font-display text-[1.85rem] leading-none transition-colors duration-200",
                        isActive ? "text-brand" : "text-brand/35 group-hover:text-brand/55"
                      )}
                    >
                      {step.stepLabel}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-strong/90">{step.eyebrow}</p>
                      <h3 className="mt-2 text-xl leading-6 text-foreground sm:text-[1.55rem]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">{step.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.section
            key={activeStep.id}
            id={`${tabsId}-panel-${activeStep.id}`}
            role="tabpanel"
            aria-labelledby={`${tabsId}-tab-${activeStep.id}`}
            {...panelAnimation}
            className="surface-card surface-glow overflow-hidden bg-white/60 p-4 sm:p-5"
          >
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-strong">{activeStep.eyebrow}</p>
                <h3 className="mt-2 text-2xl leading-7 text-foreground sm:text-[2rem] sm:leading-[1.1]">{activeStep.title}</h3>
              </div>
              <span className="rounded-full border border-brand/15 bg-white/85 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Paso {activeStep.stepLabel}
              </span>
            </div>

            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">{activeStep.description}</p>

            <div className="mt-6 rounded-[2rem] bg-gradient-to-b from-white/55 to-[#f5efe4] p-3 sm:p-4">
              <div className="mx-auto max-w-[18rem] overflow-hidden rounded-[2.1rem] border border-white/80 bg-[#f6efe3] p-1 shadow-soft">
                <Image
                  src={activeStep.image}
                  alt={activeStep.alt}
                  sizes="(min-width: 1024px) 288px, (min-width: 640px) 320px, 100vw"
                  className="h-auto w-full rounded-[1.7rem]"
                  priority={activeStep.id === howItWorksSteps[0].id}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {activeIndex + 1} de {howItWorksSteps.length} pasos
              </p>
              <div className="flex items-center gap-2" aria-hidden="true">
                {howItWorksSteps.map((step) => (
                  <span
                    key={step.id}
                    className={cn(
                      "h-2 rounded-full transition-all duration-200",
                      step.id === activeStep.id ? "w-8 bg-brand/80" : "w-2 bg-brand/20"
                    )}
                  />
                ))}
              </div>
            </div>

            {activeStep.note ? <p className="mt-4 text-sm leading-6 text-muted-foreground">{activeStep.note}</p> : null}
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
}
