"use client";

import { cn } from "@/lib/utils";

export default function SliderField({
  label,
  value,
  min,
  max,
  step = 1,
  formatValue,
  onChange,
  helper,
  className,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  formatValue: (value: number) => string;
  onChange: (value: number) => void;
  helper?: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="text-sm font-semibold text-accent">{formatValue(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-[color:var(--color-accent)]"
      />
      {helper && <p className="mt-1.5 text-xs text-foreground-subtle">{helper}</p>}
    </div>
  );
}
