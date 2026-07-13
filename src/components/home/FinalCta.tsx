import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { bookingUrl } from "@/data/nav";

export default function FinalCta() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Find out what you&rsquo;re losing to slow follow-up.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 text-balance text-lg text-foreground-muted">
            A free audit takes 20 minutes and shows you exactly where leads are slipping through.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
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
  );
}
