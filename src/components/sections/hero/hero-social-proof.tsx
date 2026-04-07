import { landingContent } from "@/content/landing-content";

export function HeroSocialProof() {
  const { socialProof } = landingContent.hero;

  return (
    <div className="mt-8 flex items-center gap-4">
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
      <p className="text-sm leading-6 text-muted-foreground">
        <strong className="font-semibold text-foreground">{socialProof.summary}</strong>
        <br />
        {socialProof.detail}
      </p>
    </div>
  );
}
