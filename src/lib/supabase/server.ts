import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

export type SupabaseServerClient = SupabaseClient;

function isLikelyServiceRoleKey(key: string) {
  return key.toLowerCase().includes("service_role");
}

export function createSupabaseServerClient(): SupabaseServerClient | null {
  if (!supabaseUrl || !supabaseAnonKey || isLikelyServiceRoleKey(supabaseAnonKey)) {
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
