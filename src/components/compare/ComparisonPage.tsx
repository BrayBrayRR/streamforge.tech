import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { bookingUrl } from "@/data/nav";
import type { Comparison } from "@/types";

export default function ComparisonPage({ comparison }: { comparison: Comparison }) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="text-sm font-medium tracking-wide text-accent">Comparison</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {comparison.title}
        </h1>
        <p className="mt-4 text-balance text-lg leading-relaxed text-foreground-muted">
          {comparison.intro}
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-white/[0.02]">
              <th className="px-5 py-4 font-medium text-foreground-subtle">Criterion</th>
              <th className="px-5 py-4 font-medium text-accent">{comparison.optionALabel}</th>
              <th className="px-5 py-4 font-medium text-foreground-muted">{comparison.optionBLabel}</th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row.criterion} className="border-b border-border last:border-0">
                <td className="px-5 py-4 font-medium text-foreground">{row.criterion}</td>
                <td className="px-5 py-4 text-foreground-muted">{row.optionA}</td>
                <td className="px-5 py-4 text-foreground-muted">{row.optionB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <Reveal delay={0.16} className="mt-10">
        <GlassCard>
          <p className="text-xs font-medium uppercase tracking-wide text-foreground-subtle">
            The honest verdict
          </p>
          <p className="mt-3 text-base leading-relaxed text-foreground-muted">{comparison.verdict}</p>
        </GlassCard>
      </Reveal>

      <Reveal delay={0.2} className="mt-14 text-center">
        <Button href={bookingUrl} size="lg">
          Book a free automation audit
        </Button>
      </Reveal>
    </div>
  );
}
