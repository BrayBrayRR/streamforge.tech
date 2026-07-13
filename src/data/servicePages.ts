import type { ServicePageContent } from "@/types";
import { faqs } from "@/data/faqs";

export const leadFollowUpPage: ServicePageContent = {
  slug: "lead-follow-up",
  metaTitle: "AI lead follow-up for service businesses",
  metaDescription:
    "Answer every inbound lead in seconds, qualify them, and book the appointment automatically. Built for HVAC, plumbing, roofing, and other trade businesses.",
  heroHeadline: "Answer every lead before they call the next name on the list.",
  heroSubhead:
    "StreamForge replies to inbound leads in seconds, qualifies them in plain conversation, and books the appointment — day or night.",
  problemHeading: "Speed decides who gets the job.",
  problemBody:
    "Most service businesses don't lose jobs on price or quality — they lose them on response time. By the time someone calls back, the lead has often already booked with whoever answered first.",
  problemPoints: [
    "Leads reached in the first 5 minutes are far more likely to convert than those reached after 30 — see the research below.",
    "Most inbound calls to home-service businesses go unanswered outright.",
    "Every hour of delay is an hour a competitor has to close the job instead.",
  ],
  howItWorks: [
    {
      title: "Inquiry comes in",
      description: "A lead texts, calls, or fills out a form on your site — any hour of the day.",
    },
    {
      title: "AI replies immediately",
      description: "The first response goes out in seconds, written in your voice, using your actual services and pricing.",
    },
    {
      title: "Qualifies the job",
      description: "Location, urgency, and budget window get captured in plain conversation, not a rigid form.",
    },
    {
      title: "Books the appointment",
      description: "Real openings from your calendar are offered and confirmed without a back-and-forth.",
    },
    {
      title: "Updates your systems",
      description: "The lead and job details land in your CRM, and you get notified — after it's already handled.",
    },
  ],
  whoItsFor: [
    {
      title: "Trade businesses with real call volume",
      description: "HVAC, plumbing, roofing, electrical, and similar service businesses fielding regular inbound inquiries.",
    },
    {
      title: "Teams without a full-time receptionist",
      description: "Owners and small offices who can't staff a phone line every evening and weekend.",
    },
    {
      title: "Anyone losing track of leads after hours",
      description: "If a Friday-night inquiry usually waits until Monday, this closes that gap.",
    },
  ],
  proofPoints: [
    {
      heading: "100×",
      description: "more likely to connect with a lead reached in the first 5 minutes than one called after 30.",
      source: "Lead Response Management study, MIT Sloan / InsideSales.com (Oldroyd, 2007)",
    },
    {
      heading: "62%",
      description: "of inbound calls to home-service businesses go unanswered.",
      source: "411 Locals call-response study, 2024",
    },
    {
      heading: "Under 2 minutes",
      description:
        "Illustrative example: a regional HVAC company cut average first-response time from hours to under two minutes within 60 days.",
      illustrative: true,
    },
  ],
  faqs,
};

export const linkedinContentPage: ServicePageContent = {
  slug: "linkedin-content",
  metaTitle: "LinkedIn ghostwriting and content for founders and consultants",
  metaDescription:
    "Consistent LinkedIn posting in your voice, without you writing a word. Built for founders, consultants, agencies, and service providers.",
  heroHeadline: "Stay visible on LinkedIn without writing a single post.",
  heroSubhead:
    "StreamForge turns your ideas, calls, and past work into a steady stream of LinkedIn posts written in your voice.",
  problemHeading: "Consistency beats a great post once a quarter.",
  problemBody:
    "Most founders and consultants already know posting builds pipeline. The accounts that grow are the ones that show up every week — not the ones waiting for the perfect post.",
  problemPoints: [
    "A decent post every week outperforms a great post once a month.",
    "Writing takes focus time that's hard to protect during a busy week.",
    "Most people have plenty to say out loud, but freeze up in front of a blank page.",
  ],
  howItWorks: [
    {
      title: "A short conversation",
      description: "You talk through what's on your mind — a client win, an opinion, a lesson — for a few minutes.",
    },
    {
      title: "Drafts come back in your voice",
      description: "Posts are written from how you actually talk, not a generic LinkedIn template.",
    },
    {
      title: "You approve or edit in minutes",
      description: "A quick pass on each draft, not a rewrite.",
    },
    {
      title: "Posts go out on a schedule",
      description: "Consistent publishing without you touching a keyboard.",
    },
  ],
  whoItsFor: [
    {
      title: "Founders building a personal brand",
      description: "People whose reputation is part of the sales pipeline, not just a side project.",
    },
    {
      title: "Consultants and agency owners",
      description: "Anyone whose next client often comes from someone who's been watching them online.",
    },
    {
      title: "Service providers who rely on referrals",
      description: "Businesses where visibility and trust drive word-of-mouth more than paid ads.",
    },
  ],
  proofPoints: [
    {
      heading: "Weekly cadence",
      description: "A steady publishing rhythm instead of sporadic bursts followed by long silence.",
    },
    {
      heading: "Your voice, not a template",
      description: "Drafts are built from how you actually talk and write, not a generic formula.",
    },
    {
      heading: "Minutes, not hours",
      description: "Review and approval is a quick pass — the writing time is the part that disappears.",
    },
  ],
  faqs: [
    {
      question: "How much of my time does this take each week?",
      answer: "Usually one short conversation or voice note, plus a few minutes reviewing drafts — most of the writing time comes off your plate entirely.",
    },
    {
      question: "Will it actually sound like me?",
      answer: "Drafts are built from how you talk in calls and conversations, and you review every post before it goes out — nothing publishes without your approval.",
    },
    {
      question: "What if I don't have much to say in a given week?",
      answer: "That's normal — a short conversation is usually enough to find two or three post ideas from what you're already working on.",
    },
    {
      question: "Do you handle graphics or just text posts?",
      answer: "Posts are primarily text-first, since that's what tends to perform best on LinkedIn — visuals get added when they genuinely help a specific post.",
    },
    {
      question: "Is there a minimum commitment?",
      answer: "No long-term contract — engagements run month to month, same as our other services.",
    },
  ],
};
