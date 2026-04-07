"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { landingContent } from "@/content/landing-content";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { buttonVariants } from "@/components/ui/button";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      {open ? (
        <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      ) : (
        <>
          <path d="M4 7H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/80 bg-white/80 text-foreground shadow-soft backdrop-blur"
        onClick={() => setOpen((current) => !current)}
      >
        <MenuIcon open={open} />
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Cerrar menú"
              className="fixed inset-0 z-40 bg-foreground/10 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
            />
            <motion.div
              id="mobile-navigation"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: "easeOut" }}
              className="fixed inset-x-4 top-[4.8rem] z-50 rounded-[2rem] border border-line/80 bg-surface/95 p-5 shadow-float backdrop-blur"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{landingContent.announcement}</p>
                <div className="story-divider" />
                <nav className="flex flex-col gap-1" aria-label="Navegación móvil principal">
                  {landingContent.nav.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-2xl px-3 py-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-white/80 hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Link
                  href={landingContent.nav.cta.href}
                  aria-label={landingContent.nav.cta.ariaLabel}
                  className={buttonVariants({ size: "lg", className: "w-full" })}
                  onClick={() => setOpen(false)}
                >
                  {landingContent.nav.cta.label}
                </Link>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
