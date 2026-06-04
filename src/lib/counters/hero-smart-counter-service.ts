export type HeroSmartCounterSource = "backend" | "fallback";

export interface HeroSmartCounterSnapshot {
  value: number;
  source: HeroSmartCounterSource;
  updatedAt?: string;
}

/**
 * Isolated adapter for the hero smart counter data source.
 * Phase 3: replace this with the real Supabase waitlist signup count.
 * Return null to keep Phase 2 free of backend counter logic.
 */
export async function fetchHeroSmartCounterSnapshot(): Promise<HeroSmartCounterSnapshot | null> {
  return null;
}
