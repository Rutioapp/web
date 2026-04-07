import Image from "next/image";

import rutioMonedaIcon from "@/assets/icons/rutio-moneda-bicolor.svg";
import { landingContent } from "@/content/landing-content";

export function AmberCard() {
  const amber = landingContent.sections.gamification.amber;

  return (
    <article className="surface-card p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{amber.title}</p>
          <div className="mt-4 flex items-end gap-3">
            <p className="font-display text-[3.4rem] font-light leading-none text-foreground sm:text-[4rem]">{amber.amount}</p>
            <p className="pb-2 text-sm text-muted-foreground">{amber.unit}</p>
          </div>
        </div>

        <div className="rounded-[1.4rem] border border-brand/10 bg-white/80 p-2 shadow-soft">
          <Image src={rutioMonedaIcon} alt="Moneda Ámbar de Rutio" width={76} height={76} className="h-14 w-14" />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/8">
          <div className="h-full rounded-full bg-gradient-to-r from-[#c9a84c] to-[#d4a97a]" style={{ width: `${amber.progress}%` }} />
        </div>
        <p className="text-xs text-muted-foreground">Siguiente: {amber.nextUnlock}</p>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {amber.rewards.map((reward) => (
          <div key={reward.name} className="rounded-2xl border border-brand/15 bg-background/70 px-3 py-5 text-center">
            <p className="text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">{reward.name}</p>
            <p className="mt-2 text-sm font-medium text-brand-strong">{reward.cost}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

