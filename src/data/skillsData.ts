import { COLORS } from "@/constants/colors";

export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string;
  percentage: number;
  color: string;
}

export const skillsData: Skill[] = [
  {
    id: "nodejs",
    name: "Node.js",
    description: "JavaScript runtime for backend development",
    icon: "",
    percentage: 85,
    color: COLORS.accent,
  },
  {
    id: "python",
    name: "Python",
    description: "High-level programming language",
    icon: "",
    percentage: 80,
    color: COLORS.accent,
  },
  {
    id: "react",
    name: "React.js",
    description: "JavaScript library for building user interfaces",
    icon: "",
    percentage: 85,
    color: COLORS.accent,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    description: "Open-source relational database",
    icon: "",
    percentage: 80,
    color: COLORS.accent,
  },
  {
    id: "aws",
    name: "AWS",
    description: "Amazon Web Services cloud platform",
    icon: "",
    percentage: 75,
    color: COLORS.accent,
  },
  {
    id: "docker",
    name: "Docker",
    description: "Containerization platform",
    icon: "",
    percentage: 80,
    color: COLORS.accent,
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    description: "Container orchestration platform",
    icon: "",
    percentage: 75,
    color: COLORS.accent,
  },
];

