import { landingContent } from "@/content/landing-content";

export function StreakCard() {
  const streak = landingContent.sections.gamification.streak;

  return (
    <article className="rounded-[1.7rem] bg-foreground px-5 py-5 shadow-float sm:px-6">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-background/40">{streak.label}</p>
          <p className="mt-3 font-display text-[3rem] font-light leading-none text-background">{streak.value}</p>
          <p className="mt-2 text-sm text-background/45">{streak.sublabel}</p>
        </div>
        <div>
          <div className="flex gap-1">
            {streak.dots.map((dot, index) => (
              <span
                key={`${dot}-${index}`}
                className="h-5 w-5 rounded-md"
                style={{ backgroundColor: dot === "255 255 255" ? "rgba(255,255,255,0.12)" : `rgba(${dot}, 0.85)` }}
              />
            ))}
          </div>
          <p className="mt-2 text-right text-[0.62rem] uppercase tracking-[0.14em] text-background/25">{streak.caption}</p>
        </div>
      </div>
    </article>
  );
}
