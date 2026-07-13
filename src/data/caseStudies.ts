import type { CaseStudyCard } from "@/types";

export const caseStudies: CaseStudyCard[] = [
  {
    businessType: "Regional HVAC company, ~12 technicians",
    problem:
      "After-hours and weekend leads went to voicemail. Most callbacks happened the next business day, by which point many callers had already booked with someone else.",
    deployed:
      "AI lead follow-up with instant text and email reply, appointment qualification, and CRM sync.",
    outcome:
      "Average first-response time dropped from hours to under two minutes, and after-hours inquiries started converting into booked jobs instead of going cold.",
    timeframe: "First 60 days",
    metricLabel: "Average first-response time (minutes)",
    chartData: [240, 210, 195, 180, 6, 3, 2, 2],
    illustrative: true,
  },
  {
    businessType: "Single-location roofing contractor",
    problem:
      "Storm-season lead spikes overwhelmed the office. Quote requests sat unanswered for a day or more during peak weeks.",
    deployed:
      "AI lead follow-up with automated qualification and calendar booking for inspection appointments.",
    outcome:
      "A higher share of quote requests converted into booked inspections during peak storm weeks, without adding office staff.",
    timeframe: "One storm season (8 weeks)",
    metricLabel: "Booked inspections per week",
    chartData: [6, 7, 5, 8, 14, 17, 19, 21],
    illustrative: true,
  },
];
