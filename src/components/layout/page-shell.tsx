import type { ReactNode } from "react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";

interface PageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <>
      <Navbar />
      <main className="pb-14 pt-6 sm:pb-20 sm:pt-8">
        <Container>
          <section className="surface-card px-5 py-8 sm:px-7 sm:py-10 lg:px-10 lg:py-12">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-5 max-w-[14ch] text-balance text-[2.6rem] leading-[0.96] sm:text-[3.4rem]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
            {children ? <div className="mt-8">{children}</div> : null}
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
