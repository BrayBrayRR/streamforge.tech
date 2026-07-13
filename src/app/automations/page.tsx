import type { Metadata } from "next";
import AutomationsGrid from "@/components/automations/AutomationsGrid";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Automation library",
  description:
    "Ready-to-run n8n, Zapier, and Make workflows you install once and keep using — no subscription required.",
  path: "/automations",
});

export default function AutomationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-wide text-accent">Automation library</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Ready-to-run workflows you install once.
        </h1>
        <p className="mt-4 text-balance text-lg leading-relaxed text-foreground-muted">
          No subscription, no per-contact pricing. Download a workflow, follow the setup guide,
          and it&rsquo;s yours to keep.
        </p>
      </div>

      <div className="mt-14">
        <AutomationsGrid />
      </div>
    </div>
  );
}
