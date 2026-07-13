import type { StatCard } from "@/types";

export const problemStats: StatCard[] = [
  {
    value: 100,
    suffix: "×",
    label: "more likely to connect with a lead reached in the first 5 minutes than one called after 30",
    source: "Lead Response Management study, MIT Sloan / InsideSales.com (Oldroyd, 2007)",
  },
  {
    value: 21,
    suffix: "×",
    label: "more likely a lead qualifies when reached in 5 minutes vs. 30",
    source: "Lead Response Management study, MIT Sloan / InsideSales.com (Oldroyd, 2007)",
  },
  {
    value: 62,
    suffix: "%",
    label: "of inbound calls to home-service businesses go unanswered",
    source: "411 Locals call-response study, 2024",
  },
];

export const mininarrative = {
  time1: "7:43pm",
  event1: "Lead comes in through the website form.",
  time2: "8:02pm",
  event2: "They book with a competitor who called back in 20 minutes.",
  time3: "9:00am",
  event3: "Your team replies — the next morning.",
};
