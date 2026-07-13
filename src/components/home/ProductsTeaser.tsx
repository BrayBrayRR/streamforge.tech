import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { flagshipProduct } from "@/data/products";

export default function ProductsTeaser() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Automation products"
          title="Ready-to-run workflows you install once."
          description="No subscription. Download it, follow the setup guide, and it's yours."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <GlassCard className="flex h-full flex-col justify-between border-accent/30 sm:flex-row sm:items-center sm:gap-8">
              <div>
                <div className="flex items-center gap-2">
                  <Badge className="border-accent/30 bg-accent-soft text-accent">
                    {flagshipProduct.badge}
                  </Badge>
                  <span className="text-xs text-foreground-subtle">{flagshipProduct.category}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{flagshipProduct.name}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground-muted">
                  {flagshipProduct.outcome}
                </p>
              </div>
              <div className="mt-6 flex shrink-0 flex-col items-start gap-3 sm:mt-0 sm:items-end">
                <p className="text-sm font-medium text-foreground">{flagshipProduct.price}</p>
                <Button href={flagshipProduct.href} external>
                  <Mail className="size-4" />
                  Get the workflow
                </Button>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass flex h-full flex-col items-center justify-center rounded-2xl p-6 text-center">
              <p className="text-sm font-medium text-foreground">More automations shipping monthly</p>
              <p className="mt-2 text-xs text-foreground-muted">
                The library is growing — this is the first of many.
              </p>
              <Link
                href="/automations"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
              >
                Browse the automation library
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
