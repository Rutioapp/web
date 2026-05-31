# Supabase Waitlist Rules

## Setup
- Waitlist storage uses Supabase.
- Public frontend env vars:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Security Guardrails
- Never commit `.env.local`.
- Never use `service_role` in frontend code.
- Never hardcode Supabase credentials in components.
- Do not expose raw Supabase errors to users.
- Do not add public `select/update/delete` access.
- Public landing behavior should only insert waitlist entries.

## Waitlist UX Behavior
- Validate and normalize email before submit.
- Prevent double submission.
- Respect honeypot/anti-spam behavior if present.
- Handle duplicate email submissions calmly.
- Return calm, user-friendly failure states.

## Data Expectations
- Primary table: `waitlist_signups`.
- Typical fields may include email/name/message/source/locale/user_agent when implemented.

## Change Control
- Do not alter table behavior, schema assumptions, or security posture unless explicitly requested.
