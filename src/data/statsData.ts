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
    value: 10,
    suffix: "+",
    label: "Projects",
    sublabel: "Completed",
    bgColor: "#a3ff12",
    textColor: "#000000",
  },
  {
    id: "experience",
    value: 2,
    suffix: "",
    label: "Years",
    sublabel: "of experience",
    bgColor: "#1a1a1a",
    textColor: "#ffffff",
  },
  {
    id: "technologies",
    value: 18,
    suffix: "+",
    label: "Technologies",
    sublabel: "Used",
    bgColor: "grey",
    textColor: "#ffffff",
  },
];

