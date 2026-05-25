"use client";

import { useEffect, useState } from "react";

import { fetchHeroSmartCounterSnapshot } from "@/lib/counters/hero-smart-counter-service";
import type { HeroSmartCounterContent } from "@/types/landing";

type SmartCounterState =
  | { status: "loading"; value: number; isFallback: true }
  | { status: "loaded"; value: number; isFallback: boolean }
  | { status: "error"; value: number; isFallback: true };

const counterFormatter = new Intl.NumberFormat("es-ES");

interface HeroSmartCounterProps {
  content: HeroSmartCounterContent;
}

export function HeroSmartCounter({ content }: HeroSmartCounterProps) {
  const [state, setState] = useState<SmartCounterState>({
    status: "loading",
    value: content.fallbackValue,
    isFallback: true
  });

  useEffect(() => {
    let isMounted = true;

    async function hydrateCounter() {
      try {
        const snapshot = await fetchHeroSmartCounterSnapshot();

        if (!isMounted) {
          return;
        }

        if (snapshot) {
          setState({
            status: "loaded",
            value: snapshot.value,
            isFallback: snapshot.source !== "backend"
          });
          return;
        }

        setState({
          status: "loaded",
          value: content.fallbackValue,
          isFallback: true
        });
      } catch {
        if (!isMounted) {
          return;
        }

        setState({
          status: "error",
          value: content.fallbackValue,
          isFallback: true
        });
      }
    }

    hydrateCounter();

    return () => {
      isMounted = false;
    };
  }, [content.fallbackValue]);

  const hint = state.status === "error" ? content.errorHint : state.isFallback ? content.fallbackHint : "";
  const counterValue = counterFormatter.format(state.value);

  return (
    <article className="rounded-[1.2rem] border border-line/70 bg-white/65 p-4 shadow-soft backdrop-blur">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-strong/85">{content.title}</p>
      <p className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm leading-6 text-muted-foreground">
        {state.status === "loading" ? (
          <>
            <span aria-hidden="true" className="inline-flex h-8 w-20 animate-pulse rounded-md bg-brand/15" />
            <span className="sr-only" aria-live="polite">
              {content.loadingLabel}
            </span>
          </>
        ) : (
          <span className="font-display text-[2rem] font-light leading-none text-foreground tabular-nums">{counterValue}</span>
        )}
        <span>{content.metricLabel}</span>
        <span className="text-muted-foreground/85">{content.contextLabel}</span>
      </p>
      {hint ? <p className="mt-2 text-xs leading-5 text-muted-foreground/95">{hint}</p> : null}
    </article>
  );
}
