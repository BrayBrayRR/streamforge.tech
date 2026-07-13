"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { RotateCcw, Gauge, Database, BellRing } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import { ChatBubble, TypingIndicator } from "@/components/visuals/ChatBubble";
import { demoPersonas } from "@/data/demo";
import type { DemoPersona, DemoReveal } from "@/types";
import { cn } from "@/lib/utils";

const TYPING_MS = 900;
const LEAD_PAUSE_MS = 500;
const GAP_MS = 400;

export default function InteractiveDemo() {
  const reduceMotion = useReducedMotion();
  const [persona, setPersona] = useState<DemoPersona | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typingStartRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (typingStartRef.current) clearTimeout(typingStartRef.current);
  };

  const start = (p: DemoPersona) => {
    clearTimers();
    setPersona(p);
    setIsTyping(false);
    if (reduceMotion) {
      setVisibleCount(p.steps.length);
      return;
    }
    setVisibleCount(0);
  };

  useEffect(() => {
    if (!persona || reduceMotion) return;
    if (visibleCount >= persona.steps.length) return;

    const step = persona.steps[visibleCount];
    if (step.sender === "ai") {
      typingStartRef.current = setTimeout(() => setIsTyping(true), 0);
      timeoutRef.current = setTimeout(() => {
        setIsTyping(false);
        setVisibleCount((c) => c + 1);
      }, TYPING_MS);
    } else {
      timeoutRef.current = setTimeout(() => {
        setVisibleCount((c) => c + 1);
      }, LEAD_PAUSE_MS + GAP_MS);
    }

    return clearTimers;
  }, [persona, visibleCount, reduceMotion]);

  const revealed: DemoReveal[] = persona
    ? persona.steps.slice(0, visibleCount).flatMap((s) => s.reveals ?? [])
    : [];
  const totalReveals = persona
    ? persona.steps.flatMap((s) => s.reveals ?? []).length
    : 0;
  const completed = !!persona && visibleCount >= persona.steps.length;
  const liveScore =
    persona && totalReveals > 0
      ? Math.round(persona.leadScore * (revealed.length / totalReveals))
      : 0;

  return (
    <section id="demo" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="See it in action"
          title="Watch a lead go from inquiry to booked job."
          description="Pick a scenario. Everything below runs automatically — no real data, no backend."
          align="center"
          className="mx-auto"
        />

        <Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {demoPersonas.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => start(p)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  persona?.id === p.id
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border-strong text-foreground-muted hover:text-foreground"
                )}
              >
                {p.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_1fr]">
            <GlassCard className="flex min-h-[420px] flex-col">
              {!persona ? (
                <div className="flex flex-1 items-center justify-center text-center">
                  <p className="max-w-xs text-sm text-foreground-muted">
                    Choose a scenario above to watch the conversation play out.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex-1 space-y-3 overflow-y-auto">
                    {persona.steps.slice(0, visibleCount).map((step, i) => (
                      <ChatBubble key={i} sender={step.sender} text={step.text} />
                    ))}
                    {isTyping && <TypingIndicator />}
                  </div>
                  {completed && (
                    <button
                      type="button"
                      onClick={() => start(persona)}
                      className="mt-4 inline-flex w-fit items-center gap-1.5 self-center rounded-full border border-border-strong px-4 py-2 text-xs font-medium text-foreground-muted transition-colors hover:text-foreground"
                    >
                      <RotateCcw className="size-3.5" />
                      Replay
                    </button>
                  )}
                </>
              )}
            </GlassCard>

            <GlassCard className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-foreground-subtle">
                  Captured fields
                </p>
                {revealed.length === 0 ? (
                  <p className="mt-3 text-sm text-foreground-subtle">Nothing captured yet.</p>
                ) : (
                  <dl className="mt-3 space-y-2">
                    {revealed.map((r) => (
                      <div key={r.field} className="flex flex-col gap-0.5">
                        <dt className="text-xs text-foreground-subtle">{r.field}</dt>
                        <dd className="text-sm text-foreground">{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-foreground-subtle">
                    <Gauge className="size-3.5" /> Lead score
                  </span>
                  <span className="text-sm font-semibold text-accent">
                    {persona ? liveScore : "—"}
                    {persona ? "/100" : ""}
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-accent transition-all duration-500"
                    style={{ width: `${persona ? liveScore : 0}%` }}
                  />
                </div>
              </div>

              <div
                className={cn(
                  "flex items-start gap-2.5 rounded-xl border border-border bg-white/[0.02] p-3 text-xs transition-opacity duration-300",
                  completed ? "opacity-100" : "opacity-30"
                )}
              >
                <Database className="mt-0.5 size-4 shrink-0 text-accent" />
                <div>
                  <p className="font-medium text-foreground">CRM entry created</p>
                  <p className="mt-0.5 text-foreground-muted">
                    {completed ? persona?.crmEntry : "Appears once the appointment is booked."}
                  </p>
                </div>
              </div>

              <div
                className={cn(
                  "flex items-start gap-2.5 rounded-xl border border-border bg-white/[0.02] p-3 text-xs transition-opacity duration-300",
                  completed ? "opacity-100" : "opacity-30"
                )}
              >
                <BellRing className="mt-0.5 size-4 shrink-0 text-accent" />
                <div>
                  <p className="font-medium text-foreground">Owner notified</p>
                  <p className="mt-0.5 text-foreground-muted">
                    {completed ? persona?.notification : "Appears once the appointment is booked."}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 text-center text-xs text-foreground-subtle">
            This is a simulation of a real StreamForge deployment. Your version is trained on
            your services, pricing, and availability.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
