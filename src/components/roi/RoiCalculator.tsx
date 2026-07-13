"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SliderField from "@/components/ui/SliderField";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GlassCard from "@/components/ui/GlassCard";
import { ROI_DEFAULTS, RECAPTURE_RATE_RANGE, calculateRoi } from "@/data/roi";
import type { RoiInputs } from "@/types";

const currency = (value: number) =>
  `$${Math.round(value).toLocaleString("en-US")}`;
const percent = (value: number) => `${Math.round(value * 100)}%`;

export default function RoiCalculator({ variant = "full" }: { variant?: "teaser" | "full" }) {
  const [inputs, setInputs] = useState<RoiInputs>(ROI_DEFAULTS);
  const result = useMemo(() => calculateRoi(inputs), [inputs]);

  const set = <K extends keyof RoiInputs>(key: K, value: RoiInputs[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <GlassCard className="space-y-6">
        <SliderField
          label="Monthly inbound leads"
          value={inputs.monthlyLeads}
          min={20}
          max={400}
          step={10}
          formatValue={(v) => `${v}/mo`}
          onChange={(v) => set("monthlyLeads", v)}
        />
        <SliderField
          label="Average job value"
          value={inputs.avgJobValue}
          min={100}
          max={5000}
          step={50}
          formatValue={currency}
          onChange={(v) => set("avgJobValue", v)}
        />
        <SliderField
          label="% of leads missed or answered after 30+ min"
          value={inputs.missedShare}
          min={0.05}
          max={0.6}
          step={0.01}
          formatValue={percent}
          onChange={(v) => set("missedShare", v)}
        />

        {variant === "full" && (
          <>
            <SliderField
              label="Close rate on quoted jobs"
              value={inputs.closeRate}
              min={0.1}
              max={0.8}
              step={0.01}
              formatValue={percent}
              onChange={(v) => set("closeRate", v)}
            />
            <SliderField
              label="Weekly hours staff spend on follow-up"
              value={inputs.weeklyHours}
              min={1}
              max={30}
              step={1}
              formatValue={(v) => `${v} hrs/wk`}
              onChange={(v) => set("weeklyHours", v)}
            />
            <SliderField
              label="Loaded hourly cost"
              value={inputs.hourlyCost}
              min={15}
              max={80}
              step={1}
              formatValue={currency}
              onChange={(v) => set("hourlyCost", v)}
            />
            <SliderField
              label="Recapture rate"
              value={inputs.recaptureRate}
              min={RECAPTURE_RATE_RANGE.min}
              max={RECAPTURE_RATE_RANGE.max}
              step={RECAPTURE_RATE_RANGE.step}
              formatValue={percent}
              onChange={(v) => set("recaptureRate", v)}
              helper="Share of missed leads a fast reply recovers — conservative, adjustable."
            />
          </>
        )}
      </GlassCard>

      <GlassCard className="flex flex-col justify-between gap-6">
        <div className="space-y-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-foreground-subtle">
              Recovered revenue
            </p>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
              <AnimatedCounter value={result.addedRevenueMonthly} prefix="$" duration={0.8} />
              <span className="text-base font-normal text-foreground-muted"> / mo</span>
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              <AnimatedCounter value={result.addedRevenueAnnual} prefix="$" duration={0.8} />{" "}
              per year
            </p>
            <p className="mt-2 text-xs text-foreground-subtle">
              Recovered leads = leads × missed share × recapture rate. Added revenue = recovered
              leads × close rate × average job value.
            </p>
          </div>

          {variant === "full" && (
            <div className="border-t border-border pt-5">
              <p className="text-xs font-medium uppercase tracking-wide text-foreground-subtle">
                Labor saved
              </p>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                <AnimatedCounter value={result.laborSavingsMonthly} prefix="$" duration={0.8} />
                <span className="text-base font-normal text-foreground-muted"> / mo</span>
              </p>
              <p className="mt-1 text-sm text-foreground-muted">
                <AnimatedCounter value={result.laborSavingsAnnual} prefix="$" duration={0.8} /> per
                year
              </p>
              <p className="mt-2 text-xs text-foreground-subtle">
                Labor savings = weekly hours × 52/12 × hourly cost × 60% (share of follow-up work
                that&rsquo;s automatable).
              </p>
            </div>
          )}
        </div>

        <div>
          <p className="text-xs text-foreground-subtle">
            Estimates based on your inputs and the stated assumptions — not a guarantee.
          </p>
          {variant === "teaser" && (
            <Link
              href="/roi-calculator"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Open the full calculator
              <ArrowRight className="size-4" />
            </Link>
          )}
        </div>
      </GlassCard>
    </div>
  );
}
