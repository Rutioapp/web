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
- At least one visual recommendation (`visual`) for real published posts
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
- Draft state: always `true` until the user explicitly asks to publish.

## Image Generation Workflow for Blog Posts
Use this workflow for every future Rutio blog post task:
1. User provides a raw draft.
2. Codex creates or updates the post in the typed blog content model.
3. Codex generates a complete image recommendation pack (copy-ready prompt included).
4. User generates the image externally.
5. User saves the real image in `public/images/blog/`.
6. Codex integrates the real path into `visual.imageSrc`.

### Visual Need Decision (Always Required)
- Codex must always evaluate whether the post needs a visual.
- Default expectation: real published posts should include one main visual recommendation.
- Exception: text-only is allowed only when intentionally requested or clearly justified by editorial intent.

### Required Visual Recommendation Pack
For every future blog post task, Codex should return:
- Visual concept
- Best placement
- Image generation prompt
- Alt text
- Optional caption
- Suggested filename
- Suggested public path
- Integration note

### Placement Options and Decision Rules
Codex must choose one placement:
- `after-title`
- `after-intro`
- `between-sections`
- `near-conclusion`

Decision rules:
- `after-title`: best for strong editorial hero visuals.
- `after-intro`: best when the introduction sets up the emotional problem first.
- `between-sections`: best for comparison or diagram visuals.
- `near-conclusion`: best for reflective closing visuals.

### Image Prompt Rules (Copy-Ready)
The image prompt should be ready to paste into an image generation tool and include:
- Article topic
- Core emotional idea
- Composition
- Visual style
- Color palette
- What to avoid
- Format/aspect ratio recommendation
- No logos
- No watermarks
- Minimal or no text inside the image
- No fake UI unless explicitly requested
- No generic stock image look

Rutio visual style:
- Calm
- Premium
- Soft
- Editorial
- iOS-first
- Warm but not childish
- Product-aware
- Clean and modern
- Generous negative space
- Soft cream/lavender tones when appropriate

Preferred visual types:
- Rutio app mockups
- Editorial illustrations
- Split-screen comparisons
- Simple conceptual diagrams
- Habit journey visuals
- Calm desk/lifestyle scenes
- Before/after emotional contrast visuals
- Product-inspired interface scenes

Avoid:
- Generic stock photography
- Childish cartoons
- Aggressive productivity visuals
- Fake screenshots that look like real product screens unless approved by the user
- Too much text inside the image
- Logos or brand marks unless provided
- Overpromising visuals
- Medical or therapy implications

### Asset Integration Rules
- Codex should not invent image files.
- Codex should not set `imageSrc` to a file that does not exist.
- Codex should not add fake image paths.
- If the image is not generated yet, provide the suggested path only as an integration plan.
- Suggested file format: `public/images/blog/<slug>.webp`.
- Public `imageSrc` format (only after real file exists): `/images/blog/<slug>.webp`.
- Only after user confirmation that the file exists in `public/images/blog/`, Codex may set `visual.imageSrc`.

### Public Rendering Rules
- Do not show internal editorial notes publicly.
- Do not show "Visual recomendado" on published posts.
- Do not show visible "Texto alternativo:" labels.
- Alt text belongs in the image `alt` attribute.
- Caption may be visible only if it reads like editorial copy.
- Concept-only visuals remain editorial metadata unless explicitly intended for drafts.

### Example Output Format (For Future Tasks)
```md
Visual recommendation:
- Concept: Gentle split-screen showing abandoned habit loops vs. calm Rutio weekly continuity.
- Placement: after-intro
- Image generation prompt: Editorial illustration for a Rutio blog post about why people abandon habits and how gentle consistency wins. Show a split-screen composition: left side chaotic, fragmented habit attempts; right side calm weekly progression with soft progress cues inspired by a premium iOS habit tracker. Style: calm, premium, clean editorial, modern minimalism, generous negative space, subtle depth, soft cream and muted lavender accents. Avoid logos, watermarks, heavy text overlays, fake screenshots, and generic stock-photo look. Format: 16:9 landscape.
- Alt text: Split-screen visual contrasting chaotic abandoned habit attempts with calm, steady weekly habit continuity.
- Caption: Sustainable consistency feels quieter than motivation spikes.
- Suggested filename: abandoning-habits-consistency.webp
- Suggested path: public/images/blog/abandoning-habits-consistency.webp
- Integration note: Set `visual.imageSrc` to `/images/blog/abandoning-habits-consistency.webp` only after the real file is added.
```

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
- Do not add fake Open Graph images or invented hero image paths.

## Accessibility Rules
- Real images must have meaningful alt text.
- Visual concept cards must be readable and informative, not purely decorative.
- Do not rely on image alone to explain the article.

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
  - `date: string` (published date)
  - `updatedAt?: string`
  - `readingTime?: string`
  - `category?: string`
  - `tags?: string[]`
  - `draft?: boolean`
  - `visual?: BlogVisual`
  - `content: BlogSection[]`
- `BlogVisual` fields:
  - `type: "hero" | "inline" | "concept"`
  - `placement: "after-title" | "after-intro" | "between-sections" | "near-conclusion"`
  - `concept: string`
  - `alt: string`
  - `caption?: string`
  - `imageSrc?: string`
- `BlogSection` supports:
  - `type: "paragraphs"` with `paragraphs: string[]` and optional `heading`
  - `type: "list"` with `heading` and `items: string[]`

Important alignment notes:
- If a request says `publishedAt`, map it to `date`.
- Keep `draft: true` by default unless the user explicitly requests publish.
- Keep `imageSrc` optional. Never invent file paths.

## How to Add a New Post
1. Open `src/content/blog/posts.ts`.
2. Append a new `BlogPost` object inside `blogPosts`.
3. Use the required metadata and `content` sections.
4. Include `visual` metadata with concept, placement, alt text, and optional caption.
5. Use `visual.imageSrc` only when a real image asset exists.
6. Keep `draft: true` unless explicitly told to publish.
7. Do not change `src/lib/blog.ts` unless routing/filter behavior is explicitly requested.

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
  visual: {
    type: "concept",
    placement: "after-intro",
    concept: "Describe the planned visual clearly and specifically.",
    alt: "Meaningful alt text describing what the image should communicate.",
    caption: "Optional short caption that adds context."
    // imageSrc: "/images/blog/my-real-image.jpg" // only when real file exists
  },
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
- Always evaluate visual needs and provide one main visual recommendation unless intentionally text-only.
- Choose one placement (`after-title`, `after-intro`, `between-sections`, or `near-conclusion`) using article-fit logic.
- Generate a full image recommendation pack:
  - visual concept
  - placement
  - copy-ready image generation prompt
  - alt text (same language as the post)
  - optional caption
  - suggested filename
  - suggested public path
  - integration note
- Integrate visual metadata into the post (`visual.type`, `visual.placement`, `visual.concept`, `visual.alt`, optional `visual.caption`).
- Do not set `visual.imageSrc` until the real file exists in `public/images/blog/`.
- Do not invent image files or fake image paths.
- Do not add comments, likes, auth, newsletter backend or new dependencies.
- Do not redesign the blog system.
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
- Run `npm run build` if source code changed.
- Run `npm run lint` if available.
- Confirm no env files were modified.

Deliverables:
- List changed files.
- Summarize changes.
- Confirm the post includes visual metadata plus a copy-ready image prompt.
- Confirm no fake image file or image path was added.
- Report validation commands and results.
```

## Validation Expectations for This Task Type
- Documentation-only updates do not require `npm run build` unless source code changed.
- Confirm only docs files were modified when applicable.
- Confirm no env files were modified.
