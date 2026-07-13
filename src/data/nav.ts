import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/services/lead-follow-up",
    children: [
      {
        label: "AI lead follow-up",
        href: "/services/lead-follow-up",
        description: "Instant reply, qualification, and booking for inbound leads.",
      },
      {
        label: "LinkedIn content",
        href: "/services/linkedin-content",
        description: "Ghostwriting and growth for founders and consultants.",
      },
    ],
  },
  { label: "Automations", href: "/automations" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  Services: [
    { label: "Lead follow-up", href: "/services/lead-follow-up" },
    { label: "LinkedIn content", href: "/services/linkedin-content" },
  ],
  Automations: [
    { label: "Browse library", href: "/automations" },
    { label: "n8n email blaster", href: "/automations/n8n-email-blaster" },
  ],
  Industries: [
    { label: "All industries", href: "/industries" },
    { label: "HVAC", href: "/industries/hvac" },
    { label: "Plumbing", href: "/industries/plumbing" },
    { label: "Roofing", href: "/industries/roofing" },
  ],
  Resources: [
    { label: "Guides & playbooks", href: "/resources" },
    { label: "ROI calculator", href: "/roi-calculator" },
    { label: "AI follow-up vs. answering service", href: "/compare/ai-follow-up-vs-answering-service" },
    { label: "AI follow-up vs. office admin", href: "/compare/ai-follow-up-vs-office-admin" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Book a demo", href: "https://calendly.com/outreach-streamforge/30min" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} satisfies Record<string, NavItem[]>;

export const bookingUrl = "https://calendly.com/outreach-streamforge/30min";
export const gumroadUrl = "https://streamforgetech.gumroad.com";

// TODO: replace with the real Formspree form endpoint before launch —
// create a form at https://formspree.io and swap this ID in.
export const formspreeEndpoint = "https://formspree.io/f/REPLACE_WITH_FORM_ID";

export const socialLinks = [
  { label: "LinkedIn — Brayden Jarrell", href: "https://www.linkedin.com/in/brayden-jarrell-457740328/" },
  { label: "LinkedIn — Joseph Belcher", href: "https://www.linkedin.com/in/joseph-belcher-88833b41a/" },
];
