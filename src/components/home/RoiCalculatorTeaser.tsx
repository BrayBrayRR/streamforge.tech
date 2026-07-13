import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import RoiCalculator from "@/components/roi/RoiCalculator";

export default function RoiCalculatorTeaser() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Run the numbers"
          title="What is slow follow-up costing you every month?"
          description="Move the sliders to match your business. Every assumption is shown, not hidden."
          align="center"
          className="mx-auto"
        />
        <Reveal delay={0.1} className="mt-12">
          <RoiCalculator variant="teaser" />
        </Reveal>
      </div>
    </section>
  );
}
