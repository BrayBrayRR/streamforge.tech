import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/data/faqs";

export default function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Questions"
          title="Answers before you have to ask."
          align="center"
          className="mx-auto"
        />
        <Reveal delay={0.1} className="mt-12">
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
