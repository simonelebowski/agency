export type Course = {
  slug: string;
  title: string;
  provider: string;
  city: string; // e.g. Riyadh, Jeddah, London, Dublin, Toronto
  country: string; // e.g. KSA, UK, Ireland, Canada
  level: "Beginner" | "Intermediate" | "Advanced" | "IELTS" | "Business";
  type: "General English" | "Intensive" | "Academic Prep" | "Online";
  durationWeeks: number;
  priceSAR: number; // Approx SAR (for display)
  startDates: string[]; // ISO dates
  highlights: string[];
};

export const courses: Course[] = [
  {
    slug: "general-english-riyadh",
    title: "General English – Riyadh",
    provider: "Bright Path Partner Center",
    city: "Riyadh",
    country: "KSA",
    level: "Beginner",
    type: "General English",
    durationWeeks: 8,
    priceSAR: 3200,
    startDates: ["2025-10-20", "2025-11-10", "2025-12-01"],
    highlights: ["Small groups", "Evening classes", "MOE-compliant"],
  },
  {
    slug: "ielts-prep-jeddah",
    title: "IELTS Preparation – Jeddah",
    provider: "Focus IELTS Institute",
    city: "Jeddah",
    country: "KSA",
    level: "IELTS",
    type: "Academic Prep",
    durationWeeks: 6,
    priceSAR: 4200,
    startDates: ["2025-10-25", "2025-11-15"],
    highlights: ["Mock tests", "Band 7+ strategies", "Speaking labs"],
  },
  {
    slug: "intensive-london",
    title: "Intensive English – London",
    provider: "City Language School",
    city: "London",
    country: "UK",
    level: "Intermediate",
    type: "Intensive",
    durationWeeks: 12,
    priceSAR: 9800,
    startDates: ["2026-01-06", "2026-02-03"],
    highlights: ["20h/week", "Central campus", "Accommodation help"],
  },
  {
    slug: "business-english-dublin",
    title: "Business English – Dublin",
    provider: "Enterprise Language College",
    city: "Dublin",
    country: "Ireland",
    level: "Business",
    type: "General English",
    durationWeeks: 10,
    priceSAR: 8700,
    startDates: ["2025-11-05", "2025-12-03", "2026-01-07"],
    highlights: ["Meet professionals", "Presentation skills", "Networking"],
  },
  {
    slug: "online-advanced-toronto",
    title: "Advanced English (Online) – Toronto",
    provider: "North Language Online",
    city: "Toronto",
    country: "Canada",
    level: "Advanced",
    type: "Online",
    durationWeeks: 8,
    priceSAR: 2900,
    startDates: ["2025-10-18", "2025-11-08", "2025-12-06"],
    highlights: ["Live classes", "Recorded sessions", "Flexible hours"],
  },
];
