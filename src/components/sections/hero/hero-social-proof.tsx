import { landingContent } from "@/content/landing-content";
import { HeroSmartCounter } from "@/components/sections/hero/hero-smart-counter";

export function HeroSocialProof() {
  const { socialProof } = landingContent.hero;

  return (
    <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-start lg:gap-5">
      <div className="flex pt-1">
        {socialProof.avatars.map((avatar, index) => (
          <span
            key={avatar.name}
            title={avatar.name}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-background text-[0.7rem] font-semibold text-white"
            style={{
              marginLeft: index === 0 ? 0 : -8,
              backgroundColor: `rgb(${avatar.color})`
            }}
          >
            {avatar.initials}
          </span>
        ))}
      </div>
      <div className="grid flex-1 gap-3 lg:grid-cols-[minmax(0,19.5rem)_minmax(0,1fr)] lg:items-center">
        <HeroSmartCounter content={socialProof.counter} />
        <p className="text-sm leading-6 text-muted-foreground">{socialProof.detail}</p>
      </div>
    </div>
  );
}
