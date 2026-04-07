import { landingContent } from "@/content/landing-content";
import { HeroSocialProof } from "@/components/sections/hero/hero-social-proof";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function HeroCopy() {
  const { hero } = landingContent;

  return (
    <div className="relative z-10 max-w-xl">
      <div className="mb-8 inline-flex items-center gap-3 sm:mb-9">
        <span className="h-px w-8 bg-brand/80" />
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-strong">{hero.eyebrow}</span>
      </div>

      <h1 className="text-balance font-display text-[3.2rem] font-light leading-[0.92] text-foreground sm:text-[4.4rem] lg:text-[5.2rem]">
        <span className="block">{hero.titleLead}</span>
        <span className="block">
          {hero.titleAccentPrefix} <em className="font-normal italic text-brand">{hero.titleAccent}</em>
        </span>
        <strong className="block font-semibold not-italic">{hero.titleStrong}</strong>
      </h1>

      <p className="mt-6 max-w-[30rem] text-pretty text-base leading-8 text-muted-foreground sm:text-[1.05rem]">
        {hero.description}
      </p>

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
        <Link href={hero.primaryCta.href} aria-label={hero.primaryCta.ariaLabel} className={buttonVariants({ size: "lg" })}>
          {hero.primaryCta.label}
        </Link>
        <Link
          href={hero.secondaryCta.href}
          aria-label={hero.secondaryCta.ariaLabel}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>{hero.secondaryCta.label}</span>
          <span aria-hidden="true">?</span>
        </Link>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3" id="hero-foundations">
        {hero.highlights.map((item) => (
          <article key={item.title} className="rounded-[1.5rem] border border-line/70 bg-white/60 p-4 shadow-soft backdrop-blur">
            <h2 className="text-base leading-6 text-foreground">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </div>

      <HeroSocialProof />
    </div>
  );
}
