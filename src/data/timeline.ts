import type { TimelineStep } from "@/types";

export const timelineSteps: TimelineStep[] = [
  {
    title: "Inquiry arrives",
    description: "A lead fills out a form, texts, or calls in — any hour, any day.",
    visual: "chat",
  },
  {
    title: "AI responds in seconds",
    description: "No queue, no voicemail. The first reply goes out before they've closed the tab.",
    visual: "chat",
  },
  {
    title: "Answers questions & qualifies",
    description: "Location, urgency, and budget window get captured in plain conversation.",
    visual: "chat",
  },
  {
    title: "Books the appointment",
    description: "Available slots are offered and confirmed without a back-and-forth.",
    visual: "calendar",
  },
  {
    title: "CRM updated",
    description: "The lead, job details, and appointment are logged automatically.",
    visual: "crm",
  },
  {
    title: "Owner notified",
    description: "A summary lands on your phone — you find out after it's already handled.",
    visual: "phone",
  },
];

export const timelineCaption = "Total elapsed time: 3 minutes. Your involvement: zero.";
