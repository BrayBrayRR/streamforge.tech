import { MapPin, Clock, DollarSign } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import { ChatBubble } from "@/components/visuals/ChatBubble";
import CalendarCard from "@/components/visuals/CalendarCard";
import CrmRow from "@/components/visuals/CrmRow";
import PhoneNotification from "@/components/visuals/PhoneNotification";
import { timelineSteps, timelineCaption } from "@/data/timeline";

function StepVisual({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <ChatBubble sender="lead" text="Hi, do you have anyone available today?" />;
    case 1:
      return (
        <div className="space-y-2">
          <ChatBubble sender="lead" text="Hi, do you have anyone available today?" />
          <ChatBubble sender="ai" text="Yes — I can check right now. What's your zip code?" />
        </div>
      );
    case 2:
      return (
        <div className="flex flex-wrap gap-2">
          <Badge>
            <MapPin className="size-3.5 text-accent" /> Location confirmed
          </Badge>
          <Badge>
            <Clock className="size-3.5 text-accent" /> Same-day urgency
          </Badge>
          <Badge>
            <DollarSign className="size-3.5 text-accent" /> Budget window set
          </Badge>
        </div>
      );
    case 3:
      return <CalendarCard day="Today" time="2:00 – 4:00 PM" label="AC repair — confirmed" />;
    case 4:
      return <CrmRow name="New lead — J. Alvarez" status="Booked" detail="AC repair · Austin 78704" />;
    case 5:
      return (
        <PhoneNotification
          title="Job booked"
          body="AC repair confirmed for 2–4pm today. CRM updated automatically."
        />
      );
    default:
      return null;
  }
}

export default function SolutionTimeline() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From missed call to booked job, without you lifting a finger."
          align="center"
          className="mx-auto"
        />

        <ol className="relative mt-16 space-y-12 border-l border-border pl-8 sm:pl-10">
          {timelineSteps.map((step, i) => (
            <Reveal key={step.title} as="li" delay={0.05} className="relative">
              <span className="absolute -left-[calc(2rem+1px)] top-0 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-border-strong bg-background text-xs font-semibold text-accent sm:-left-[calc(2.5rem+1px)]">
                {i + 1}
              </span>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr] sm:items-start sm:gap-10">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                    {step.description}
                  </p>
                </div>
                <div>
                  <StepVisual index={i} />
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="mt-16 text-center text-sm font-medium text-foreground-muted">
            {timelineCaption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
