import { type CSSProperties } from "react";

import type { FamilyItem } from "@/types/landing";

interface FamilyCardProps {
  family: FamilyItem;
}

export function FamilyCard({ family }: FamilyCardProps) {
  const cardStyle = {
    backgroundColor: `rgba(${family.color}, 0.07)`,
    borderColor: `rgba(${family.color}, 0.2)`
  } satisfies CSSProperties;

  return (
    <article
      className="rounded-[1.4rem] border px-4 py-5 text-center transition-transform duration-200 hover:-translate-y-1"
      style={cardStyle}
    >
      <span className="mb-3 block text-[1.7rem]" aria-hidden="true">
        {family.emoji}
      </span>
      <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-background/80">{family.label}</h3>
      <p className="mt-2 text-xs leading-5 text-background/55">{family.description}</p>
    </article>
  );
}
