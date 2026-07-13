"use client";

import { useState } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.4,
  decimals = 0,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);
  const [started, setStarted] = useState(false);

  const format = (n: number) =>
    decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-US");

  return (
    <motion.span
      className={className}
      onViewportEnter={() => {
        if (started) return;
        setStarted(true);
        if (reduceMotion) {
          setDisplay(value);
          return;
        }
        animate(0, value, {
          duration,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (latest) => setDisplay(latest),
        });
      }}
      viewport={{ once: true, margin: "-40px" }}
    >
      {prefix}
      {format(display)}
      {suffix}
    </motion.span>
  );
}
