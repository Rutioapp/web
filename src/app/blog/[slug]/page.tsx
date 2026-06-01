import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { type BlogVisual } from "@/content/blog/posts";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";
import { formatBlogDate, getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function getInlineVisualInsertionIndex(placement: BlogVisual["placement"], totalSections: number) {
  if (totalSections === 0 || placement === "after-title") {
    return null;
  }

  if (placement === "after-intro") {
    return 1;
  }

  if (placement === "between-sections") {
    return Math.max(1, Math.floor(totalSections / 2));
  }

  return Math.max(1, totalSections - 1);
}

function resolveExistingPublicImageSrc(imageSrc?: string) {
  if (!imageSrc) {
    return null;
  }

  const normalizedPath = imageSrc.replace(/^\//, "");
  const absolutePath = join(process.cwd(), "public", normalizedPath);

  if (existsSync(absolutePath)) {
    return imageSrc;
  }

  if (imageSrc.endsWith(".webp")) {
    const pngSrc = imageSrc.replace(/\.webp$/, ".png");
    const pngAbsolutePath = join(process.cwd(), "public", pngSrc.replace(/^\//, ""));

    if (existsSync(pngAbsolutePath)) {
      return pngSrc;
    }
  }

  return null;
}

function BlogVisualFigure({ visual }: { visual: BlogVisual }) {
  const resolvedImageSrc = resolveExistingPublicImageSrc(visual.imageSrc);
  const hasRealImage = Boolean(resolvedImageSrc);

  return (
    <figure className="my-8 overflow-hidden rounded-[1.65rem] border border-border/80 bg-white/70">
      {hasRealImage ? (
        <Image
          src={resolvedImageSrc as string}
          alt={visual.alt}
          width={1440}
          height={900}
          sizes="(min-width: 1024px) 896px, (min-width: 640px) 88vw, 94vw"
          className="h-auto w-full"
        />
      ) : (
        <div className="space-y-4 bg-gradient-to-br from-brand/10 via-white to-brand/5 px-5 py-6 sm:px-7 sm:py-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Visual recomendado</p>
          <p className="text-base leading-7 text-foreground/90">{visual.concept}</p>
          <p className="text-sm leading-6 text-muted-foreground">Este articulo incluye una propuesta visual editorial pendiente de produccion.</p>
        </div>
      )}

      {visual.caption ? (
        <figcaption className="px-5 py-4 text-sm leading-6 text-muted-foreground sm:px-7">{visual.caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  const canonicalPath = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: canonicalPath
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: canonicalPath,
      publishedTime: post.date,
      modifiedTime: post.updatedAt ?? post.date
    },
    twitter: {
      title: post.title,
      description: post.description
    },
    robots: post.draft
      ? {
          index: false,
          follow: false
        }
      : undefined
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const visual = post.visual;
  const inlineVisualInsertionIndex = visual ? getInlineVisualInsertionIndex(visual.placement, post.content.length) : null;
  const visualHasImage = Boolean(visual && resolveExistingPublicImageSrc(visual.imageSrc));
  const canRenderVisual = Boolean(visual && (visualHasImage || post.draft));

  const shouldRenderVisualAfterTitle = canRenderVisual && visual?.placement === "after-title";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    url: absoluteUrl(`/blog/${post.slug}`),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    }
  };

  return (
    <>
      <Navbar />
      <main className="pb-14 pt-6 sm:pb-20 sm:pt-8">
        <Container className="space-y-8">
          <article className="surface-card px-5 py-8 sm:px-7 sm:py-10 lg:px-10 lg:py-12">
            <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Volver al blog
            </Link>

            {post.draft ? (
              <p className="mt-6 inline-flex rounded-full border border-brand/35 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Borrador interno
              </p>
            ) : null}

            <h1 className="mt-4 text-balance text-[2.2rem] leading-[1.02] sm:text-[3rem]">{post.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">{post.description}</p>

            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {formatBlogDate(post.date)}
              {post.updatedAt ? ` · Actualizado ${formatBlogDate(post.updatedAt)}` : ""}
              {post.readingTime ? ` · ${post.readingTime}` : ""}
            </p>

            {shouldRenderVisualAfterTitle && visual ? <BlogVisualFigure visual={visual} /> : null}

            <div className="story-divider my-8" />

            <div className="space-y-8 text-base leading-8 text-foreground/90">
              {post.content.map((section, index) => {
                const sectionNode =
                  section.type === "list" ? (
                    <section className="space-y-4">
                      <h2 className="text-2xl leading-tight">{section.heading}</h2>
                      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                        {section.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  ) : (
                    <section className="space-y-4">
                      {section.heading ? <h2 className="text-2xl leading-tight">{section.heading}</h2> : null}
                      <div className="space-y-4 text-muted-foreground">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  );

                const shouldRenderInlineVisual = canRenderVisual && visual && !shouldRenderVisualAfterTitle && inlineVisualInsertionIndex === index + 1;

                return (
                  <Fragment key={`${post.slug}-section-${index}`}>
                    {sectionNode}
                    {shouldRenderInlineVisual ? <BlogVisualFigure visual={visual} /> : null}
                  </Fragment>
                );
              })}
            </div>

            <div className="story-divider my-8" />

            <section className="space-y-3">
              <h2 className="text-2xl leading-tight">Quieres seguir el progreso de Rutio?</h2>
              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                Si te interesa probar la app en beta privada, puedes dejar tu email y te avisaremos en la siguiente ola de acceso.
              </p>
              <Link href={siteConfig.links.waitlist} className={buttonVariants({ size: "sm" })}>
                Unirme a la beta
              </Link>
            </section>
          </article>
        </Container>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
    </>
  );
}
