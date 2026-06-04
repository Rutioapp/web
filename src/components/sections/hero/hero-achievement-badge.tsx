import Image from "next/image";

import { Badge } from "@/components/ui/badge";

interface HeroAchievementBadgeProps {
  iconLabel?: string;
  iconSrc?: string;
}

export function HeroAchievementBadge({ iconLabel = "AB", iconSrc }: HeroAchievementBadgeProps) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/92 px-4 py-3 shadow-soft backdrop-blur">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="inline-flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-brand/20 bg-[#f6efe3]">
          {iconSrc ? (
            <Image
              src={iconSrc}
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 object-contain p-1.5"
              priority={false}
            />
          ) : (
            <span className="text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-brand-strong">{iconLabel}</span>
          )}
        </span>
        <Badge className="px-2.5 py-0.5 text-[0.58rem] tracking-[0.16em]">Logro desbloqueado</Badge>
      </div>
    </div>
  );
}
