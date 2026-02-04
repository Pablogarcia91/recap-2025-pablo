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
        title: "Onboarding & Subscription",
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
            "Design and implementation of a tracking system for all subscriptions. Providing users (General Partners) with the ability to have all information centralized in one place, from which they can quickly obtain desired information in a clearer and more efficient way using filters. Also incorporated the saved filters function to further improve efficiency based on the different needs that different roles accessing this information may have.",
          badges: ["High Product Impact"],
          liveUrl: "https://workbench.vega-alts-dev.link/subscriptions-tracker",
        },
        {
          id: "proj-1-2",
          title: "Tasks detail pages",
          description:
            "New functionalities incorporated that provide users with greater context and information about the task, taking into account its status, stage, and notes to view the 'history'. Helps users make data-driven decisions, resulting in greater usage efficiency.",
          badges: ["High Product Impact"],
          liveUrl: "https://workbench.vega-alts-dev.link/subscription/cdde60cd-bcf5-47da-9871-52a593102ee9/tasks/9ddaf216-a51f-4ecd-9f6b-cb08d7fc724c/questionnaire",
        },
        {
          id: "proj-1-3",
          title: "Manual Submission",
          description:
            "Feature to offer users the possibility of completing the subscription in a non-digital way. Being able to provide solutions based on the real needs of platform users.",
          demoUrl: "https://celestial-demo.vercel.app/",
          demoPassword: "elevator",
        },
        {
          id: "proj-1-4",
          title: "General Use Improvements",
          description:
            "Improvements in navigation, content hierarchy, and information architecture.",
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
            "Improvements to the visual design on the homepage, providing more relevant, simpler, and easier-to-understand information for users. Greater control over ongoing subscriptions.",
          demoUrl: "https://current-subscriptions.vercel.app/",
          demoPassword: "sunflower",
        },
        {
          id: "proj-2-2",
          title: "Start New Subscription",
          description:
            "Clarifying the steps involved in the process, keeping users informed at all times about what information is required and how to make the most of it by using previous presets to reduce completion time. More context = less time to create a new subscription.",
          demoUrl: "https://fund-onboarding-app.vercel.app/",
          demoPassword: "bottle",
        },
        {
          id: "proj-2-3",
          title: "General use improvements",
          description:
            "Working on improving the user experience of filling out the subscription questionnaire (alongside the implementation of the new form design), we added new features such as footnotes, comments on questions, and a help section to enable LPs to contact the GP during the process. This way, we offered users the option to interact and communicate with GPs to resolve doubts and reduce subscription correction time and the overall time to complete the questionnaire.",
          
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
            "Generation of a common nomenclature system and standardization across different tools (Spreadsheet - Mailjet - Metabase). Improvement regarding information on the status of each email, organized by GP/LP (Apollo), and creation of necessary emails for new GPs.",
        },
        {
          id: "proj-3-2",
          title: "Roles and Permissions",
          description:
            "Improvements in standardization of design system component usage, navigation patterns, and consistency and coherence across all profiles and parties involved.",
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
            "Creation from scratch of our own user data analysis system for the platform to better understand how users utilize it, enabling senior roles to have real data to detect pain points, improvements, and be more efficient in their daily work. Work based on Apollo's specific requirements, but designed and built in a way that can be scalable and reusable for the future.",
          liveUrl: "https://workbench.vega-alts-dev.link/analytics?tab=sessions",
        },
        {
          id: "proj-4-2",
          title: "Data Visualization",
          description:
            "Creation of different types of charts to help users better understand the data. Improved ease in performing more exhaustive tracking of user behavior.",
          badges: ["High Business Impact"],
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
            "Initiative driven by the design team proposing functional and visual improvements to components that make up tables and forms. Focus on component development working collaboratively alongside the front-end team.",
          badges: ["High Product Impact"],
          demos: [
            { label: "Tables documentation", url: "https://vegainvestments.atlassian.net/wiki/spaces/SD/pages/1242398741/Tables+Improvements" },
            { label: "Forms documentation", url: "https://vegainvestments.atlassian.net/wiki/spaces/SD/pages/1251704847/Forms+design+system" },
          ],
        },
        {
          id: "proj-5-2",
          title: "Vibe-coding JAMS",
          description:
            "Wednesday established as `vibe-coding` day, showing the design team's interest and initiative to stay updated with current trends and tendencies, and carrying out exercises that can subsequently be useful for us to incorporate into our platform. On a personal level, it has helped me tremendously to grow as a professional and to be able to showcase and apply that new knowledge to my day-to-day work.",
          badges: ["High Personal Impact", "High Product Impact", "High Business Impact"],
        },
        {
          id: "proj-5-3",
          title: "Multi-tenancy Designs",
          description:
            "Design and proposals of scalable, modular, and reusable designs, being able to reduce both costs and working times (design, implementation, development...).",
          badges: ["High Product Impact", "High Business Impact"],
          demoUrl: "#",
        },
        
        {
          id: "proj-5-4",
          title: "Standardization",
          description:
            "Responsibility for design coherence and consistency across the entire platform. Conducting QA and testing sessions to verify that everything is correct. Ensuring that implementations are as faithful as possible to the designs, taking into account deadlines and required efforts.",
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
