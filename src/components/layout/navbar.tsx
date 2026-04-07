import Image from "next/image";
import Link from "next/link";

import { mainNavigation } from "@/config/navigation";
import { landingContent } from "@/content/landing-content";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-brand/10 bg-background/85 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-3 sm:min-h-20">
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`Ir al inicio de ${siteConfig.name}`}>
            <Image
              src="/images/brand/rutio-mark.svg"
              alt="Rutio"
              width={40}
              height={40}
              className="h-10 w-10 rounded-2xl"
              priority
            />
            <div className="min-w-0">
              <p className="truncate font-display text-xl font-semibold tracking-[0.05em] text-foreground">
                rut<span className="text-brand">io</span>
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center md:flex">
            <Link
              href={landingContent.nav.cta.href}
              aria-label={landingContent.nav.cta.ariaLabel}
              className={buttonVariants({ size: "sm", className: "h-10 px-5" })}
            >
              {landingContent.nav.cta.label}
            </Link>
          </div>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
