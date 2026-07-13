import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ResourcesHub from "@/components/resources/ResourcesHub";
import GlassCard from "@/components/ui/GlassCard";
import { comparisons } from "@/data/comparisons";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, playbooks, and calculators on automating lead follow-up and content for service businesses.",
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-wide text-accent">Resources</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Practical guides, not generic advice.
        </h1>
        <p className="mt-4 text-balance text-lg leading-relaxed text-foreground-muted">
          Written from what actually works — and doesn&rsquo;t — when automating follow-up for
          service businesses.
        </p>
      </div>

      <div className="mt-14">
        <ResourcesHub />
      </div>

      <div className="mt-20 border-t border-border pt-12">
        <p className="text-sm font-medium tracking-wide text-accent">Comparisons</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          Honest tradeoffs, not a sales pitch.
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {comparisons.map((comparison) => (
            <Link key={comparison.slug} href={`/compare/${comparison.slug}`} className="group block">
              <GlassCard className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-foreground">{comparison.title}</h3>
                  <ArrowUpRight className="size-4 shrink-0 text-foreground-subtle transition-colors group-hover:text-accent" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{comparison.intro}</p>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
