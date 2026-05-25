import { landingContent } from "@/content/landing-content";
import { HeroSmartCounter } from "@/components/sections/hero/hero-smart-counter";

export function HeroSocialProof() {
  const { socialProof } = landingContent.hero;

  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start">
      <div className="flex">
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
      <div className="flex-1 space-y-3">
        <HeroSmartCounter content={socialProof.counter} />
        <p className="text-sm leading-6 text-muted-foreground">{socialProof.detail}</p>
      </div>
    </div>
  );
}
