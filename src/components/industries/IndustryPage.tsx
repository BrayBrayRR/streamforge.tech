import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import { ChatBubble } from "@/components/visuals/ChatBubble";
import JsonLd from "@/components/seo/JsonLd";
import { bookingUrl } from "@/data/nav";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import type { Industry } from "@/types";

export default function IndustryPage({ industry }: { industry: Industry }) {
  return (
    <div>
      <JsonLd data={faqPageSchema(industry.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ])}
      />
      <section className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-accent">
              For {industry.name.toLowerCase()} businesses
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {industry.heroHeadline}
            </h1>
            <p className="mt-4 text-balance text-lg leading-relaxed text-foreground-muted">
              {industry.heroSubhead}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={bookingUrl} size="lg">
                Book a free automation audit
              </Button>
              <Button href="/roi-calculator" size="lg" variant="secondary">
                Try the ROI calculator
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="The problem"
            title={`What's actually costing ${industry.name.toLowerCase()} businesses jobs.`}
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {industry.painPoints.map((point, i) => (
              <Reveal key={point} delay={i * 0.08}>
                <GlassCard className="h-full">
                  <p className="text-sm leading-relaxed text-foreground-muted">{point}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            eyebrow="How it works"
            title={industry.workflowScenario}
            align="center"
            className="mx-auto"
          />
          <Reveal delay={0.1} className="mt-10">
            <GlassCard className="space-y-3">
              {industry.workflowMessages.map((message, i) => (
                <ChatBubble key={i} sender={message.sender} text={message.text} />
              ))}
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Where it fits" title="Built for how the work actually happens." />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {industry.useCases.map((useCase, i) => (
              <Reveal key={useCase.title} delay={i * 0.08}>
                <GlassCard className="h-full">
                  <div className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <h3 className="text-base font-semibold text-foreground">{useCase.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                    {useCase.description}
                  </p>
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
            <Accordion items={industry.faqs} />
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Find out what slow follow-up is costing your business.
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
