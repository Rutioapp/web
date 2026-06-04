import type { SupabaseClient } from "@supabase/supabase-js";

import {
  createSupabaseBrowserClient,
  isSupabaseBrowserConfigured
} from "@/lib/supabase/client";

export const WAITLIST_COUNT_UPDATED_EVENT = "rutio:waitlist-updated";

export interface HeroSmartCounterSnapshot {
  value: number;
}

interface WaitlistCountDatabase {
  public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: {
      get_waitlist_signup_count: {
        Args: Record<string, never>;
        Returns: number;
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

type WaitlistCountClient = SupabaseClient<WaitlistCountDatabase>;

/**
 * Isolated adapter for the hero smart counter data source.
 */
export async function fetchHeroSmartCounterSnapshot(): Promise<HeroSmartCounterSnapshot | null> {
  if (!isSupabaseBrowserConfigured()) {
    return null;
  }

  const supabase = createSupabaseBrowserClient() as WaitlistCountClient | null;

  if (!supabase) {
    return null;
  }

  try {
    const { data, error } = await supabase.rpc("get_waitlist_signup_count");

    if (error || typeof data !== "number" || !Number.isFinite(data)) {
      return null;
    }

    return { value: data };
  } catch {
    return null;
  }
}
