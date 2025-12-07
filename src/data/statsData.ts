export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  bgColor: string;
  textColor: string;
}

export const statsData: StatItem[] = [
  {
    id: "projects",
    value: 70,
    suffix: "+",
    label: "Projects",
    sublabel: "Completed",
    bgColor: "#a3ff12",
    textColor: "#000000",
  },
  {
    id: "experience",
    value: 7,
    suffix: "+",
    label: "Years",
    sublabel: "of experience",
    bgColor: "#1a1a1a",
    textColor: "#ffffff",
  },
  {
    id: "brands",
    value: 60,
    suffix: "+",
    label: "Brand",
    sublabel: "Collaboration",
    bgColor: "#f5f5f5",
    textColor: "#000000",
  },
];

