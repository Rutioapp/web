import { landingContent } from "@/content/landing-content";
import { Container } from "@/components/ui/container";
import { BetaForm } from "@/components/sections/beta-form/beta-form";

export function BetaSection() {
  const section = landingContent.sections.beta;

  return (
    <section id="beta" className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-start lg:gap-16">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-strong">
              <span className="h-px w-6 bg-brand/80" />
              <span>{section.eyebrow}</span>
            </p>
            <h2 className="text-balance text-[2.5rem] font-light leading-[1.02] sm:text-[3.25rem] lg:text-[3.55rem]">
              <span className="block">{section.title}</span>
              {section.highlight ? <em className="block font-normal italic text-brand">{section.highlight}</em> : null}
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-muted-foreground">{section.description}</p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/8 px-4 py-2 text-sm text-foreground/70">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse motion-reduce:animate-none" />
              <span>{section.spotsLabel}</span>
            </div>

            <div className="mt-10 space-y-4">
              {section.benefits.map((benefit) => (
                <div key={benefit.label} className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/10 text-sm text-brand-strong">
                    ?
                  </span>
                  <p className="text-sm leading-6 text-foreground/75 sm:text-[0.95rem]">{benefit.label}</p>
                </div>
              ))}
            </div>
          </div>

          <BetaForm />
        </div>
      </Container>
    </section>
  );
}
