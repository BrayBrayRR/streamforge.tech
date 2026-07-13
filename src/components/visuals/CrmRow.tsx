import { cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

export default function CrmRow({
  name,
  status,
  detail,
  className,
}: {
  name: string;
  status: string;
  detail: string;
  className?: string;
}) {
  return (
    <div className={cn("glass flex items-center justify-between gap-3 rounded-xl px-4 py-3", className)}>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-foreground">{name}</p>
        <p className="truncate text-xs text-foreground-muted">{detail}</p>
      </div>
      <Badge className="shrink-0 border-accent/30 bg-accent-soft text-accent">{status}</Badge>
    </div>
  );
}
