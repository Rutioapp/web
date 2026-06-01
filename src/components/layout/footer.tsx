import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { InPageLink } from "@/components/ui/in-page-link";

const productLinks = [
  { label: "Inicio", href: "/" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Blog", href: "/blog" },
  { label: "Beta privada", href: siteConfig.links.waitlist }
] as const;

export function Footer() {
  const socialLinks = siteConfig.links.social.filter((link) => Boolean(link.href));

  return (
    <footer className="bg-foreground py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 lg:gap-10">
          <div className="md:col-span-5 lg:col-span-6">
            <div className="flex items-center gap-3">
              <Image src="/images/brand/rutio-mark.svg" alt={siteConfig.name} width={40} height={40} className="h-10 w-10 rounded-2xl" />
              <div>
                <p className="font-display text-xl tracking-[0.05em] text-background/80">
                  rut<span className="text-brand">io</span>
                </p>
                <p className="text-xs uppercase tracking-[0.14em] text-background/35">Beta privada</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-background/45">{siteConfig.footer.summary}</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-background/45">{siteConfig.footer.betaStatus}</p>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-background/35">Producto</h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith("/#") ? (
                    <InPageLink href={item.href} className="text-sm text-background/45 transition-colors hover:text-background/80">
                      {item.label}
                    </InPageLink>
                  ) : (
                    <Link href={item.href} className="text-sm text-background/45 transition-colors hover:text-background/80">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-background/35">Legal y contacto</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href={siteConfig.links.legal.privacy} className="text-sm text-background/45 transition-colors hover:text-background/80">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={siteConfig.links.legal.terms} className="text-sm text-background/45 transition-colors hover:text-background/80">
                  Terms of Use
                </Link>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-background/45 transition-colors hover:text-background/80">
                  Contacto: {siteConfig.contact.email}
                </a>
              </li>
            </ul>

            {socialLinks.length > 0 ? (
              <>
                <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-background/35">Social</h3>
                <ul className="mt-3 space-y-2.5">
                  {socialLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-background/45 transition-colors hover:text-background/80"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </div>

        <div className="story-divider my-7 opacity-20" />
        <p className="text-xs uppercase tracking-[0.14em] text-background/25">
          Copyright {new Date().getFullYear()} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
