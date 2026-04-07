import { Container } from "@/components/ui/container";
import { HeroCopy } from "@/components/sections/hero/hero-copy";
import { HeroDevicePreview } from "@/components/sections/hero/hero-device-preview";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-10 pt-6 sm:pb-14 sm:pt-8 lg:pb-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-grid-soft opacity-30" />
      <div className="pointer-events-none absolute right-[-9rem] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#c9a84c]/10 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,28rem)] lg:items-center lg:gap-16">
          <HeroCopy />
          <HeroDevicePreview />
        </div>
      </Container>
    </section>
  );
}
