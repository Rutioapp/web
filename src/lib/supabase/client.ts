import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export interface WaitlistSignupRow {
  id: string;
  created_at: string;
  email: string;
  name: string | null;
  source: string | null;
  message: string | null;
  locale: string | null;
  user_agent: string | null;
}

export type WaitlistSignupInsert = Omit<WaitlistSignupRow, "id" | "created_at">;

export interface SupabaseDatabase {
  public: {
    Tables: {
      waitlist_signups: {
        Row: WaitlistSignupRow;
        Insert: WaitlistSignupInsert;
        Update: Partial<WaitlistSignupInsert>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

let browserClient: SupabaseClient | null = null;

export type SupabaseBrowserClient = SupabaseClient;

function isLikelyServiceRoleKey(key: string) {
  return key.toLowerCase().includes("service_role");
}

export function isSupabaseBrowserConfigured() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return false;
  }

  if (isLikelyServiceRoleKey(supabaseAnonKey)) {
    return false;
  }

  return true;
}

export function createSupabaseBrowserClient(): SupabaseBrowserClient | null {
  if (!isSupabaseBrowserConfigured()) {
    return null;
  }

  if (!browserClient) {
    browserClient = createClient(supabaseUrl!, supabaseAnonKey!, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    });
  }

  return browserClient;
}
