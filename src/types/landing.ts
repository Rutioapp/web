export interface NavLink {
  label: string;
  href: string;
}

export interface CtaLink extends NavLink {
  ariaLabel?: string;
}

export interface HeroHighlight {
  title: string;
  description: string;
}

export interface HeroSocialProofAvatar {
  name: string;
  initials: string;
  color: string;
}

export interface HeroSocialProof {
  summary: string;
  detail: string;
  avatars: HeroSocialProofAvatar[];
}

export interface HeroHabitPreview {
  name: string;
  family: string;
  duration: string;
  emoji: string;
  color: string;
  completed: boolean;
}

export interface HeroSecondaryHabit {
  label: string;
  color: string;
}

export interface HeroSecondaryPreview {
  title: string;
  habits: HeroSecondaryHabit[];
  streak: string[];
  caption: string;
}

export interface HeroFloatingBadge {
  title: string;
  subtitle: string;
  tone: "light" | "dark";
  icon?: string;
  dotColor?: string;
}

export interface HeroDevicePanel {
  greeting: string;
  dateLabel: string;
  levelLabel: string;
  progress: number;
  progressValue: string;
  sectionLabel: string;
  habits: HeroHabitPreview[];
  amberAmount: string;
  amberLabel: string;
  amberCoin: string;
  secondaryPreview: HeroSecondaryPreview;
  floatingBadges: HeroFloatingBadge[];
}

export interface HeroContent {
  eyebrow: string;
  titleLead: string;
  titleAccentPrefix: string;
  titleAccent: string;
  titleStrong: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  highlights: HeroHighlight[];
  socialProof: HeroSocialProof;
  devicePanel: HeroDevicePanel;
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}

export interface GalleryPlaceholder {
  eyebrow: string;
  title: string;
  description: string;
  height: "sm" | "md" | "lg";
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export interface HowItWorksContent extends SectionIntro {
  steps: HowItWorksStep[];
  gallery: {
    primary: GalleryPlaceholder;
    secondary: GalleryPlaceholder[];
  };
}

export interface FamilyItem {
  slug: string;
  emoji: string;
  label: string;
  description: string;
  color: string;
}

export interface FamiliesContent extends SectionIntro {
  items: FamilyItem[];
}

export interface RewardItem {
  icon: string;
  name: string;
  cost: string;
}

export interface GamificationMetric {
  shortLabel: string;
  title: string;
  description: string;
}

export interface GamificationContent extends SectionIntro {
  amber: {
    title: string;
    amount: string;
    unit: string;
    nextUnlock: string;
    progress: number;
    rewards: RewardItem[];
  };
  streak: {
    label: string;
    value: string;
    sublabel: string;
    dots: string[];
    caption: string;
  };
  metrics: GamificationMetric[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  initials: string;
  color: string;
}

export interface TestimonialsContent extends SectionIntro {
  items: TestimonialItem[];
  lifestylePlaceholder: GalleryPlaceholder;
}

export interface BetaBenefit {
  label: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface BetaFormContent {
  title: string;
  subtitle: string;
  fields: {
    firstName: string;
    lastName: string;
    email: string;
    challenge: string;
    device: string;
    consent: string;
  };
  placeholders: {
    firstName: string;
    lastName: string;
    email: string;
  };
  challengeOptions: SelectOption[];
  deviceOptions: SelectOption[];
  submitLabel: string;
  note: string;
  successTitle: string;
  successDescription: string;
  successAction: string;
}

export interface BetaContent extends SectionIntro {
  spotsLabel: string;
  benefits: BetaBenefit[];
  form: BetaFormContent;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface LandingContent {
  announcement: string;
  nav: {
    links: NavLink[];
    cta: CtaLink;
  };
  hero: HeroContent;
  sections: {
    marquee: {
      items: string[];
    };
    howItWorks: HowItWorksContent;
    families: FamiliesContent;
    gamification: GamificationContent;
    testimonials: TestimonialsContent;
    beta: BetaContent;
    faq: SectionIntro;
  };
  footer: {
    blurb: string;
    columns: FooterColumn[];
    legal: string;
  };
}
