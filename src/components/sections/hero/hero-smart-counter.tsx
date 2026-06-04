"use client";

import { useEffect, useState } from "react";

import { fetchHeroSmartCounterSnapshot } from "@/lib/counters/hero-smart-counter-service";
import type { HeroSmartCounterContent } from "@/types/landing";

interface SmartCounterState {
  status: "loading" | "ready" | "error";
  snapshot: { value: number } | null;
}

const counterFormatter = new Intl.NumberFormat("es-ES");

interface HeroSmartCounterProps {
  content: HeroSmartCounterContent;
}

export function HeroSmartCounter({ content }: HeroSmartCounterProps) {
  const [state, setState] = useState<SmartCounterState>({
    status: "loading",
    snapshot: null
  });

  useEffect(() => {
    let isMounted = true;

    async function hydrateCounter() {
      try {
        const snapshot = await fetchHeroSmartCounterSnapshot();

        if (!isMounted) {
          return;
        }

        setState({
          status: "ready",
          snapshot: snapshot ? { value: snapshot.value } : null
        });
      } catch {
        if (!isMounted) {
          return;
        }

        setState({
          status: "error",
          snapshot: null
        });
      }
    }

    hydrateCounter();

    return () => {
      isMounted = false;
    };
  }, []);

  const hint = state.status === "error" ? content.errorHint : "";
  const count = state.snapshot ? counterFormatter.format(state.snapshot.value) : null;

  return (
    <article className="rounded-[1.2rem] border border-line/70 bg-white/65 p-4 shadow-soft backdrop-blur">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-strong/85">{content.title}</p>
      <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm leading-6 text-muted-foreground">
        {state.status === "loading" ? (
          <>
            <span aria-hidden="true" className="inline-flex h-8 w-36 animate-pulse rounded-md bg-brand/15" />
            <span className="sr-only" aria-live="polite">
              {content.loadingLabel}
            </span>
          </>
        ) : count ? (
          <>
            <span className="font-display text-[1.6rem] font-light leading-none text-foreground tabular-nums">{count}</span>
            <span className="text-muted-foreground/85">{content.liveLabel}</span>
          </>
        ) : (
          <span className="font-display text-[1.6rem] font-light leading-none text-foreground">{content.fallbackLabel}</span>
        )}
      </div>
      {hint ? <p className="mt-2 text-xs leading-5 text-muted-foreground/95">{hint}</p> : null}
    </article>
  );
}
