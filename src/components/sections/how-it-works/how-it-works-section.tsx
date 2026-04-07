import { Container } from "@/components/ui/container";
import { HowItWorksTabs } from "@/components/sections/how-it-works/how-it-works-tabs";
import { landingContent } from "@/content/landing-content";

export function HowItWorksSection() {
  const section = landingContent.sections.howItWorks;

  return (
    <section id="como-funciona" className="py-20 sm:py-24 lg:py-28">
      <Container>
        <HowItWorksTabs
          eyebrow={section.eyebrow}
          title={section.title}
          highlight={section.highlight}
          description={section.description}
        />
      </Container>
    </section>
  );
}
