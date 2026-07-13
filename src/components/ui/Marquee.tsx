"use client";

import { useReducedMotion } from "framer-motion";

export default function Marquee({
  items,
  durationSeconds = 32,
}: {
  items: { key: string; label: string }[];
  durationSeconds?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {items.map((item) => (
          <span key={item.key} className="text-lg font-medium tracking-tight text-foreground-muted">
            {item.label}
          </span>
        ))}
      </div>
    );
  }

  const track = [...items, ...items];

  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max items-center gap-14 group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee ${durationSeconds}s linear infinite`,
        }}
      >
        {track.map((item, i) => (
          <span
            key={`${item.key}-${i}`}
            aria-hidden={i >= items.length}
            className="shrink-0 text-lg font-medium tracking-tight text-foreground-muted"
          >
            {item.label}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
