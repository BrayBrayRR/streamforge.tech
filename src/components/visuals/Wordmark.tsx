import { cn } from "@/lib/utils";

export default function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="26" height="26" rx="7" fill="var(--color-accent)" />
        <path
          d="M14.5 5.5 8 14h4.2l-1.7 6.5L18 12h-4.3l0.8-6.5Z"
          fill="var(--color-accent-foreground)"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        Stream<span className="text-accent">Forge</span>
      </span>
    </span>
  );
}
