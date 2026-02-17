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
    id: "freelance-ai-eng",
    company: "Freelance",
    logo: "",
    position: "AI Engineer (Freelance)",
    duration: "12/2025 – Present",
    type: "Part Time",
    responsibilities: [
      {
        title: "",
        description:
          "Specializing in building custom AI automation solutions for enterprise clients. Focus areas include LLM-based data extraction, autonomous agents, and RAG systems using modern tech stacks like Groq, Llama-3.1, and Pydantic.",
      },
    ],
    projects: [
      {
        id: "shipment-extraction-demo",
        title: "Enterprise Shipment Extraction System",
        tech: "Python, Groq (Llama-3.1), Clean Architecture, IMAP, Pydantic",
        achievements: [
          "Developed a production-ready AI engine to automate shipment data extraction from unstructured emails with 93%+ accuracy.",
          "Implemented a modular Clean Architecture with pluggable connectors for live IMAP email ingestion and batch processing.",
          "Engineered a resilient prompt protocol with fuzzy mapping for port global aliases and unit conversion stabilization.",
          "Integrated automated benchmarking and validation pipelines ensuring high data fidelity for downstream logistics systems.",
        ],
      },
    ],
  },
  {
    id: "hyscaler",
    company: "Hyscaler",
    logo: "",
    position: "Junior Software Developer",
    duration: "04/2024 – 11/2025",
    type: "Full Time",
    responsibilities: [
      {
        title: "",
        description:
          "In my role as a Junior Software Developer, I worked across backend and DevOps to build scalable APIs, secure data pipelines, and cloud-native services. I developed backend features using Node.js and FastAPI, designed database structures, and implemented data workflows for AI-driven systems. On the DevOps side, I containerized applications, set up CI/CD automation, and deployed microservices on AWS ECS/EC2, ensuring reliability, security, and high performance across environments.",
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
