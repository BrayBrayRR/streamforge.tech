import type { Metadata } from "next";
import { bookingUrl } from "@/data/nav";

export const metadata: Metadata = {
  title: "Book a demo",
  description: "Book a free automation audit with StreamForge — see exactly where leads are slipping through.",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-wide text-accent">Book a demo</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Let&rsquo;s find out what slow follow-up is costing you.
        </h1>
        <p className="mt-4 text-balance text-lg leading-relaxed text-foreground-muted">
          Pick a time below for a free, 20-minute automation audit — no obligation, no long-term
          contract required.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border">
        <iframe
          src={bookingUrl}
          title="Book a StreamForge demo"
          className="h-[700px] w-full"
          loading="lazy"
        />
      </div>

      <p className="mt-6 text-center text-sm text-foreground-muted">
        Having trouble with the embed?{" "}
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent"
        >
          Open the scheduler in a new tab
        </a>
        .
      </p>
    </div>
  );
}
