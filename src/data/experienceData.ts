export interface Project {
  id: string;
  title: string;
  tech: string;
  achievements: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  logo: string;
  position: string;
  duration: string;
  type: "Full Time" | "Part Time";
  responsibilities: {
    title: string;
    description: string;
  }[];
  projects: Project[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "hyscaler",
    company: "Hyscaler",
    logo: "",
    position: "Junior Software Developer",
    duration: "04/2024 – 10/2025",
    type: "Full Time",
    responsibilities: [
      {
        title: "Collaboration & Client Engagement:",
        description: "Collaborated with client to understand medical data requirements, troubleshoot inconsistencies, and refine pipeline logic for improved reliability and compliance.",
      },
      {
        title: "Production Support:",
        description: "Implemented hotfixes and performance optimizations after production deployments, ensuring system stability and reliability.",
      },
    ],
    projects: [
      {
        id: "ai-retrieval-system",
        title: "AI-Powered Retrieval-Augmented Data System",
        tech: "FastAPI, AWS, Generative AI, PostgreSQL, Vector DB, MySQL",
        achievements: [
          "Designed and developed a cloud-based data pipeline to securely ingest medical records from a production MySQL database and transfer them into a PostgreSQL + Vector DB system for downstream AI retrieval tasks.",
          "Built a FastAPI middleware layer to handle data extraction, transformation, validation, and secure transfer between systems, ensuring consistency and auditability across pipeline stages.",
          "Integrated AWS services (including AWS Lex) to support HIPAA-aligned data handling workflows, enabling compliant processing of PHI and secure conversational interfaces.",
          "Implemented encryption-at-rest and in-transit, strict IAM policies, token-based access controls, and environment isolation to protect sensitive healthcare data.",
        ],
      },
      {
        id: "construction-platform",
        title: "Construction Management Platform",
        tech: "React, React Native, Node.js, Express.js, TypeScript",
        achievements: [
          "Revamped iOS application modules using React Native and TypeScript, improving performance and responsiveness by 30%.",
          "Implemented 25+ interactive forms integrated with REST APIs, improving UX automation for clients.",
          "Developed Node.js/Express.js APIs supporting high-volume data operations.",
        ],
      },
    ],
  },
];

