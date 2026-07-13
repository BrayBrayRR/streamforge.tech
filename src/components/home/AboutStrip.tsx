import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function AboutStrip() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-balance text-lg leading-relaxed text-foreground-muted sm:text-xl">
            We&rsquo;re builders who automate real operations, not marketers selling a demo. Every
            workflow we ship runs in production, gets monitored, and gets fixed when it breaks.
            No vaporware, no &ldquo;AI-powered&rdquo; filler — systems that answer the phone every single day.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            More about StreamForge
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
