import { landingContent } from "@/content/landing-content";

export function StepsList() {
  const steps = landingContent.sections.howItWorks.steps;

  return (
    <div className="flex flex-col gap-7">
      {steps.map((step, index) => (
        <article
          key={step.number}
          className={index === steps.length - 1 ? "flex gap-4" : "flex gap-4 border-b border-brand/12 pb-7"}
        >
          <span className="w-12 flex-shrink-0 font-display text-[2rem] font-light leading-none text-brand/35">{step.number}</span>
          <div>
            <h3 className="text-2xl leading-7 text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">{step.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
