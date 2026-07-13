import { Check, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import { services } from "@/data/services";
import Link from "next/link";

export default function ServicesGrid() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="What we do" title="Three ways StreamForge takes work off your plate." />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08} className="h-full">
              <Link href={service.href} className="group block h-full">
                <GlassCard className="flex h-full flex-col transition-transform duration-300 hover:-translate-y-1 hover:border-accent/40">
                  <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {service.valueProp}
                  </p>
                  <p className="mt-3 text-xs font-medium text-accent">{service.builtFor}</p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-foreground-muted">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                    Learn more
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
