import { cn } from "@/lib/utils";

export default function WorkflowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 72"
      fill="none"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <rect width="120" height="72" rx="12" fill="var(--color-surface)" />
      <path
        d="M22 22h18M58 22h18M22 50h18M58 50h18M31 22v14M67 22v-4a4 4 0 0 1 4-4h4M67 50v4a4 4 0 0 1-4 4h-4"
        stroke="var(--color-border-strong)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="14" y="14" width="16" height="16" rx="4" fill="var(--color-accent-soft)" stroke="var(--color-accent)" strokeWidth="1.5" />
      <rect x="50" y="14" width="16" height="16" rx="4" fill="var(--color-background-elevated)" stroke="var(--color-border-strong)" strokeWidth="1.5" />
      <rect x="86" y="14" width="16" height="16" rx="4" fill="var(--color-background-elevated)" stroke="var(--color-border-strong)" strokeWidth="1.5" />
      <rect x="14" y="42" width="16" height="16" rx="4" fill="var(--color-background-elevated)" stroke="var(--color-border-strong)" strokeWidth="1.5" />
      <rect x="50" y="42" width="16" height="16" rx="4" fill="var(--color-background-elevated)" stroke="var(--color-border-strong)" strokeWidth="1.5" />
      <path d="M66 22h20" stroke="var(--color-border-strong)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
