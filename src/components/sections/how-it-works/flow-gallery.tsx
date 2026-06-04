"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { OptimizedPublicImage } from "@/components/ui/optimized-public-image";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export interface ScreenshotCarouselSlide {
  src: string;
  alt: string;
}

interface FlowGalleryProps {
  screenshots: ScreenshotCarouselSlide[];
  ariaLabel: string;
  className?: string;
  autoplayMs?: number;
}

export function FlowGallery({ screenshots, ariaLabel, className, autoplayMs = 5200 }: FlowGalleryProps) {
  const prefersReducedMotion = useReducedMotionPreference();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (screenshots.length < 2 || prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % screenshots.length);
    }, autoplayMs);

    return () => {
      window.clearInterval(timer);
    };
  }, [autoplayMs, prefersReducedMotion, screenshots.length, activeIndex]);

  useEffect(() => {
    if (activeIndex >= screenshots.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, screenshots.length]);

  if (screenshots.length === 0) {
    return null;
  }

  const activeScreenshot = screenshots[activeIndex] ?? screenshots[0];

  const goToIndex = (nextIndex: number) => {
    if (screenshots.length === 0) {
      return;
    }

    const normalizedIndex = ((nextIndex % screenshots.length) + screenshots.length) % screenshots.length;
    setActiveIndex(normalizedIndex);
  };

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.34, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div
      className={cn("w-full", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goToIndex(activeIndex - 1);
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          goToIndex(activeIndex + 1);
        }
      }}
    >
      <div className="overflow-hidden rounded-[2rem] border border-white/85 bg-[#f6efe3] shadow-soft" style={{ aspectRatio: "1080 / 2424" }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeScreenshot.src}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.01 }}
            transition={transition}
            className="relative h-full w-full"
          >
            <OptimizedPublicImage
              src={activeScreenshot.src}
              alt={activeScreenshot.alt}
              fill
              sizes="(min-width: 1280px) 320px, (min-width: 1024px) 300px, (min-width: 640px) 280px, 260px"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {screenshots.length > 1 ? (
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <button
              type="button"
              onClick={() => goToIndex(activeIndex - 1)}
              aria-label="Ver captura anterior"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/12 bg-white/90 text-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand/40"
            >
              <span aria-hidden="true" className="text-lg leading-none">
                &lt;
              </span>
            </button>

            <button
              type="button"
              onClick={() => goToIndex(activeIndex + 1)}
              aria-label="Ver siguiente captura"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/12 bg-white/90 text-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand/40"
            >
              <span aria-hidden="true" className="text-lg leading-none">
                &gt;
              </span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-brand/12 bg-white/82 px-3 py-2 shadow-soft backdrop-blur sm:justify-end">
            <span className="px-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {activeIndex + 1}/{screenshots.length}
            </span>

            <div className="flex items-center gap-1.5">
              {screenshots.map((screenshot, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={screenshot.src}
                    type="button"
                    onClick={() => goToIndex(index)}
                    aria-label={`Ir a la captura ${index + 1} de ${screenshots.length}`}
                    aria-pressed={isActive}
                    className={cn(
                      "inline-flex h-7 w-7 items-center justify-center rounded-full transition focus-visible:ring-2 focus-visible:ring-brand/40",
                      isActive ? "bg-brand/10" : "bg-transparent hover:bg-brand/5"
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-200",
                        isActive ? "w-4 bg-brand/75" : "w-1.5 bg-brand/25"
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
