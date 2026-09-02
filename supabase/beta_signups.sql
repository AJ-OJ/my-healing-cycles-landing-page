-- My Healing Cycles — beta APK download signups
--
-- Run this once in your Supabase project's SQL Editor (same project as
-- waitlist_signups — Supabase dashboard -> SQL Editor -> New query -> paste
-- -> Run). Distinct from waitlist_signups: this table is for people who
-- actually installed the beta APK (name + WhatsApp number included, so
-- downloads can be matched to WhatsApp group members and reached there
-- about updates), not just waitlist interest.

create table if not exists beta_signups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  whatsapp_number text not null,
  source text default 'beta_page',
  created_at timestamptz not null default now(),
  notified_at timestamptz  -- set manually/by a future script when told about a new build
);

-- Row Level Security: locked down by default, same pattern as
-- waitlist_signups. The API route writes using the service role key, which
-- bypasses RLS, so no public insert/select policy is needed or created here.
alter table beta_signups enable row level security;
