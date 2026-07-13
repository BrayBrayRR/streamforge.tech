import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description:
    "AI lead follow-up built around how your trade actually works — HVAC, plumbing, roofing, and more.",
  path: "/industries",
});

export default function IndustriesIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-wide text-accent">Industries</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Built around how your trade actually works.
        </h1>
        <p className="mt-4 text-balance text-lg leading-relaxed text-foreground-muted">
          The qualifying questions, follow-up cadence, and booking flow are set up around your
          services — not a generic script with your industry name swapped in.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, i) => (
          <Reveal key={industry.slug} delay={(i % 6) * 0.05}>
            <Link
              href={`/industries/${industry.slug}`}
              className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-semibold text-foreground">{industry.name}</h2>
                <ArrowUpRight className="size-4 shrink-0 text-foreground-subtle transition-colors group-hover:text-accent" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {industry.painLine}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
