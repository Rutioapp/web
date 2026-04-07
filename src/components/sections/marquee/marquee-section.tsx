import { landingContent } from "@/content/landing-content";

export function MarqueeSection() {
  const items = [...landingContent.sections.marquee.items, ...landingContent.sections.marquee.items];

  return (
    <section aria-label="Mensajes destacados de Rutio" className="overflow-hidden border-y border-brand/15 py-5">
      <div className="marquee-rail flex w-max items-center whitespace-nowrap motion-reduce:transform-none">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-3 px-6 font-display text-base italic text-foreground/55 sm:px-8 sm:text-lg">
            <span>{item}</span>
            <span className="h-1 w-1 rounded-full bg-brand/60" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
