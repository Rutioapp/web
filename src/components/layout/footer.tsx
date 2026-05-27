import Image from "next/image";
import Link from "next/link";

import { footerNavigation } from "@/config/navigation";
import { landingContent } from "@/content/landing-content";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { InPageLink } from "@/components/ui/in-page-link";

export function Footer() {
  return (
    <footer className="bg-foreground py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end lg:gap-10">
          <div className="md:col-span-6 lg:col-span-7">
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

          <div className="grid gap-6 sm:grid-cols-2 md:col-span-6 lg:col-span-5 lg:gap-8">
            {footerNavigation.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-background/35">{column.title}</h3>
                <ul className="mt-4 space-y-2.5">
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

        <div className="story-divider my-7 opacity-20" />
        <p className="text-xs uppercase tracking-[0.14em] text-background/25">{new Date().getFullYear()} {siteConfig.name}</p>
      </Container>
    </footer>
  );
}
