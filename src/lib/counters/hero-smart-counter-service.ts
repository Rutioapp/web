export type HeroSmartCounterSource = "backend" | "fallback";

export interface HeroSmartCounterSnapshot {
  value: number;
  source: HeroSmartCounterSource;
  updatedAt?: string;
}

/**
 * Isolated adapter for the hero smart counter data source.
 * Return null to let the UI use its static fallback content.
 */
export async function fetchHeroSmartCounterSnapshot(): Promise<HeroSmartCounterSnapshot | null> {
  // TODO: connect this adapter to the project's future Supabase/API endpoint.
  // Keep this function contract unchanged so the UI component stays untouched.
  return null;
}
