"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useMemo, useRef, useState } from "react";

import { FlowGallery } from "@/components/sections/how-it-works/flow-gallery";
import { landingContent } from "@/content/landing-content";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import type { HowItWorksStep as HowItWorksContentStep } from "@/types/landing";

interface HowItWorksTabsProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}

interface HowItWorksStep {
  id: string;
  stepLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  visual: HowItWorksContentStep["visual"];
}

const stepIds = ["create", "track", "stats", "streak"] as const;

const howItWorksSteps: HowItWorksStep[] = landingContent.sections.howItWorks.steps.map((step, index) => ({
  id: stepIds[index] ?? `step-${index + 1}`,
  stepLabel: step.number,
  eyebrow: step.eyebrow,
  title: step.title,
  description: step.description,
  visual: step.visual
}));

function StepVisualCard({ step }: { step: HowItWorksStep }) {
  return (
    <div className="mt-5 rounded-[2rem] bg-gradient-to-b from-white/55 to-[#f5efe4] p-3 sm:p-4">
      <div className="rounded-[1.85rem] border border-brand/12 bg-white/82 p-4 shadow-soft sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-strong">{step.visual.badge}</p>
          <span className="rounded-full border border-brand/15 bg-white/85 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Paso {step.stepLabel}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.visual.description}</p>

        <FlowGallery
          screenshots={step.visual.screenshots ?? []}
          ariaLabel={`${step.title} - capturas de pantalla`}
          className="mt-4 mx-auto max-w-[16.5rem] sm:max-w-[17.75rem] lg:max-w-[18.25rem]"
        />

        <p className="mt-4 text-xs leading-5 text-muted-foreground/90">{step.visual.helper}</p>
      </div>
    </div>
  );
}

export function HowItWorksTabs({ eyebrow, title, highlight, description }: HowItWorksTabsProps) {
  const prefersReducedMotion = useReducedMotionPreference();
  const [activeStepId, setActiveStepId] = useState<HowItWorksStep["id"]>(howItWorksSteps[0]?.id ?? "step-1");
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = useMemo(
    () => howItWorksSteps.findIndex((step) => step.id === activeStepId),
    [activeStepId]
  );
  const activeStep = useMemo(() => howItWorksSteps[activeIndex] ?? howItWorksSteps[0], [activeIndex]);

  const focusTab = (index: number) => {
    if (howItWorksSteps.length === 0) return;
    const nextIndex = (index + howItWorksSteps.length) % howItWorksSteps.length;
    const target = howItWorksSteps[nextIndex];
    if (!target) return;
    setActiveStepId(target.id);
    tabRefs.current[nextIndex]?.focus();
  };

  const panelAnimation = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 1 }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 10, scale: 0.985 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -10, scale: 0.99 },
        transition: { duration: 0.26, ease: "easeOut" }
      };

  const inlinePanelAnimation = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1, height: "auto" }, exit: { opacity: 1, height: "auto" }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, height: 0, y: -4 },
        animate: { opacity: 1, height: "auto", y: 0 },
        exit: { opacity: 0, height: 0, y: -4 },
        transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] }
      };

  if (!activeStep) return null;

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start lg:gap-14 xl:gap-16">
      <div>
        <p className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-strong">
          <span className="h-px w-6 bg-brand/80" />
          <span>{eyebrow}</span>
        </p>

        <h2 id="como-funciona-heading" className="text-balance text-[2.5rem] font-light leading-[1.02] sm:text-[3.25rem] lg:text-[3.55rem]">
          <span className="block">{title}</span>
          {highlight ? <em className="block font-normal italic text-brand">{highlight}</em> : null}
        </h2>

        <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-muted-foreground">{description}</p>

        <div className="mt-10 lg:pr-2 xl:pr-4" role="tablist" aria-label="Pasos de como funciona Rutio" aria-orientation="vertical">
          <div className="flex flex-col gap-3">
            {howItWorksSteps.map((step, index) => {
              const isActive = step.id === activeStep.id;
              const tabId = `${tabsId}-tab-${step.id}`;
              const panelId = `${tabsId}-panel-${step.id}`;

              return (
                <div key={step.id} className="flex flex-col gap-3">
                  <button
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

                  <AnimatePresence initial={false}>
                    {isActive ? (
                      <motion.div
                        key={step.id}
                        aria-hidden="true"
                        {...inlinePanelAnimation}
                        className="overflow-hidden lg:hidden"
                      >
                        <div className="surface-card surface-glow overflow-hidden bg-white/60 p-4 sm:p-5">
                          <StepVisualCard step={step} />

                          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                              {index + 1} de {howItWorksSteps.length} pasos
                            </p>
                            <div className="flex items-center gap-2" aria-hidden="true">
                              {howItWorksSteps.map((item) => (
                                <span
                                  key={item.id}
                                  className={cn(
                                    "h-2 rounded-full transition-all duration-200",
                                    item.id === step.id ? "w-8 bg-brand/80" : "w-2 bg-brand/20"
                                  )}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:pt-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.section
            key={activeStep.id}
            id={`${tabsId}-panel-${activeStep.id}`}
            role="tabpanel"
            aria-labelledby={`${tabsId}-tab-${activeStep.id}`}
            {...panelAnimation}
            className="surface-card surface-glow sticky top-24 overflow-hidden bg-white/60 p-4 sm:p-5"
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

            <StepVisualCard step={activeStep} />

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
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
}
