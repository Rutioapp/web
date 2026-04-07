import { type CSSProperties } from "react";

import type { FamilyItem } from "@/types/landing";

interface FamilyCardProps {
  family: FamilyItem;
}

export function FamilyCard({ family }: FamilyCardProps) {
  const cardStyle = {
    backgroundColor: "rgba(247, 242, 233, 0.055)",
    borderColor: `rgb(${family.color} / 0.28)`,
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 40px rgba(0,0,0,0.18)"
  } satisfies CSSProperties;

  const tintStyle = {
    background: `linear-gradient(135deg, rgb(${family.color} / 0.24) 0%, rgb(${family.color} / 0.1) 34%, transparent 74%)`
  } satisfies CSSProperties;

  const glowStyle = {
    background: `radial-gradient(circle at top left, rgb(${family.color} / 0.18), transparent 54%), radial-gradient(circle at bottom right, rgb(${family.color} / 0.1), transparent 44%)`
  } satisfies CSSProperties;

  const accentStyle = {
    background: `linear-gradient(180deg, rgb(${family.color} / 0.32) 0%, rgb(${family.color} / 0.98) 50%, rgb(${family.color} / 0.32) 100%)`,
    boxShadow: `0 0 28px rgb(${family.color} / 0.24)`
  } satisfies CSSProperties;

  const titleStyle = {
    color: "rgba(247, 242, 233, 0.96)"
  } satisfies CSSProperties;

  const descriptionStyle = {
    color: "rgba(247, 242, 233, 0.72)"
  } satisfies CSSProperties;

  return (
    <article
      className="group relative min-h-[11.5rem] overflow-hidden rounded-[1.7rem] border px-5 py-6 text-left backdrop-blur-[2px] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-background/16 hover:bg-background/[0.07] hover:shadow-[0_24px_48px_rgba(0,0,0,0.22)] sm:px-6 sm:py-7"
      style={cardStyle}
    >
      <div className="pointer-events-none absolute inset-0 opacity-95" style={tintStyle} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-90" style={glowStyle} aria-hidden="true" />
      <div className="absolute inset-y-5 left-0 w-[4px] rounded-r-full" style={accentStyle} aria-hidden="true" />

      <div className="relative pl-4">
        <h3 className="text-[1.08rem] font-semibold uppercase tracking-[0.16em] sm:text-[1.12rem]" style={titleStyle}>
          {family.label}
        </h3>
        <p className="mt-3 max-w-[24ch] text-sm leading-6 sm:text-[0.95rem]" style={descriptionStyle}>
          {family.description}
        </p>
      </div>
    </article>
  );
}
