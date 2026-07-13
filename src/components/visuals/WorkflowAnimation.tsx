"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChatBubble, TypingIndicator } from "@/components/visuals/ChatBubble";
import CalendarCard from "@/components/visuals/CalendarCard";
import CrmRow from "@/components/visuals/CrmRow";
import PhoneNotification from "@/components/visuals/PhoneNotification";

const STEP_MS = 1800;
const STEPS = 6;

const LEAD_TEXT = "My AC stopped working, can someone help today?";
const AI_TEXT = "I can get someone out today — you're booked for 2–4pm.";

export default function WorkflowAnimation() {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [cycle, setCycle] = useState(0);
  const pausedRef = useRef(false);
  const stepRef = useRef(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      const next = (stepRef.current + 1) % STEPS;
      stepRef.current = next;
      setStep(next);
      if (next === 0) setCycle((c) => c + 1);
    }, STEP_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <div className="mx-auto w-full max-w-sm space-y-3">
        <ChatBubble sender="lead" text={LEAD_TEXT} />
        <ChatBubble sender="ai" text={AI_TEXT} />
        <div className="flex justify-end">
          <CalendarCard day="Today" time="2:00 – 4:00 PM" label="AC repair — confirmed" />
        </div>
        <CrmRow name="New lead — J. Alvarez" status="Booked" detail="AC repair · Austin 78704" />
        <PhoneNotification
          title="Job booked"
          body="AC repair confirmed for 2–4pm today. CRM updated automatically."
        />
      </div>
    );
  }

  return (
    <div
      className="mx-auto w-full max-w-sm space-y-3"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <motion.div key={`${cycle}-lead`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <ChatBubble sender="lead" text={LEAD_TEXT} />
      </motion.div>

      {step === 1 && (
        <motion.div
          key={`${cycle}-typing`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <TypingIndicator />
        </motion.div>
      )}

      {step >= 2 && (
        <motion.div key={`${cycle}-ai`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <ChatBubble sender="ai" text={AI_TEXT} />
        </motion.div>
      )}

      {step >= 3 && (
        <motion.div
          key={`${cycle}-cal`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end"
        >
          <CalendarCard day="Today" time="2:00 – 4:00 PM" label="AC repair — confirmed" />
        </motion.div>
      )}

      {step >= 4 && (
        <motion.div key={`${cycle}-crm`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <CrmRow name="New lead — J. Alvarez" status="Booked" detail="AC repair · Austin 78704" />
        </motion.div>
      )}

      {step >= 5 && (
        <motion.div key={`${cycle}-notif`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <PhoneNotification
            title="Job booked"
            body="AC repair confirmed for 2–4pm today. CRM updated automatically."
          />
        </motion.div>
      )}
    </div>
  );
}
