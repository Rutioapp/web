import { landingContent } from "@/content/landing-content";
import { Container } from "@/components/ui/container";
import { FamilyCard } from "@/components/sections/families/family-card";

export function FamiliesSection() {
  const section = landingContent.sections.families;
  const firstRow = section.items.slice(0, 4);
  const secondRow = section.items.slice(4);

  return (
    <section id="familias" className="relative overflow-hidden bg-foreground py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-background/45">
            <span className="h-px w-6 bg-background/30" />
            <span>{section.eyebrow}</span>
          </p>
          <h2 className="text-balance text-[2.4rem] font-light leading-[1.02] text-background sm:text-[3.15rem] lg:text-[3.4rem]">
            <span className="block">{section.title}</span>
            {section.highlight ? <em className="block font-normal italic text-brand">{section.highlight}</em> : null}
          </h2>
          <p className="mt-5 text-pretty text-base leading-8 text-background/50">{section.description}</p>
        </div>

        <div className="mt-12 space-y-4 sm:space-y-5 lg:space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {firstRow.map((family) => (
              <FamilyCard key={family.slug} family={family} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-auto lg:max-w-[calc(75%-0.75rem)] lg:grid-cols-3">
            {secondRow.map((family) => (
              <FamilyCard key={family.slug} family={family} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
