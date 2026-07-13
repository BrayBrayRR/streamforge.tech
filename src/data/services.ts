import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "lead-follow-up",
    name: "AI lead follow-up",
    valueProp: "Every inbound lead gets a reply in seconds, day or night.",
    builtFor: "Built for HVAC, plumbing, roofing, and other trade businesses.",
    benefits: [
      "Answers common questions instantly, using your pricing and service area",
      "Qualifies location, urgency, and budget before it reaches your calendar",
      "Books the appointment and syncs the job straight into your CRM",
    ],
    href: "/services/lead-follow-up",
  },
  {
    slug: "linkedin-content",
    name: "LinkedIn ghostwriting & content",
    valueProp: "Consistent posting and a real voice, without you writing a word.",
    builtFor: "Built for founders, consultants, agencies, and service providers.",
    benefits: [
      "Weekly posts drafted from your ideas, calls, and past work",
      "A content calendar you approve in minutes, not hours",
      "Growth tracked against real engagement, not vanity metrics",
    ],
    href: "/services/linkedin-content",
  },
  {
    slug: "automation-products",
    name: "Automation products",
    valueProp: "Ready-to-run workflows you install once and keep using.",
    builtFor: "Built for teams who want the system, not a custom build.",
    benefits: [
      "Downloadable n8n and Zapier workflows with setup instructions",
      "No subscription required — buy once, own it",
      "New automations added to the library every month",
    ],
    href: "/automations",
  },
];
