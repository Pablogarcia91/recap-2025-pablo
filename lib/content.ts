import { ReviewContent } from "@/types/content";

export const reviewContent: ReviewContent = {
  hero: {
    title: "ANNUAL PERFORMANCE REVIEW — PABLO GARCÍA",
    subtitle:
      "2025 brought significant contributions across five teams, delivering high-impact features and fostering cross-functional partnerships.",
    period: "JANUARY 2025 — DECEMBER 2025",
  },

  stats: [
    {
      id: "stat-1",
      value: 10,
      suffix: "+",
      label: "DEMOS BUILT",
    },
    {
      id: "stat-2",
      value: 4,
      label: "OFFICE VISITS",
    },
    {
      id: "stat-3",
      value: 2,
      label: "COURSES DONE",
    },
    {
      id: "stat-4",
      value: 5,
      label: "TEAMS COLLABORATED",
    },
  ],

  timeline: {
    label: "CHRONOLOGICAL OVERVIEW",
    title: "The Year in Review",
    quarters: [
      {
        id: "Q1",
        label: "Q1 2025",
        title: "Onboarding and Subscriptions",
        items: [
          { id: "q1-1", text: "Questionnaire" },
          { id: "q1-2", text: "Forms" },
          { id: "q1-3", text: "Comments/Help" },
        ],
      },
      {
        id: "Q2",
        label: "Q2 2025",
        title: "Workbench, Analytics, and Design",
        items: [
          { id: "q2-1", text: "Tasks" },
          { id: "q2-2", text: "Subscription Tracker" },
          { id: "q2-3", text: "Creation, Maintenance and Supervision of Analytics with Bimpe" },
          { id: "q2-4", text: "Tables improvements" },
        ],
      },
      {
        id: "Q3",
        label: "Q3 2025",
        title: "Workbench, Analytics, Design and User Registration",
        items: [
          { id: "q3-1", text: "Compliance" },
          { id: "q3-2", text: "Mailing Ownership" },
          { id: "q3-3", text: "Roles and Permissions" },
          { id: "q3-4", text: "Following Implementations and testing on Analytics" },
          { id: "q3-5", text: "General UI/UX Enhancements" },
          { id: "q3-6", text: "Forms Improvements" },
        ],
      },
      {
        id: "Q4",
        label: "Q4 2025",
        title: "Workbench, Subscriptions and User Registration",
        items: [
          { id: "q4-1", text: "Current/Pending Subscriptions (with demo)" },
          { id: "q4-2", text: "Manual Submission (with demo)" },
          { id: "q4-3", text: "Multi GP (with demo)" },
          { id: "q4-4", text: "Mobile Testing" },
          { id: "q4-5", text: "Workbench Enhancements" },
        ],
      },
    ],
  },

  teamContributions: [
    {
      id: "team-1",
      label: "TEAM CONTRIBUTIONS",
      teamName: "Workbench Team",
      projects: [
        {
          id: "proj-1-1",
          title: "Subscription Tracker",
          description:
            "Designed and implemented a comprehensive subscription tracking system, enabling users to monitor and manage their active subscriptions efficiently.",
          badge: "HIGH IMPACT",
        },
        {
          id: "proj-1-2",
          title: "Tasks Pages",
          description:
            "Developed intuitive task management pages that streamline workflow organization and improve team productivity.",
          badge: "HIGH IMPACT",
        },
        {
          id: "proj-1-3",
          title: "Manual Submission",
          description:
            "Created a demo for manual submission workflows, showcasing improved data entry processes.",
          demoUrl: "#",
        },
        {
          id: "proj-1-4",
          title: "General Use Improvements",
          description:
            "Implemented various UI/UX improvements across the platform to enhance user experience.",
        },
      ],
    },
    {
      id: "team-2",
      label: "TEAM CONTRIBUTIONS",
      teamName: "Onboarding & Subscription Team",
      projects: [
        {
          id: "proj-2-1",
          title: "Current Subscriptions",
          description:
            "Built a demo showcasing the current subscriptions management interface with improved data visualization.",
          demoUrl: "#",
        },
        {
          id: "proj-2-2",
          title: "Start New Subscription",
          description:
            "Designed and prototyped the new subscription flow, focusing on reducing friction and improving conversion.",
          demoUrl: "#",
        },
      ],
    },
    {
      id: "team-3",
      label: "TEAM CONTRIBUTIONS",
      teamName: "User Registration Team",
      projects: [
        {
          id: "proj-3-1",
          title: "Mailing Ownership",
          description:
            "Took ownership of the mailing system integration, ensuring reliable communication with users throughout their journey.",
        },
        {
          id: "proj-3-2",
          title: "Roles and Permissions",
          description:
            "Designed the roles and permissions system interface, enabling granular access control across the platform.",
        },
      ],
    },
    {
      id: "team-4",
      label: "TEAM CONTRIBUTIONS",
      teamName: "Analytics Team",
      subtitle: "Collaboration with Bimpe",
      projects: [
        {
          id: "proj-4-1",
          title: "Dashboard Creation",
          description:
            "Collaborated on creating comprehensive analytics dashboards for tracking key performance metrics.",
        },
        {
          id: "proj-4-2",
          title: "Data Visualization",
          description:
            "Implemented interactive data visualizations to help stakeholders understand trends and patterns.",
        },
      ],
    },
    {
      id: "team-5",
      label: "TEAM CONTRIBUTIONS",
      teamName: "Design Team",
      projects: [
        {
          id: "proj-5-1",
          title: "Tables & Form Improvements",
          description:
            "Overhauled table components and form patterns to create consistent, accessible, and efficient data entry experiences.",
          badge: "HIGH IMPACT",
        },
        {
          id: "proj-5-2",
          title: "Vibe-coding JAMS",
          description:
            "Personal initiative to explore creative coding and rapid prototyping techniques, bringing fresh perspectives to design challenges.",
          badge: "PERSONAL",
        },
        {
          id: "proj-5-3",
          title: "Multi-tenancy Designs",
          description:
            "Laid the groundwork for multi-tenant architecture in the design system, enabling future scalability.",
          badge: "FUTURE",
        },
        {
          id: "proj-5-4",
          title: "Mobile Testing",
          description:
            "Established mobile testing protocols and conducted comprehensive device testing to ensure responsive experiences.",
        },
        {
          id: "proj-5-5",
          title: "Error Screens Standardization",
          description:
            "Created a unified error screen system with consistent messaging, helpful actions, and brand-aligned visuals.",
        },
      ],
    },
    
  ],

  extraValue: {
    label: "BEYOND DELIVERABLES",
    title: "Extra Value",
    subtitle: "Soft skills, growth, and contributions that enhance team dynamics.",
    items: [
      {
        id: "extra-1",
        number: "01",
        title: "Understanding Business Value",
        description:
          "Completed Financial Investment Principles course at Oxford University focused on understanding business metrics and how design decisions impact the bottom line. This knowledge helps prioritize features and communicate more effectively with stakeholders.",
      },
      {
        id: "extra-2",
        number: "02",
        title: "Adaptability & Resilience",
        description:
          "Successfully adapted to significant team changes and restructuring throughout the year. Maintained productivity and positive collaboration despite shifting priorities and team compositions.",
      },
      {
        id: "extra-3",
        number: "03",
        title: "Office Presence & Collaboration",
        description:
          "Made 4 visits to the office to strengthen relationships, participate in workshops, and engage in face-to-face collaboration. These visits enhanced team cohesion and accelerated decision-making.",
      },
    ],
  },

  footer: {
    thankYouMessage: "Thank you / Gracias / Gràcies",
    credit: "PABLO — 2025 PERFORMANCE REVIEW",
  },
};
