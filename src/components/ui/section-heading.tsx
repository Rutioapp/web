import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Badge className="mb-4">{eyebrow}</Badge> : null}
      <h2 className="text-balance text-3xl leading-[1.02] sm:text-4xl md:text-[2.8rem]">{title}</h2>
      {description ? (
        <p className="mt-4 text-pretty text-sm leading-7 text-muted-foreground sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
