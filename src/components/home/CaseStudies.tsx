import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import MiniChart from "@/components/visuals/MiniChart";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What deployments look like"
          title="Illustrative examples of a typical deployment."
          description="These are composite scenarios built to show how the system behaves, not verified client results."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {caseStudies.map((study, i) => (
            <Reveal key={study.businessType} delay={i * 0.1}>
              <GlassCard className="h-full">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-foreground">{study.businessType}</h3>
                  <Badge>Illustrative</Badge>
                </div>

                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-foreground-subtle">
                      The problem
                    </dt>
                    <dd className="mt-1 leading-relaxed text-foreground-muted">{study.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-foreground-subtle">
                      What was deployed
                    </dt>
                    <dd className="mt-1 leading-relaxed text-foreground-muted">{study.deployed}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-foreground-subtle">
                      Outcome
                    </dt>
                    <dd className="mt-1 leading-relaxed text-foreground-muted">{study.outcome}</dd>
                  </div>
                </dl>

                <div className="mt-6 border-t border-border pt-5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-foreground-subtle">{study.metricLabel}</p>
                    <p className="text-xs font-medium text-foreground-subtle">{study.timeframe}</p>
                  </div>
                  <MiniChart
                    data={study.chartData}
                    splitIndex={Math.ceil(study.chartData.length / 2)}
                    label={study.metricLabel}
                    className="mt-3 h-24 w-full"
                  />
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-center text-xs text-foreground-subtle">
            Illustrative examples based on a typical deployment — not an actual client result.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
