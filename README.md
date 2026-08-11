# My Healing Cycles — waitlist site

A pre-launch marketing site with a working waitlist signup, built to match
the app's own design foundation (colors, typography, tone) so this site and
the eventual app feel like one product. Next.js (App Router) + Tailwind CSS,
deployable on Vercel's free tier, with signups stored in a free Supabase
project.

## What's in here

- `app/page.tsx` — the one-page site: hero, about/features, screenshots,
  waitlist form, footer.
- `app/privacy/page.tsx`, `app/terms/page.tsx` — real, if simple, policy
  pages (required for the eventual app store submissions too, per the PRD).
- `app/api/waitlist/route.ts` — the serverless function the form posts to.
  Validates the email, inserts it into Supabase, and quietly treats a
  duplicate signup as success rather than an error.
- `lib/supabase.ts` — the server-only Supabase client (uses the service role
  key, never exposed to the browser).
- `supabase/schema.sql` — the one table this needs. Run it once in your
  Supabase project.
- `components/` — Hero, About, Screenshots, WaitlistForm, WaitlistSection,
  SiteHeader, SiteFooter.
- Brand tokens live in `app/globals.css`, copied from the design
  foundation's `:root` block. If that document's colors ever change, update
  them here too, by hand, there's no automated link between the two.

## Before you deploy: two things need real values

1. **Supabase project** (free, no credit card) — see below.
2. **Contact email + social links** — I used `myhealingcycles@outlook.com` as
   a placeholder everywhere (footer, privacy, terms). Search the repo for
   that string and swap in your real address. The footer also has a
   commented `TODO` for X/Twitter and LinkedIn links once those accounts
   exist; Instagram is already wired to `@myhealingcycles`, matching the
   handle in your Instagram Content Strategy doc.

## Supabase setup (free tier, ~5 minutes)

1. Create a free account at [supabase.com](https://supabase.com) and a new
   project. No credit card required; free projects auto-pause after a week
   of total inactivity but wake up again on the next request, and you can
   have up to 2 free projects per account.
2. In your new project, go to the **SQL Editor** → New query, paste the
   contents of `supabase/schema.sql`, and run it. This creates the
   `waitlist_signups` table.
3. Go to **Project Settings → API**. Copy the **Project URL** and the
   **service_role** secret key (not the "anon public" key).
4. Locally: copy `.env.example` to `.env.local` and fill in those two
   values, plus `NEXT_PUBLIC_SITE_URL` once you have a domain.
5. On Vercel: add the same two (or three) variables under **Project
   Settings → Environment Variables** before your first deploy.

To see signups later: Supabase dashboard → **Table Editor** →
`waitlist_signups`. You can export that table as CSV any time, e.g. to
import into an email tool once you're ready to actually send a launch
announcement, this site itself doesn't send email.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in the two Supabase values
npm run dev
```

Open http://localhost:3000.

## Deploying — you already have a GitHub repo for this

```bash
# from inside this project folder
git remote add origin <your-existing-repo-url>   # if not already set
git add -A
git commit -m "My Healing Cycles waitlist site"
git push -u origin main
```

Then in Vercel: **Add New → Project**, import that repo, add the
environment variables from the Supabase step above, and deploy. Vercel
detects Next.js automatically, no build config needed.

Once it's live, set `NEXT_PUBLIC_SITE_URL` to your real domain (in Vercel's
env vars) and redeploy, so Open Graph/social share previews link back
correctly.

## Content notes

- Copy throughout (hero, problem statement, features) is drafted from the
  PRD and Business Analysis Discovery Package already in the Health Journey
  project, not invented from scratch. Review it like any first draft.
- Language is kept deliberately on the safe side of medical claims
  ("supports," "tracks," never "heals," "cures," "eliminates"), per the
  PRD's own compliance rule (Section 7.2) and the Business doc's health-claim
  risk register. Worth knowing: the existing Instagram bio ("For women
  eliminating fibroids — not just living with them") uses language that
  rule would flag if applied there too, this site intentionally doesn't
  carry that phrase over. You may want to reconcile the two.
- The three app screenshots are real mockups exported directly from the
  finalized `mhc-design-foundation.html` (Today, Progress, Journal), not
  newly designed for this site, so they'll stay accurate as long as that
  document doesn't change without these being re-exported.

## Known limitation

`npm audit` flags 3 high-severity issues in `postcss`/`sharp`, both
transitive dependencies of this Next.js version's build tooling, not
runtime code this site executes on user input. Low relevance for a static
marketing page with no user-uploaded images, but run `npm audit` again
before launch and update if a clean fix is available by then.
