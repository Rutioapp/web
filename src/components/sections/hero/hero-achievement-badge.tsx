import { Badge } from "@/components/ui/badge";

interface HeroAchievementBadgeProps {
  title: string;
  subtitle: string;
  iconLabel?: string;
}

export function HeroAchievementBadge({ title, subtitle, iconLabel = "AB" }: HeroAchievementBadgeProps) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/92 px-4 py-3 shadow-soft backdrop-blur">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-brand/20 bg-[#f6efe3] text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-brand-strong">
          {iconLabel}
        </span>
        <div className="min-w-0">
          <Badge className="mb-1 px-2.5 py-0.5 text-[0.58rem] tracking-[0.16em]">Logro desbloqueado</Badge>
          <p className="truncate text-[0.72rem] font-semibold uppercase tracking-[0.11em] text-foreground">{title}</p>
          <p className="text-[0.68rem] text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
