# Deploying Rutio Web to Vercel (Preview Safe)

## 1. Create the Vercel project
1. Import this repository in Vercel.
2. Framework preset: `Next.js` (auto-detected).
3. Root directory: repository root (`.`).
4. Keep default install/build settings unless explicitly changed.

## 2. Required environment variables
Add these variables in Vercel Project Settings -> Environment Variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Set them at least for `Preview` (and `Production` when ready).

Important:
- Use only the Supabase public anon/publishable key.
- Never use a `service_role` key.

## 3. Commands
The project scripts used for local parity are:

- Build: `npm run build`
- Dev: `npm run dev`

Vercel will run a Next.js build during preview deploys.

## 4. Waitlist verification after preview deploy
1. Open the generated Vercel preview URL.
2. Submit the waitlist form with a test email.
3. Confirm success or duplicate handling is shown.
4. If env vars are missing/invalid, confirm the form shows a calm generic error message instead of raw backend errors.

## 5. Secrets and files not to commit
- Do not commit `.env.local`.
- Do not commit real Supabase values in source files.
- Keep secrets out of PR descriptions and screenshots.
