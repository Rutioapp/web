import { landingContent } from "@/content/landing-content";
import { Container } from "@/components/ui/container";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { TestimonialCard } from "@/components/sections/testimonials/testimonial-card";

export function TestimonialsSection() {
  const section = landingContent.sections.testimonials;

  return (
    <section className="border-t border-brand/12 bg-[#faf5ee] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-strong">
            <span className="h-px w-6 bg-brand/80" />
            <span>{section.eyebrow}</span>
          </p>
          <h2 className="text-balance text-[2.4rem] font-light leading-[1.02] sm:text-[3.15rem] lg:text-[3.35rem]">
            <span className="block">{section.title}</span>
            {section.highlight ? <em className="block font-normal italic text-brand">{section.highlight}</em> : null}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item) => (
            <TestimonialCard key={item.author} testimonial={item} />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <ImagePlaceholder
            eyebrow={section.lifestylePlaceholder.eyebrow}
            title={section.lifestylePlaceholder.title}
            description={section.lifestylePlaceholder.description}
            height={section.lifestylePlaceholder.height}
            className="bg-brand/5"
          />
        </div>
      </Container>
    </section>
  );
}
