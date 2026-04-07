import Image from "next/image";

import rutioLifestyleImage from "@/assets/lifestyle/rutio-lifestyle.png";
import { Container } from "@/components/ui/container";
import { TestimonialCard } from "@/components/sections/testimonials/testimonial-card";
import { landingContent } from "@/content/landing-content";

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

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-brand/12 bg-white/55 p-3 shadow-soft sm:p-4">
          <div className="overflow-hidden rounded-[1.6rem]">
            <Image
              src={rutioLifestyleImage}
              alt="Persona usando Rutio en un entorno cálido y cotidiano con luz natural."
              sizes="(min-width: 1280px) 896px, (min-width: 768px) 90vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
