import { COLORS } from "@/constants/colors";

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
    bgColor: COLORS.accent,
    textColor: COLORS.textDark,
  },
  {
    id: "experience",
    value: 2,
    suffix: "",
    label: "Years",
    sublabel: "of experience",
    bgColor: COLORS.surfaceLight,
    textColor: COLORS.text,
  },
  {
    id: "technologies",
    value: 18,
    suffix: "+",
    label: "Technologies",
    sublabel: "Used",
    bgColor: "grey",
    textColor: COLORS.text,
  },
];
