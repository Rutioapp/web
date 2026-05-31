# Supabase Waitlist Rules

## Core Setup
- Waitlist is backed by Supabase.

## Expected Public Env Vars
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Security Guardrails
- Never commit `.env.local`.
- Never use `service_role` in frontend code.
- Never hardcode Supabase credentials in components.
- Do not expose raw Supabase errors to users.
- Do not add public `select/update/delete` access.
- Public website behavior should only insert waitlist entries.

## Form Behavior
- Validate email.
- Normalize email before submit.
- Prevent double submit.
- Use honeypot if present.
- Fail safely with calm, user-friendly messages.
- Handle duplicate emails calmly.

## Table Expectations
- Main table: `waitlist_signups`
- Website may store: `email`, `name`, `message/interest`, `source`, `locale`, `user_agent` (if implemented)

## Change Control
- Do not change table behavior unless explicitly requested.
