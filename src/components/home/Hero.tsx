import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import WorkflowAnimation from "@/components/visuals/WorkflowAnimation";
import { bookingUrl } from "@/data/nav";

const trustIndicators = [
  "Setup in under 2 weeks",
  "Works with your existing CRM",
  "No long-term contracts",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid opacity-[0.15]" />
      <div
        className="bg-mesh pointer-events-none absolute -top-32 left-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-accent)" }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Stop losing jobs to whoever replies first.
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-foreground-muted">
              StreamForge answers, qualifies, and books your leads within minutes — day or
              night — so the job goes to you instead of the next name on the list.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={bookingUrl} size="lg">
                Book a free automation audit
              </Button>
              <Button href="#demo" size="lg" variant="secondary" external={false}>
                See it work
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              {trustIndicators.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Check className="size-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <WorkflowAnimation />
        </Reveal>
      </div>
    </section>
  );
}
