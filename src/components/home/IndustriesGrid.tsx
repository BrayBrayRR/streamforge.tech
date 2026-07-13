import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

export default function IndustriesGrid() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Built for your trade" title="Industries we automate for." />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={(i % 5) * 0.05}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-foreground">{industry.name}</h3>
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
    </section>
  );
}
