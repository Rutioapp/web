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
          <p className="mt-5 text-pretty text-base leading-8 text-muted-foreground">{section.description}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item) => (
            <TestimonialCard key={item.author} testimonial={item} />
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] border border-brand/12 bg-white/55 p-4 shadow-soft sm:p-5">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div className="px-1 sm:px-2 lg:px-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-strong">
                {section.lifestylePlaceholder.eyebrow}
              </p>
              <h3 className="mt-2 text-xl leading-6 text-foreground">{section.lifestylePlaceholder.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{section.lifestylePlaceholder.description}</p>
            </div>
            <div className="overflow-hidden rounded-[1.6rem]">
              <Image
                src={rutioLifestyleImage}
                alt="Persona usando Rutio en un entorno cálido y cotidiano con luz natural."
                sizes="(min-width: 1280px) 640px, (min-width: 768px) 90vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
