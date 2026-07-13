import { CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CalendarCard({
  day,
  time,
  label,
  className,
}: {
  day: string;
  time: string;
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("glass w-64 rounded-2xl p-4", className)}>
      <div className="flex items-center gap-2 text-xs text-foreground-muted">
        <CalendarCheck className="size-3.5 text-accent" />
        Appointment booked
      </div>
      <p className="mt-2 text-base font-semibold text-foreground">{day}</p>
      <p className="text-sm text-foreground-muted">{time}</p>
      {label && <p className="mt-2 text-xs text-accent">{label}</p>}
    </div>
  );
}
