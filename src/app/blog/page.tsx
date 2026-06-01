import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { formatBlogDate, getDraftBlogPosts, getPublishedBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notas de producto, habitos y construccion de Rutio con una mirada calmada y enfocada en constancia sostenible.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Blog de Rutio",
    description:
      "Articulos sobre habitos sostenibles, progreso visual y como estamos construyendo Rutio en beta privada.",
    url: "/blog"
  },
  twitter: {
    title: "Blog de Rutio",
    description:
      "Articulos sobre habitos sostenibles, progreso visual y como estamos construyendo Rutio en beta privada."
  }
};

export default function BlogPage() {
  const publishedPosts = getPublishedBlogPosts();
  const draftPosts = getDraftBlogPosts();

  return (
    <>
      <Navbar />
      <main className="pb-14 pt-6 sm:pb-20 sm:pt-8">
        <Container className="space-y-8">
          <section className="surface-card px-5 py-8 sm:px-7 sm:py-10 lg:px-10 lg:py-12">
            <p className="eyebrow">Blog de Rutio</p>
            <h1 className="mt-5 max-w-[16ch] text-balance text-[2.4rem] leading-[0.98] sm:text-[3.2rem]">
              Ideas y notas para construir consistencia sin ruido.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Este espacio reunira aprendizajes de producto, notas de beta y reflexiones sobre habitos sostenibles. Publicaremos cuando cada
              texto este listo, sin prisas ni relleno.
            </p>
            <div className="story-divider my-6" />
            <Link href={siteConfig.links.waitlist} className={buttonVariants({ size: "md", className: "w-full sm:w-auto" })}>
              Unirme a la beta privada
            </Link>
          </section>

          <section className="space-y-4">
            <div>
              <h2 className="text-2xl leading-tight sm:text-3xl">Articulos publicados</h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                Entradas publicadas y listas para lectura.
              </p>
            </div>

            {publishedPosts.length > 0 ? (
              <div className="grid gap-4 sm:gap-5">
                {publishedPosts.map((post) => (
                  <article key={post.slug} className="surface-card px-5 py-6 sm:px-7 sm:py-7">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {formatBlogDate(post.date)}
                      {post.readingTime ? ` · ${post.readingTime}` : ""}
                    </p>
                    <h3 className="mt-3 text-2xl leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-brand">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">{post.description}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="surface-card px-5 py-6 sm:px-7 sm:py-7">
                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                  Aun no hay articulos publicados. Estamos preparando el primer texto para compartir contexto de producto y decisiones de
                  construccion.
                </p>
              </div>
            )}
          </section>

          {draftPosts.length > 0 ? (
            <section className="space-y-4">
              <div>
                <h2 className="text-xl leading-tight sm:text-2xl">Borrador de trabajo</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                  Este contenido sirve para validar estructura editorial. Todavia no representa un articulo final publicado.
                </p>
              </div>

              <div className="grid gap-4 sm:gap-5">
                {draftPosts.map((post) => (
                  <article key={post.slug} className="surface-card border-brand/25 px-5 py-6 sm:px-7 sm:py-7">
                    <p className="text-xs uppercase tracking-[0.18em] text-brand">Borrador interno</p>
                    <h3 className="mt-3 text-xl leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-brand">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{post.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </Container>
      </main>
      <Footer />
    </>
  );
}

