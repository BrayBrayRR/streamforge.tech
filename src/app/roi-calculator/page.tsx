import type { Metadata } from "next";
import RoiCalculator from "@/components/roi/RoiCalculator";
import Button from "@/components/ui/Button";
import { bookingUrl } from "@/data/nav";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "ROI calculator",
  description:
    "Estimate the revenue and labor savings from faster lead follow-up. Every assumption is shown, not hidden.",
  path: "/roi-calculator",
});

export default function RoiCalculatorPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-wide text-accent">ROI calculator</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          What is slow follow-up costing you?
        </h1>
        <p className="mt-4 text-balance text-lg leading-relaxed text-foreground-muted">
          Adjust every input to match your business. The formulas are shown next to each result —
          nothing is hidden behind the numbers.
        </p>
      </div>

      <div className="mt-14">
        <RoiCalculator variant="full" />
      </div>

      <div className="mt-16 text-center">
        <p className="text-base text-foreground-muted">
          Want a version of this built around your actual numbers?
        </p>
        <Button href={bookingUrl} size="lg" className="mt-5">
          Book a free automation audit
        </Button>
      </div>
    </div>
  );
}
