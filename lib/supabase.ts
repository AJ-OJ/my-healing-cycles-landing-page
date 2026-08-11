import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client for the waitlist API route.
 *
 * Uses the service role key (never exposed to the browser — this file is only
 * ever imported from app/api/**, which runs server-side) so it can insert into
 * a table that has Row Level Security enabled with no public write policy.
 *
 * Required env vars (see .env.example):
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 */
export function getSupabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY " +
        "(see .env.example and the README's Supabase setup section)."
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
