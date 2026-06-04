import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { OptimizedPublicImage } from "@/components/ui/optimized-public-image";
import { siteConfig } from "@/config/site";
import { formatBlogDate, getPublishedBlogPosts } from "@/lib/blog";
import { cn } from "@/lib/utils";

const topicCards = [
  {
    title: "Habitos sostenibles",
    description: "Ideas para sostener constancia incluso cuando la semana cambia."
  },
  {
    title: "Progreso visual",
    description: "Lecturas simples para entender patrones, continuidad y recuperacion."
  },
  {
    title: "Construyendo Rutio",
    description: "Decisiones de producto, criterio de diseno y aprendizaje en beta."
  },
  {
    title: "Productividad calmada",
    description: "Menos presion, mas contexto y una motivacion que se puede mantener."
  }
] as const;

export const metadata: Metadata = {
  title: "Blog",
  description: "Reflexiones sobre habitos, constancia y como construimos Rutio.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Blog de Rutio",
    description: "Reflexiones sobre habitos, constancia y como construimos Rutio.",
    url: "/blog"
  },
  twitter: {
    title: "Blog de Rutio",
    description: "Reflexiones sobre habitos, constancia y como construimos Rutio."
  }
};

function HeroVisualImage() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-brand/12 bg-surface-strong" style={{ aspectRatio: "1672 / 941" }}>
      <OptimizedPublicImage
        src="/images/blog/blog-hero-rutio-preview.webp"
        alt="Vista previa de Rutio sobre una escena editorial calida con libreta y lapiz"
        fill
        priority
        sizes="(min-width: 1280px) 460px, (min-width: 1024px) 42vw, (min-width: 640px) 88vw, 92vw"
        className="object-cover object-center"
      />
    </div>
  );
}

export default function BlogPage() {
  const publishedPosts = getPublishedBlogPosts();

  return (
    <>
      <Navbar />
      <main className="pb-14 pt-5 sm:pb-20 sm:pt-7">
        <Container className="space-y-8 sm:space-y-10">
          <section className="overflow-hidden rounded-[1.85rem] border border-brand/12 bg-surface shadow-soft">
            <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.84fr)] lg:items-stretch lg:gap-8 lg:p-8">
              <div className="flex flex-col justify-center">
                <p className="eyebrow w-fit">Blog de Rutio</p>
                <h1 className="mt-4 max-w-[18ch] text-balance text-[2.1rem] leading-[1.02] sm:text-[3rem]">
                  Reflexiones sobre habitos, constancia y como construimos Rutio.
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Un espacio editorial para compartir contexto real: que funciona, que se rompe y lo que estamos aprendiendo en el proceso.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href="#ultimos-articulos" className={buttonVariants({ size: "sm" })}>
                    Explorar articulos
                  </Link>
                  <Link href="/" className={buttonVariants({ size: "sm", variant: "ghost", className: "gap-2" })}>
                    Conoce Rutio <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <HeroVisualImage />
            </div>
          </section>

          <section aria-labelledby="blog-topics-heading" className="space-y-4">
            <h2 id="blog-topics-heading" className="text-2xl leading-tight sm:text-3xl">
              Que vas a encontrar aqui
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {topicCards.map((topic) => (
                <article
                  key={topic.title}
                  className="group rounded-[1.35rem] border border-line/80 bg-white/70 p-4 transition-colors hover:border-brand/25 hover:bg-white"
                >
                  <h3 className="text-lg leading-tight">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{topic.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="ultimos-articulos" aria-labelledby="latest-articles-heading" className="space-y-4">
            <div className="flex items-end justify-between gap-4">
              <h2 id="latest-articles-heading" className="text-2xl leading-tight sm:text-3xl">
                Ultimos articulos
              </h2>
            </div>

            {publishedPosts.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {publishedPosts.map((post) => {
                  const coverImageSrc = post.visual?.imageSrc;

                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="overflow-hidden rounded-[1.35rem] border border-line/80 bg-white/70 p-4 transition-colors hover:border-brand/25 hover:bg-white"
                    >
                      {coverImageSrc ? (
                        <div className="relative h-28 overflow-hidden rounded-[1.1rem] border border-white/70">
                          <OptimizedPublicImage
                            src={coverImageSrc}
                            alt={post.visual?.alt ?? post.title}
                            fill
                            sizes="(min-width: 1280px) 320px, (min-width: 1024px) 28vw, (min-width: 640px) 44vw, 92vw"
                            className="object-cover"
                          />
                        </div>
                      ) : null}

                      <p className={cn("text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-brand-strong", coverImageSrc ? "mt-4" : "")}>
                        {post.category ?? "Rutio"}
                      </p>
                      <h3 className="mt-2 text-xl leading-tight">{post.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{post.description}</p>
                      <p className="mt-4 text-xs text-muted-foreground">
                        {formatBlogDate(post.date)}
                        {post.readingTime ? ` · ${post.readingTime}` : ""}
                      </p>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-[1.35rem] border border-line/80 bg-white/70 px-5 py-6 sm:px-6 sm:py-7">
                <h3 className="text-xl leading-tight sm:text-2xl">Los primeros articulos estan en camino</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Estoy preparando textos sobre habitos sostenibles, progreso visual y el proceso de construir Rutio con calma.
                </p>
              </div>
            )}
          </section>

          <section className="surface-card mx-auto max-w-4xl overflow-hidden p-5 sm:p-6">
            <div className="rounded-[1.3rem] border border-line/70 bg-background/45 p-4 sm:p-5">
              <div className="grid gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                <div>
                  <h2 className="text-2xl leading-tight sm:text-3xl">Unete a la beta privada</h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                    Sigue el desarrollo de Rutio y recibe acceso cuando abramos nuevas plazas.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">Sin spam. Solo avances importantes y acceso anticipado.</p>
                </div>
                <div className="sm:w-fit">
                  <Link href={siteConfig.links.waitlist} className={buttonVariants({ size: "sm", className: "w-full sm:w-auto" })}>
                    Apuntarme a la beta
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
