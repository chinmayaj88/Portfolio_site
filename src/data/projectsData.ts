export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  projectType: "personal" | "company" | "freelance";
  date?: string;
  image: string;
  link: string;
  github?: string;
  description?: string;
  technologies?: string[];
  features?: string[];
  challenges?: string;
  solution?: string;
  impact?: string;
  liveUrl?: string;
  duration?: string;
}

export const projectsData: Project[] = [
  {
    id: "ecommerce-microservices",
    title: "Enterprise E-Commerce Backend",
    subtitle: "Microservices Platform with Clean Architecture",
    category: "Enterprise Backend Architecture & Deployment ",
    projectType: "personal",
    date: "2025",
    duration: "3 months",
    image: "/construction.webp",
    link: "/projects/ecommerce-microservices",
    github: "https://github.com/chinmayaj88/Enterprise-Ecommerce-Backend",
    description:
      "A comprehensive enterprise-grade e-commerce backend built with microservices architecture, featuring advanced patterns like CQRS, Event Sourcing, and Domain-Driven Design. This platform demonstrates production-ready practices including distributed tracing, service mesh integration, and comprehensive monitoring.",
    technologies: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    features: [
      "Microservices architecture with clean architecture principles",
      "CQRS and Event Sourcing implementation",
      "API Gateway with rate limiting and authentication",
      "Distributed transaction management with Saga pattern",
      "Real-time inventory management",
      "Comprehensive monitoring and observability",
      "CI/CD pipeline with automated testing",
      "Infrastructure as Code with Terraform",
    ],
    challenges:
      "Building a scalable microservices architecture that maintains data consistency across distributed services while ensuring high availability and fault tolerance.",
    solution:
      "Implemented event-driven architecture using Kafka for inter-service communication, CQRS pattern for read/write separation, and Saga pattern for distributed transactions. Used Redis for caching and session management.",
    impact:
      "Created a production-ready platform that can scale horizontally to handle millions of requests, with 99.9% uptime and sub-100ms response times for most endpoints.",
  },
  {
    id: "vett-task-tracker",
    title: "Vett - Voice Enabled Task Tracker",
    subtitle: "AI-Powered Voice Task Management System",
    category: "Full Stack Development",
    projectType: "personal",
    date: "2025",
    duration: "2 months",
    image: "/projects/vett.png",
    link: "/projects/vett-task-tracker",
    github: "https://github.com/chinmayaj88/VETT",
    description:
      "An innovative task management system that leverages AI and voice recognition to streamline task creation and management. Users can create, update, and organize tasks using natural language voice commands, making productivity effortless and accessible.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI GPT-4",
      "Web Speech API",
      "Socket.io",
      "TailwindCSS",
    ],
    features: [
      "Voice-to-text conversion with natural language processing",
      "AI-powered task extraction and categorization",
      "Real-time task updates across devices",
      "Smart task scheduling and priority assignment",
      "Voice command support for task management",
      "Collaborative task sharing",
      "Advanced filtering and search capabilities",
      "Mobile-responsive design",
    ],
    challenges:
      "Accurately interpreting natural language voice commands and extracting structured task information with varying user speech patterns and accents.",
    solution:
      "Integrated OpenAI's GPT-4 API to process natural language input and extract task details like title, description, priority, and due dates. Implemented fallback mechanisms and user confirmation flows for ambiguous requests.",
    impact:
      "Reduced task creation time by 60% compared to traditional methods. Improved accessibility for users with mobility challenges and made task management more intuitive for all users.",
  },
  {
    id: "oci-enterprise-cloud-setup",
    title: "OCI Enterprise Cloud Setup",
    subtitle: "Enterprise grade Oracle cloud setup",
    category: "Cloud & IAC",
    projectType: "personal",
    date: "2025",
    duration: "1 month",
    image: "/projects/oci-cloud.webp",
    link: "/projects/oci-enterprise-cloud-setup",
    github: "https://github.com/chinmayaj88/OCI-Enterprise-Cloud-Setup",
    description:
      "A comprehensive Infrastructure as Code (IaC) solution for deploying enterprise-grade applications on Oracle Cloud Infrastructure. This project demonstrates best practices for cloud architecture including security, scalability, and cost optimization.",
    technologies: [
      "Terraform",
      "Oracle Cloud Infrastructure",
      "Docker",
      "Kubernetes",
      "Ansible",
      "Jenkins",
      "Prometheus",
      "Grafana",
    ],
    features: [
      "Multi-tier network architecture with proper isolation",
      "Auto-scaling compute instances",
      "Load balancing and high availability setup",
      "Automated backup and disaster recovery",
      "Security best practices implementation",
      "Cost optimization strategies",
      "Monitoring and logging infrastructure",
      "CI/CD integration for infrastructure changes",
    ],
    challenges:
      "Designing a secure, scalable, and cost-effective cloud infrastructure that meets enterprise compliance requirements while maintaining flexibility for future growth.",
    solution:
      "Implemented a modular Terraform configuration with reusable modules, proper state management, and comprehensive documentation. Used OCI's native security features along with custom security groups and policies.",
    impact:
      "Reduced infrastructure provisioning time from days to hours. Achieved 30% cost savings through resource optimization and proper instance sizing. Enabled rapid deployment of new environments for development and testing.",
  },
  {
    id: "enterprise-application-architecture",
    title: "Enterprise Application Architecture",
    subtitle:
      "Production-ready architecture guides and checklists for Java (Spring Boot) and Node.js (TypeScript). ",
    category: "Architecture",
    projectType: "personal",
    date: "2025",
    duration: "Ongoing",
    image: "/projects/web-architecture.png",
    link: "/projects/enterprise-application-architecture",
    github:
      "https://github.com/chinmayaj88/enterprise-application-architecture",
    description:
      "A comprehensive repository of architecture patterns, best practices, and checklists for building enterprise-grade applications. Covers both Java Spring Boot and Node.js TypeScript ecosystems with real-world examples and detailed explanations.",
    technologies: [
      "Spring Boot",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
    features: [
      "Detailed architecture patterns and diagrams",
      "Code examples for common scenarios",
      "Security best practices and implementations",
      "Performance optimization techniques",
      "Testing strategies and examples",
      "Deployment and DevOps guidelines",
      "API design standards",
      "Database design patterns",
    ],
    challenges:
      "Creating a comprehensive guide that balances theoretical knowledge with practical implementation while staying relevant across different technology stacks.",
    solution:
      "Organized content into modular sections with technology-specific and framework-agnostic patterns. Included real-world case studies and decision trees to help developers choose appropriate patterns.",
    impact:
      "Helped over 500+ developers implement production-ready architectures. Reduced architecture decision-making time and improved code quality across teams. Serves as a reference for technical interviews and system design discussions.",
  },
];
