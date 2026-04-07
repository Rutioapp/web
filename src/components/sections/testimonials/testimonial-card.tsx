import type { TestimonialItem } from "@/types/landing";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="rounded-[1.6rem] border border-brand/12 bg-white p-6 shadow-soft">
      <div className="mb-4 flex gap-1 text-[#c9a84c]" aria-label="5 estrellas">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>?</span>
        ))}
      </div>
      <blockquote className="font-display text-[1.18rem] italic leading-8 text-foreground">“{testimonial.quote}”</blockquote>
      <div className="mt-5 flex items-center gap-3">
        <span
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: `rgb(${testimonial.color})` }}
        >
          {testimonial.initials}
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
