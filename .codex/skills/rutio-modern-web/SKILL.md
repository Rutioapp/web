---
name: rutio-modern-web
description: Use this skill when improving the Rutio web landing page, marketing sections, copy, responsive layout, SEO-facing content, waitlist UX, or premium app landing visuals.
---

# Rutio Modern Web Skill

## When To Use
- Improve landing page sections and section flow.
- Polish hero, CTA clarity, copy, visual hierarchy, or responsive layout.
- Add or refine intentional screenshot placeholders.
- Improve beta/waitlist UX and messaging.
- Add or refine blog/newsletter foundation when requested.
- Review visual consistency across landing sections.

## When Not To Use
- Legal copy changes unless explicitly requested.
- Supabase schema or security policy changes unless explicitly requested.
- Unrelated backend work.
- Dependency upgrades or tooling migrations.
- Broad rewrites of the whole app.

## Operating Principles
- Keep changes small, scoped, and reversible.
- Preserve the existing stack and component/design patterns.
- Use TypeScript properly; avoid `any` unless justified.
- Keep Rutio calm, premium, clear, and product-specific.
- Avoid childish gamification language.
- Avoid aggressive productivity language.
- Do not use fake screenshots, fake testimonials, or fake metrics.
- Preserve waitlist functionality and safe failure behavior.
- Avoid touching `/privacy` and `/terms` unless asked.

## Reference Docs
Read only what is relevant to the task:
- `references/rutio-brand.md`: product pillars, tone, visual direction, truth guardrails.
- `references/landing-page-patterns.md`: hero/section/CTA/trust structure.
- `references/copywriting-rules.md`: copy tone, CTA style, SEO-safe wording.
- `references/responsive-qa.md`: breakpoint checklist and layout QA flow.
- `references/supabase-waitlist-rules.md`: waitlist UX/security guardrails.

## Recommended Workflow
1. Inspect affected files and current patterns before editing.
2. Pick the smallest safe change that solves the task.
3. Update centralized content/config where applicable instead of duplicating copy.
4. Preserve existing component conventions and stack choices.
5. Run the lightest relevant validation for the change.
6. Report changed files, validation run, and any follow-ups/risks.
