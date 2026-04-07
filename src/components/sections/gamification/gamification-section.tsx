import Image from "next/image";

import rutioMonedaIcon from "@/assets/icons/rutio-moneda-bicolor.svg";
import { Container } from "@/components/ui/container";
import { AmberCard } from "@/components/sections/gamification/amber-card";
import { StreakCard } from "@/components/sections/gamification/streak-card";
import { landingContent } from "@/content/landing-content";

const gamificationMetrics = [
  {
    shortLabel: "XP",
    title: "Puntos de experiencia",
    description: "Completa hábitos, sube de nivel y desbloquea avances sin fricción."
  },
  {
    shortLabel: "AM",
    title: "Moneda Ámbar",
    description: "Gana Ámbar al cumplir hábitos y rachas, y úsalo para personalizar la app."
  }
] as const;

const gamificationDescription =
  "Rachas, XP y Ámbar convierten tu constancia en progreso visible y recompensas claras.";

export function GamificationSection() {
  const section = landingContent.sections.gamification;

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-16">
          <div className="order-2 space-y-4 lg:order-1">
            <AmberCard />
            <StreakCard />

            <div className="surface-card surface-glow flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:p-6">
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-[1.8rem] bg-foreground shadow-soft">
                <Image src={rutioMonedaIcon} alt="Moneda Ámbar de Rutio" width={76} height={76} className="h-[4.75rem] w-[4.75rem]" />
              </div>

              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-strong">Moneda Ámbar</p>
                <h3 className="mt-3 text-xl leading-7 text-foreground">Una recompensa simple y visible</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  La ganas con tus hábitos diarios y la gastas en personalizar la experiencia.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-strong">
              <span className="h-px w-6 bg-brand/80" />
              <span>{section.eyebrow}</span>
            </p>
            <h2 className="text-balance text-[2.5rem] font-light leading-[1.02] sm:text-[3.25rem] lg:text-[3.55rem]">
              <span className="block">{section.title}</span>
              {section.highlight ? <em className="block font-normal italic text-brand">{section.highlight}</em> : null}
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-muted-foreground">{gamificationDescription}</p>

            <div className="mt-10 space-y-7">
              {gamificationMetrics.map((metric, index) => (
                <article
                  key={metric.title}
                  className={index === gamificationMetrics.length - 1 ? "flex gap-4" : "flex gap-4 border-b border-brand/12 pb-7"}
                >
                  <span className="w-12 flex-shrink-0 font-display text-[1.9rem] font-light leading-none text-[#c9a84c]/55">{metric.shortLabel}</span>
                  <div>
                    <h3 className="text-2xl leading-7 text-foreground">{metric.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">{metric.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
