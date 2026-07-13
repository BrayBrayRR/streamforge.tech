import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import JsonLd from "@/components/seo/JsonLd";
import { bookingUrl } from "@/data/nav";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import type { ServicePageContent } from "@/types";

export default function ServicePage({ content }: { content: ServicePageContent }) {
  return (
    <div>
      <JsonLd data={faqPageSchema(content.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: `/services/${content.slug}` },
        ])}
      />
      <section className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {content.heroHeadline}
            </h1>
            <p className="mt-4 text-balance text-lg leading-relaxed text-foreground-muted">
              {content.heroSubhead}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={bookingUrl} size="lg">
                Book a free automation audit
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-accent">The problem</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {content.problemHeading}
            </h2>
            <p className="mt-4 text-balance text-base leading-relaxed text-foreground-muted">
              {content.problemBody}
            </p>
          </Reveal>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-1">
            {content.problemPoints.map((point) => (
              <Reveal key={point}>
                <div className="flex items-start gap-2.5 rounded-xl border border-border bg-white/[0.02] px-4 py-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed text-foreground-muted">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="How it works" title="What happens after someone reaches out." align="center" className="mx-auto" />
          <ol className="relative mt-12 space-y-8 border-l border-border pl-8 sm:pl-10">
            {content.howItWorks.map((step, i) => (
              <Reveal key={step.title} as="li" delay={i * 0.05} className="relative">
                <span className="absolute -left-[calc(2rem+1px)] top-0 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-border-strong bg-background text-xs font-semibold text-accent sm:-left-[calc(2.5rem+1px)]">
                  {i + 1}
                </span>
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Who it's for" title="Built for specific situations, not everyone." />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {content.whoItsFor.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <GlassCard className="h-full">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.description}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Why it works" title="The case, not just the pitch." />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {content.proofPoints.map((point, i) => (
              <Reveal key={point.heading} delay={i * 0.08}>
                <GlassCard className="h-full">
                  <p className="text-3xl font-semibold tracking-tight text-accent">{point.heading}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{point.description}</p>
                  {point.source && (
                    <p className="mt-4 text-xs text-foreground-subtle">{point.source}</p>
                  )}
                  {point.illustrative && !point.source && (
                    <p className="mt-4 text-xs text-foreground-subtle">Illustrative example, not a verified client result.</p>
                  )}
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="Questions" title="Answers before you have to ask." align="center" className="mx-auto" />
          <Reveal delay={0.1} className="mt-10">
            <Accordion items={content.faqs} />
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Find out what this looks like for your business.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={bookingUrl} size="lg">
                Book a free automation audit
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
