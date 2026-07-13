import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { problemStats, mininarrative } from "@/data/stats";

export default function ProblemSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The cost of slow follow-up"
          title="What slow follow-up actually costs you."
          description="This isn't a guess — it's well-documented in how buyers actually behave."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {problemStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <GlassCard className="h-full">
                <p className="text-4xl font-semibold tracking-tight text-accent sm:text-5xl">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground">{stat.label}</p>
                <p className="mt-4 text-xs text-foreground-subtle">{stat.source}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-border bg-white/[0.02] p-6 sm:p-8">
            <p className="text-center text-xs font-medium uppercase tracking-wide text-foreground-subtle">
              A familiar night
            </p>
            <div className="mt-5 flex flex-col gap-4 text-sm sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="flex-1">
                <p className="font-mono text-accent">{mininarrative.time1}</p>
                <p className="mt-1 text-foreground-muted">{mininarrative.event1}</p>
              </div>
              <div className="flex-1">
                <p className="font-mono text-accent">{mininarrative.time2}</p>
                <p className="mt-1 text-foreground-muted">{mininarrative.event2}</p>
              </div>
              <div className="flex-1">
                <p className="font-mono text-foreground-subtle">{mininarrative.time3}</p>
                <p className="mt-1 text-foreground-muted">{mininarrative.event3}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
