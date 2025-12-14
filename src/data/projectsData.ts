export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  date?: string;
  image: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    id: "ecommerce-microservices",
    title: "Enterprise E-Commerce Backend",
    subtitle: "Microservices Platform with Clean Architecture",
    category: "Enterprise Backend Architecture & Deployment ",
    date: "2025",
    image: "/construction.webp",
    link: "/projects/ecommerce-microservices",
  },
  {
    id: "vett-task-tracker",
    title: "Vett - Voice Enabled Task Tracker",
    subtitle: "AI-Powered Voice Task Management System",
    category: "Full Stack Development",
    date: "2025",
    image: "/projects/vett.png",
    link: "/projects/vett-task-tracker",
  },
  {
    id: "oci-enterprise-cloud-setup",
    title: "OCI Enterprise Cloud Setup",
    subtitle: "Enterprise grade Oracle cloud setup",
    category: "Cloud & IAC",
    date: "2025",
    image: "/projects/oci-cloud.webp",
    link: "/projects/oci-enterprise-cloud-setup",
  },
  {
    id: "enterprise-application-architecture",
    title: "Enterprise Application Architecture",
    subtitle:
      "Production-ready architecture guides and checklists for Java (Spring Boot) and Node.js (TypeScript). ",
    category: "Architecture",
    date: "2025",
    image: "/projects/web-architecture.png",
    link: "/projects/enterprise-application-architecture",
  },
];
