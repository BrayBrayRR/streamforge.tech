import { Check, Play } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import ProductWorkflowDiagram from "@/components/visuals/ProductWorkflowDiagram";
import ProductCard from "@/components/automations/ProductCard";
import JsonLd from "@/components/seo/JsonLd";
import { products } from "@/data/products";
import { productSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import type { Product } from "@/types";

const platformLabel: Record<Product["platform"], string> = {
  n8n: "n8n",
  zapier: "Zapier",
  make: "Make",
};

export default function ProductDetail({ product }: { product: Product }) {
  const related = (product.relatedSlugs ?? [])
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));

  const path = `/automations/${product.slug}`;

  return (
    <div>
      <JsonLd
        data={productSchema({
          name: product.name,
          description: product.overview ?? product.outcome,
          url: `https://streamforge.tech${path}`,
          priceLabel: product.priceLabel,
        })}
      />
      {product.faqs && <JsonLd data={faqPageSchema(product.faqs)} />}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Automations", path: "/automations" },
          { name: product.name, path },
        ])}
      />
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-2">
              {product.badge && (
                <Badge className="border-accent/30 bg-accent-soft text-accent">{product.badge}</Badge>
              )}
              <Badge>{platformLabel[product.platform]}</Badge>
              <span className="text-xs text-foreground-subtle">{product.category}</span>
            </div>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-balance text-lg leading-relaxed text-foreground-muted">
              {product.outcome}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-center gap-3">
              <p className="text-base font-medium text-foreground">{product.priceLabel}</p>
              {product.href && (
                <Button href={product.href} size="lg" external>
                  Get the workflow
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <SectionHeading eyebrow="Overview" title="What this is" />
            <p className="mt-4 text-base leading-relaxed text-foreground-muted">{product.overview}</p>
          </Reveal>
        </div>
      </section>

      {product.whatItDoes && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-6">
            <SectionHeading eyebrow="What it does" title="Step by step" />
            <div className="mt-8 space-y-3">
              {product.whatItDoes.map((item) => (
                <Reveal key={item}>
                  <div className="flex items-start gap-2.5 rounded-xl border border-border bg-white/[0.02] px-4 py-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <p className="text-sm leading-relaxed text-foreground-muted">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="Preview" title="How the workflow is structured" />
          <Reveal delay={0.1} className="mt-8">
            <GlassCard>
              <ProductWorkflowDiagram className="w-full" />
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {product.requirements && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-6">
            <SectionHeading eyebrow="Before you start" title="Requirements" />
            <ul className="mt-6 space-y-2.5">
              {product.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2.5 text-sm text-foreground-muted">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {product.installSteps && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-6">
            <SectionHeading eyebrow="Setup" title="Installation guide" />
            <ol className="relative mt-10 space-y-8 border-l border-border pl-8 sm:pl-10">
              {product.installSteps.map((step, i) => (
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
      )}

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="Walkthrough" title="Video guide" />
          <Reveal delay={0.1} className="mt-8">
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-white/[0.02]">
              <div className="flex size-12 items-center justify-center rounded-full border border-border-strong">
                <Play className="size-5 text-foreground-subtle" />
              </div>
              <p className="text-sm text-foreground-subtle">Video walkthrough coming soon</p>
            </div>
          </Reveal>
        </div>
      </section>

      {product.faqs && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-6">
            <SectionHeading eyebrow="Questions" title="Answers before you have to ask." align="center" className="mx-auto" />
            <Reveal delay={0.1} className="mt-10">
              <Accordion items={product.faqs} />
            </Reveal>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading eyebrow="Related" title="More from the library" />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Reveal key={r.slug}>
                  <ProductCard product={r} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Ready to install {product.name}?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-6 flex flex-col items-center gap-3">
              {product.href ? (
                <Button href={product.href} size="lg" external>
                  Get the workflow
                </Button>
              ) : (
                <Button href="/automations" size="lg" variant="secondary">
                  Browse the library
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
