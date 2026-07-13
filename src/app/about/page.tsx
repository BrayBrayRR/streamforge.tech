import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import LinkedInIcon from "@/components/visuals/LinkedInIcon";
import { bookingUrl, socialLinks } from "@/data/nav";

export const metadata: Metadata = {
  title: "About",
  description:
    "StreamForge is built by operators who automate real business operations — not marketers selling a demo.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="text-sm font-medium tracking-wide text-accent">About</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          We build the systems, not just the pitch.
        </h1>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground-muted">
          <p>
            StreamForge started with a simple observation: most small and mid-sized service
            businesses lose jobs not because of price or quality, but because nobody replied fast
            enough. That&rsquo;s a solvable problem — not with more staff, but with a system that
            answers, qualifies, and books the job before the lead calls the next name on the list.
          </p>
          <p>
            We build and run that system directly. Every workflow we ship runs in production every
            day — it gets monitored, and it gets fixed when something breaks. We&rsquo;d rather
            deploy something narrow that actually works than something broad that only works in a
            demo.
          </p>
          <p>
            That same approach carries over to the LinkedIn content work and the automation
            products in the library: practical systems built around how the work actually happens,
            not a generic template with your name swapped in.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mt-12 border-t border-border pt-10">
          <h2 className="text-lg font-semibold text-foreground">Who&rsquo;s behind it</h2>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            {socialLinks.map((person) => (
              <a
                key={person.href}
                href={person.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-border bg-white/[0.02] px-5 py-4 transition-colors hover:border-accent/40"
              >
                <LinkedInIcon className="size-5 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  {person.label.replace("LinkedIn — ", "")}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-14 text-center">
          <Button href={bookingUrl} size="lg">
            Book a free automation audit
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
