import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  eyebrow: string;
  title: string;
  description: string;
  height?: "sm" | "md" | "lg";
  className?: string;
}

const heightMap = {
  sm: "min-h-36",
  md: "min-h-44",
  lg: "min-h-72"
} as const;

export function ImagePlaceholder({
  eyebrow,
  title,
  description,
  height = "md",
  className
}: ImagePlaceholderProps) {
  return (
    <div className={cn("img-placeholder-shell flex flex-col items-center justify-center gap-3", heightMap[height], className)}>
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand/25 bg-white/70 text-lg text-brand-strong">
        ?
      </span>
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-strong">{eyebrow}</p>
      <h3 className="max-w-[18ch] text-balance text-xl leading-6 text-foreground">{title}</h3>
      <p className="max-w-xs text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  );
}
