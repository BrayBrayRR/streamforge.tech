import { cn } from "@/lib/utils";

export function ChatBubble({
  sender,
  text,
  className,
}: {
  sender: "lead" | "ai";
  text: string;
  className?: string;
}) {
  const isAi = sender === "ai";
  return (
    <div className={cn("flex", isAi ? "justify-start" : "justify-end", className)}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          isAi
            ? "rounded-bl-sm border border-border bg-white/[0.06] text-foreground"
            : "rounded-br-sm bg-accent text-accent-foreground"
        )}
      >
        {text}
      </div>
    </div>
  );
}

export function TypingIndicator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-1 rounded-2xl rounded-bl-sm border border-border bg-white/[0.06] px-4 py-3",
        className
      )}
      aria-label="Typing"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="size-1.5 animate-pulse rounded-full bg-foreground-muted"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}
