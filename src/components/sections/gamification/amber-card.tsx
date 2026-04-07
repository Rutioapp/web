import { landingContent } from "@/content/landing-content";

export function AmberCard() {
  const amber = landingContent.sections.gamification.amber;

  return (
    <article className="surface-card p-5 sm:p-6">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{amber.title}</p>
      <div className="mt-4 flex items-end gap-3">
        <p className="font-display text-[3.4rem] font-light leading-none text-foreground sm:text-[4rem]">{amber.amount}</p>
        <p className="pb-2 text-sm text-muted-foreground">{amber.unit}</p>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/8">
          <div className="h-full rounded-full bg-gradient-to-r from-[#c9a84c] to-[#d4a97a]" style={{ width: `${amber.progress}%` }} />
        </div>
        <p className="text-xs text-muted-foreground">? {amber.nextUnlock}</p>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {amber.rewards.map((reward) => (
          <div key={reward.name} className="rounded-2xl border border-brand/15 bg-background/70 px-3 py-4 text-center">
            <span className="mb-2 block text-xl" aria-hidden="true">
              {reward.icon}
            </span>
            <p className="text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">{reward.name}</p>
            <p className="mt-1 text-sm font-medium text-brand-strong">{reward.cost}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
