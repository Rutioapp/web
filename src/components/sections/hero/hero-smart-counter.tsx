"use client";

import { useEffect, useState } from "react";

import {
  fetchHeroSmartCounterSnapshot,
  WAITLIST_COUNT_UPDATED_EVENT
} from "@/lib/counters/hero-smart-counter-service";
import type { HeroSmartCounterContent } from "@/types/landing";

interface SmartCounterState {
  status: "loading" | "ready" | "error";
  count: number | null;
}

const counterFormatter = new Intl.NumberFormat("es-ES");

interface HeroSmartCounterProps {
  content: HeroSmartCounterContent;
}

export function HeroSmartCounter({ content }: HeroSmartCounterProps) {
  const [state, setState] = useState<SmartCounterState>({
    status: "loading",
    count: null
  });

  useEffect(() => {
    async function hydrateCounter() {
      try {
        const snapshot = await fetchHeroSmartCounterSnapshot();

        setState({
          status: snapshot ? "ready" : "error",
          count: snapshot?.value ?? null
        });
      } catch {
        setState({
          status: "error",
          count: null
        });
      }
    }

    hydrateCounter();

    function handleWaitlistRefresh() {
      hydrateCounter();
    }

    window.addEventListener(WAITLIST_COUNT_UPDATED_EVENT, handleWaitlistRefresh);

    return () => {
      window.removeEventListener(WAITLIST_COUNT_UPDATED_EVENT, handleWaitlistRefresh);
    };
  }, []);

  const count = state.count !== null ? counterFormatter.format(state.count) : null;

  return (
    <article className="rounded-[1.2rem] border border-line/70 bg-white/65 p-4 shadow-soft backdrop-blur">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-strong/85">{content.title}</p>
      <div className="mt-2 flex min-h-8 flex-wrap items-baseline gap-x-2 gap-y-1 text-sm leading-6 text-muted-foreground">
        {state.status === "loading" ? (
          <>
            <span aria-hidden="true" className="inline-flex h-8 w-36 animate-pulse rounded-md bg-brand/15" />
            <span className="sr-only" aria-live="polite">
              {content.loadingLabel}
            </span>
          </>
        ) : state.status === "ready" && state.count === 0 ? (
          <span className="font-display text-[1.45rem] font-light leading-6 text-foreground">{content.zeroLabel}</span>
        ) : state.status === "ready" && state.count !== null ? (
          <>
            <span className="font-display text-[1.6rem] font-light leading-none text-foreground tabular-nums">{count}</span>
            <span className="text-muted-foreground/85">personas apuntadas a la beta</span>
          </>
        ) : (
          <span className="font-display text-[1.45rem] font-light leading-6 text-foreground">{content.fallbackLabel}</span>
        )}
      </div>
    </article>
  );
}
