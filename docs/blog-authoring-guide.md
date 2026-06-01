# Rutio Blog Authoring Guide

## Purpose and Positioning
- The Rutio blog supports pre-beta audience building.
- It should explain habits, consistency, calm productivity, visual progress, product decisions, and building Rutio in public.
- It should feel founder-led and product-specific, not like a generic SaaS blog or SEO content farm.
- It should help readers understand why Rutio exists and how it is being built.

## Tone of Voice
Use this voice:
- Calm
- Honest
- Reflective
- Clear
- Practical
- Emotionally warm without hype
- Personal enough to feel founder-led

Avoid this voice:
- Aggressive productivity language
- Childish gamification language
- Corporate marketing tone
- Exaggerated promises
- Unsupported scientific claims
- Guilt-based habit language

## Required Post Structure
Each post should include:
- Category
- Title
- Short description
- Slug
- Published date
- Optional updated date
- Reading time if manually set and honest
- Optional hero image concept
- Introduction
- Main sections with clear headings
- Optional highlighted insight block when useful
- Soft closing
- Beta/waitlist CTA

## Allowed Categories
Use only these categories for now:
- Habits
- Rutio
- Building in public
- Calm productivity
- Product notes

## Metadata Rules
- Title: clear and specific.
- Description: concise and usable for SEO/social previews.
- Slug: lowercase, readable, and URL-safe (letters, numbers, hyphens).
- Published date: `YYYY-MM-DD`.
- Reading time: honest and not inflated.
- Hero image: optional.
- Draft state: always `true` until the user explicitly asks to publish.

## Image Rules
- No generic stock images.
- Prefer Rutio mockups, product visuals, soft illustrations, comparison visuals, or simple diagrams.
- Maximum: one hero image plus one or two inline visual suggestions.
- If no image exists, provide a clear image concept instead of inventing a file path.
- Do not add fake screenshots.

## Interaction Rules
For now, do not add:
- Comments
- Likes/reactions
- Auth
- Newsletter backend

Do include:
- Soft beta/waitlist CTA
- Related posts only if the existing system supports them or if they can be derived safely from existing content

## SEO Rules
- One main topic per post.
- Clear title.
- Concise description.
- Natural keywords only.
- Avoid keyword stuffing.
- Avoid repeating the same phrase across headings.
- Keep metadata honest and aligned with the actual article.

## Editorial Transformation Rules
When a user provides a raw draft:
- Preserve the core idea and personal intent.
- Improve structure and readability.
- Make headings clearer.
- Reduce repetition.
- Keep founder-led voice if present.
- Avoid making the post sound corporate.
- Do not add unsupported claims.
- Do not invent app features.
- Do not make legal, medical, or psychological claims.
- Keep the post aligned with Rutio's real current state.

## Actual Blog Content Model (This Repository)
Rutio blog posts are typed TypeScript content, not MDX.

Source of truth:
- `src/content/blog/posts.ts`
- `src/lib/blog.ts`

Current model in `src/content/blog/posts.ts`:
- `BlogPost` fields:
  - `title: string`
  - `slug: string`
  - `description: string`
  - `date: string` (this is the published date field)
  - `updatedAt?: string`
  - `readingTime?: string`
  - `category?: string`
  - `tags?: string[]`
  - `draft?: boolean`
  - `content: BlogSection[]`
- `BlogSection` supports:
  - `type: "paragraphs"` with `paragraphs: string[]` and optional `heading`
  - `type: "list"` with `heading` and `items: string[]`

Important alignment note:
- If a request says `publishedAt`, map it to the real field `date`.
- Keep `draft: true` by default unless the user explicitly requests publish.

## How to Add a New Post
1. Open `src/content/blog/posts.ts`.
2. Append a new `BlogPost` object inside `blogPosts`.
3. Use the required metadata and `content` sections.
4. Keep the article typed with `BlogSection[]` (`paragraphs` and/or `list` blocks).
5. Keep `draft: true` unless explicitly told to publish.
6. Do not change `src/lib/blog.ts` unless routing/filter behavior is explicitly requested.

Example structure:

```ts
{
  title: "Clear, specific title",
  slug: "clear-specific-title",
  description: "Concise summary for SEO and social preview.",
  date: "2026-06-01",
  updatedAt: "2026-06-02", // optional
  readingTime: "6 min", // optional and honest
  category: "Building in public",
  tags: ["habits", "rutio", "consistency"], // optional
  draft: true,
  content: [
    {
      type: "paragraphs",
      paragraphs: [
        "Opening paragraph with the core context.",
        "Second paragraph that sets the article direction."
      ]
    },
    {
      type: "paragraphs",
      heading: "Why this matters",
      paragraphs: [
        "Body section paragraph one.",
        "Body section paragraph two."
      ]
    },
    {
      type: "list",
      heading: "Key takeaways",
      items: [
        "Takeaway one.",
        "Takeaway two.",
        "Takeaway three."
      ]
    },
    {
      type: "paragraphs",
      heading: "Join the beta",
      paragraphs: [
        "Soft closing paragraph.",
        "Low-pressure waitlist CTA paragraph."
      ]
    }
  ]
}
```

## Reusable Prompt Template
Copy/paste this template for future Codex tasks:

```md
Use docs/blog-authoring-guide.md.
Use the rutio-modern-web skill.
Follow AGENTS.md.

Convert the following raw draft into a production-ready Rutio blog post.

Requirements:
- Preserve the core idea and personal tone.
- Improve title, description, structure and section headings.
- Generate metadata that matches the existing blog content model.
- Choose the best allowed category.
- Generate a clean slug.
- Keep draft: true unless I explicitly say publish.
- Add a soft beta/waitlist CTA at the end.
- Suggest a hero image concept if no image is provided.
- Do not add comments, likes, auth, newsletter backend or new dependencies.
- Do not change the blog system.
- Do not make unsupported claims.
- Create or update the post in the correct blog content location.

Raw draft:
"""
PASTE_RAW_DRAFT_HERE
"""

Style requirements:
- Markdown.
- Practical and concise.
- Use headings and bullets.
- Avoid long essays.
- Make it useful for future Codex prompts.

Validation:
- Since this is documentation-only, no build is required unless source code was changed.
- Confirm no app/source code was changed.
- Confirm no env files were modified.

Deliverables:
- Create docs/blog-authoring-guide.md.
- Summarize what the guide contains.
- Confirm it matches the existing blog content model.
- Confirm no source code/env files were changed.
```

## Validation Expectations for This Task Type
- Documentation-only updates do not require `npm run build` unless source code changed.
- Confirm only docs files were modified.
- Confirm no env files were modified.
