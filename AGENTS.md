# AGENTS.md

## 1) Project Overview
- Rutio web is a landing site for the Rutio habit tracker.
- Main goal: explain the product clearly and capture beta/waitlist signups.
- Product tone: calm, premium, trustworthy, emotionally motivating.
- Avoid childish gamification and aggressive productivity language.

## 2) Tech Stack
- Next.js (`next`)
- TypeScript
- Tailwind CSS (utility-first styling)
- Supabase (`@supabase/supabase-js`) for waitlist storage
- Package manager: `npm` with `package-lock.json`

## 3) Commands
- `npm run dev` -> start local dev server
- `npm run build` -> production build
- `npm run start` -> run built app
- `npm run lint` -> run lint checks
- `npm run typecheck` -> TypeScript type check (`tsc --noEmit`)

Use only commands that already exist in `package.json`. Do not invent new scripts.

## 4) Git Workflow
- `main` is the stable branch.
- Do not commit directly to `main`.
- Use small, scoped branches and focused PRs.
- Suggested branch prefixes:
  - `feature/*`
  - `fix/*`
  - `qa/*`
  - `security/*`
  - `content/*`
  - `docs/*`

## 5) Coding Rules
- Use TypeScript properly (types first, avoid `any` unless justified).
- Keep components modular, readable, and aligned with existing patterns.
- Prefer extending current architecture over introducing new abstractions.
- Avoid large unrelated refactors.
- Avoid new dependencies unless clearly justified.
- Keep copy/content centralized when content/config patterns already exist.
- Avoid duplicated hardcoded strings across components.
- Do not touch unrelated files.

## 6) Design And Content Rules
- Rutio should feel calm, premium, clean, and product-specific.
- Build mobile-first, while keeping desktop polished.
- Avoid aggressive productivity wording (for example, "crush your goals").
- Avoid childish gamification language.
- Do not use fake screenshots, testimonials, metrics, or unsupported claims.
- Use intentional placeholders when final screenshots are missing.
- Keep copy aligned with real Rutio features.

## 7) Supabase And Security Rules
- Never commit `.env.local`.
- Never hardcode Supabase URL/keys in source components.
- Never use `service_role` keys in frontend code.
- Use existing public env variables already configured in the project.
- Waitlist flows must fail safely with user-friendly error messages.
- Do not expose raw Supabase errors to users.
- Do not add public `select/update/delete` access to waitlist data.
- Do not change Supabase table behavior unless explicitly requested.

## 8) Legal And Privacy Rules
- Legal pages exist at `/privacy` and `/terms`.
- Do not casually edit legal copy unless the task is explicitly legal-text related.
- Keep privacy/terms statements accurate to actual web/app behavior.
- Do not claim there is no backend (waitlist uses Supabase).
- Do not make unsupported compliance claims.

## 9) Validation Expectations
- Run the lightest relevant checks before finishing.
- For code changes, prefer:
  - `npm run build`
  - `npm run lint` (if available)
- For UI changes, also run `npm run dev` and visually verify affected sections.
- For documentation-only tasks, build is not required unless source code changed.

## 10) Task Delivery Format
Future Codex task responses should include:
- Changed files
- Summary of changes
- Validation run
- Risks/follow-ups
- Whether Supabase/env/deploy action is needed

## 11) Current Project Notes
- Waitlist is backed by Supabase.
- Legal pages exist.
- Real screenshots may replace placeholders later.
- Blog/newsletter foundation may be added later.
- A future `rutio-modern-web` skill may be created later (not in this phase).
