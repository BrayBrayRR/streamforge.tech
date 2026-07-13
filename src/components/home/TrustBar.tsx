import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import { integrations } from "@/data/integrations";

export default function TrustBar() {
  return (
    <section className="border-y border-border py-10">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-8 text-center text-sm font-medium text-foreground-subtle">
            Works with the tools you already use
          </p>
        </Reveal>
        <Marquee items={integrations.map((i) => ({ key: i.slug, label: i.name }))} />
      </div>
    </section>
  );
}
