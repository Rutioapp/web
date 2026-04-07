"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import diarioScreenshot from "@/assets/screenshots/diario.jpeg";
import semanalScreenshot from "@/assets/screenshots/semanal.jpeg";
import { landingContent } from "@/content/landing-content";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";

export function HeroDevicePreview() {
  const prefersReducedMotion = useReducedMotionPreference();
  const { devicePanel } = landingContent.hero;
  const primaryTransition = { duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" } as const;

  return (
    <div id="hero-preview" className="relative mx-auto w-full max-w-[23rem] sm:max-w-[26rem] lg:max-w-[29rem]">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={primaryTransition}
        className="relative z-20 mx-auto w-[17rem] rounded-[2.6rem] border border-white/70 bg-white/45 p-3 shadow-float backdrop-blur sm:w-[19rem]"
      >
        <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-foreground/10" />
        <div className="relative overflow-hidden rounded-[2rem] bg-[#faf6ef] shadow-inset">
          <Image
            src={diarioScreenshot}
            alt="Pantalla diaria de Rutio con lista de hábitos para completar."
            priority
            sizes="(min-width: 1024px) 304px, (min-width: 640px) 288px, 272px"
            className="h-auto w-full"
          />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/12 to-transparent" />
        </div>
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, x: 18, y: 18, rotate: 8 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.15, ease: "easeOut" }}
        className="absolute right-0 top-[11%] z-10 w-[10.8rem] rounded-[2rem] border border-white/70 bg-white/35 p-2 shadow-float backdrop-blur sm:w-[12.2rem]"
      >
        <div className="overflow-hidden rounded-[1.5rem] border border-white/80 bg-[#f6efe3]">
          <Image
            src={semanalScreenshot}
            alt="Pantalla semanal de Rutio con seguimiento de hábitos durante la semana."
            sizes="(min-width: 1024px) 195px, 172px"
            className="h-auto w-full"
          />
        </div>
        <p className="mt-3 text-center text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-foreground/70">
          {devicePanel.secondaryPreview.title}
        </p>
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, x: -12, y: 16 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.45, delay: prefersReducedMotion ? 0 : 0.22 }}
        className="absolute left-0 top-[56%] z-30 max-w-[11rem] rounded-2xl border border-white/80 bg-white/92 px-4 py-3 shadow-soft backdrop-blur"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg" aria-hidden="true">
            {devicePanel.floatingBadges[0]?.icon}
          </span>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-foreground">{devicePanel.floatingBadges[0]?.title}</p>
            <p className="text-[0.68rem] text-muted-foreground">{devicePanel.floatingBadges[0]?.subtitle}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.45, delay: prefersReducedMotion ? 0 : 0.3 }}
        className="absolute bottom-[10%] right-4 z-30 rounded-2xl bg-foreground px-4 py-3 shadow-soft"
      >
        <div className="flex items-center gap-3">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: `rgb(${devicePanel.floatingBadges[1]?.dotColor ?? "122 158 126"})` }}
          />
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-background">{devicePanel.floatingBadges[1]?.title}</p>
            <p className="text-[0.64rem] text-background/50">{devicePanel.floatingBadges[1]?.subtitle}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
