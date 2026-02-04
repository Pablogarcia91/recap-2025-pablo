// Stats data
export interface Stat {
  id: string;
  value: number;
  suffix?: string; // e.g., "+"
  label: string;
}

// Timeline/Quarter data
export interface TimelineItem {
  id: string;
  text: string;
}

export interface Quarter {
  id: "Q1" | "Q2" | "Q3" | "Q4";
  label: string; // e.g., "Q1 2025"
  title: string;
  items: TimelineItem[];
}

// Team Contributions data
export type BadgeType = "High Personal Impact" | "High Product Impact" | "High Business Impact";

export interface Demo {
  label: string;
  url: string;
  password?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  badges?: BadgeType[];
  demoUrl?: string;
  demoPassword?: string;
  demos?: Demo[];
  liveUrl?: string;
}

export interface TeamContribution {
  id: string;
  label: string; // e.g., "TEAM CONTRIBUTIONS"
  teamName: string;
  subtitle?: string;
  projects: Project[];
}

// Extra Value data
export interface ExtraValueItem {
  id: string;
  number: string; // e.g., "01", "02", "03"
  title: string;
  description: string;
}

// Main content structure
export interface ReviewContent {
  hero: {
    title: string; // e.g., "ANNUAL PERFORMANCE REVIEW — PABLO GARCÍA"
    subtitle: string;
    period: string; // e.g., "JANUARY 2025 — DECEMBER 2025"
  };
  stats: Stat[];
  timeline: {
    label: string; // e.g., "CHRONOLOGICAL OVERVIEW"
    title: string; // e.g., "The Year in Review"
    quarters: Quarter[];
  };
  teamContributions: TeamContribution[];
  extraValue: {
    label: string; // e.g., "BEYOND DELIVERABLES"
    title: string; // e.g., "Extra Value"
    subtitle: string;
    items: ExtraValueItem[];
  };
  footer: {
    thankYouMessage: string;
    credit: string;
  };
}
