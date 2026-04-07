import Image from "next/image";
import Link from "next/link";

import { footerNavigation } from "@/config/navigation";
import { landingContent } from "@/content/landing-content";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { InPageLink } from "@/components/ui/in-page-link";

export function Footer() {
  return (
    <footer className="bg-foreground py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/brand/rutio-mark.svg" alt="Rutio" width={40} height={40} className="h-10 w-10 rounded-2xl" />
              <div>
                <p className="font-display text-xl tracking-[0.05em] text-background/80">
                  rut<span className="text-brand">io</span>
                </p>
                <p className="text-xs uppercase tracking-[0.14em] text-background/35">{landingContent.footer.legal}</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-background/45">{landingContent.footer.blurb}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {footerNavigation.map((column) => (
              <div key={column.title}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-background/35">{column.title}</h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((item) => (
                    <li key={item.href}>
                      {item.href.startsWith("/#") ? (
                        <InPageLink href={item.href} className="text-sm text-background/45 transition-colors hover:text-background/80">
                          {item.label}
                        </InPageLink>
                      ) : item.href.startsWith("/") ? (
                        <Link href={item.href} className="text-sm text-background/45 transition-colors hover:text-background/80">
                          {item.label}
                        </Link>
                      ) : (
                        <a href={item.href} className="text-sm text-background/45 transition-colors hover:text-background/80">
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="story-divider my-6 opacity-20" />
        <p className="text-xs uppercase tracking-[0.14em] text-background/25">{new Date().getFullYear()} {siteConfig.name}</p>
      </Container>
    </footer>
  );
}
