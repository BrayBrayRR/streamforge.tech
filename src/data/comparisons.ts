import type { Comparison } from "@/types";

export const comparisons: Comparison[] = [
  {
    slug: "ai-follow-up-vs-answering-service",
    title: "AI follow-up vs. hiring an answering service",
    metaDescription:
      "An honest comparison of AI lead follow-up and a traditional answering service — cost, speed, booking capability, and when each fits.",
    optionALabel: "AI lead follow-up",
    optionBLabel: "Answering service",
    intro:
      "Both exist to make sure a call doesn't go unanswered. The difference is in what happens after someone picks up — and how the cost scales as your call volume grows.",
    rows: [
      {
        criterion: "Response time",
        optionA: "Seconds, any hour of the day",
        optionB: "Usually fast, but queued behind other clients' calls",
      },
      {
        criterion: "Cost model",
        optionA: "Flat monthly engagement",
        optionB: "Per-minute or per-call fees that scale with volume",
      },
      {
        criterion: "Knowledge of your business",
        optionA: "Trained on your exact services, pricing, and availability",
        optionB: "Working from a script you provide, which can drift out of date",
      },
      {
        criterion: "Booking capability",
        optionA: "Books directly into your calendar",
        optionB: "Usually takes a message; direct booking depends on the provider",
      },
      {
        criterion: "Consistency",
        optionA: "Same quality on every call",
        optionB: "Varies by which agent picks up",
      },
      {
        criterion: "Best for",
        optionA: "Businesses that want qualification and booking, not just a message taken",
        optionB: "Businesses that mainly need a live voice to answer and relay a message",
      },
    ],
    verdict:
      "An answering service is a reasonable choice if you mainly need a human voice picking up and passing along a message, and your call volume is low enough that per-minute pricing stays affordable. AI follow-up tends to win once you want the call to actually end in a booked appointment, not just a callback request, and once volume is high enough that a flat monthly cost beats per-call fees.",
  },
  {
    slug: "ai-follow-up-vs-office-admin",
    title: "AI follow-up vs. hiring an office admin",
    metaDescription:
      "An honest comparison of AI lead follow-up and hiring an office admin — coverage hours, cost, scalability, and where each one actually fits.",
    optionALabel: "AI lead follow-up",
    optionBLabel: "Office admin",
    intro:
      "This isn't really an either-or comparison — most businesses that hire an admin still miss the hours an admin can't cover. Here's how they actually differ.",
    rows: [
      {
        criterion: "Coverage hours",
        optionA: "24/7, including nights and weekends",
        optionB: "Typically business hours only",
      },
      {
        criterion: "Cost",
        optionA: "Flat monthly engagement, no payroll overhead",
        optionB: "Salary, benefits, payroll taxes, and training time",
      },
      {
        criterion: "Scalability",
        optionA: "Handles a slow week and a busy week the same way",
        optionB: "A single person has a real ceiling on call volume",
      },
      {
        criterion: "Range of tasks",
        optionA: "Focused: lead reply, qualification, booking",
        optionB: "Broad: scheduling, admin work, walk-ins, general office tasks",
      },
      {
        criterion: "Judgment calls",
        optionA: "Escalates anything outside its scope to your team",
        optionB: "Can use full judgment on ambiguous or unusual situations",
      },
      {
        criterion: "Best for",
        optionA: "Filling the hours and call volume a single person physically can't cover",
        optionB: "Businesses that need a person handling a wide range of day-to-day office tasks",
      },
    ],
    verdict:
      "These solve different problems. An office admin brings judgment and range that a system doesn't have — walk-ins, vendor calls, general office work. AI follow-up covers what an admin physically can't: nights, weekends, and the exact minute a call is already ringing through. Most businesses running both get more out of the combination than either alone.",
  },
];
