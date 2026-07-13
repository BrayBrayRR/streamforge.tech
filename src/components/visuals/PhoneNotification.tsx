import { Bell } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PhoneNotification({
  title,
  body,
  className,
}: {
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={cn("glass flex w-72 items-start gap-3 rounded-2xl p-4", className)}>
      <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent">
        <Bell className="size-4 text-accent-foreground" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-foreground-muted">{body}</p>
      </div>
    </div>
  );
}
