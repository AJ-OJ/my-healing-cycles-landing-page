-- My Healing Cycles — waitlist table
--
-- Run this once in your Supabase project's SQL Editor (Supabase dashboard →
-- SQL Editor → New query → paste → Run). See the README's "Supabase setup"
-- section for the full walkthrough.

create table if not exists waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,               -- where they signed up from, e.g. 'hero' | 'mid_page'
  created_at timestamptz not null default now()
);

-- Row Level Security: locked down by default. The API route writes using the
-- service role key, which bypasses RLS, so no public insert/select policy is
-- needed or created here. Do not add a public policy unless you specifically
-- want the browser to be able to read or write this table directly.
alter table waitlist_signups enable row level security;
