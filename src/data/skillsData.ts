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
    id: "figma",
    name: "Figma",
    description: "Leading collaborative design tool",
    icon: "https://framerusercontent.com/images/eNM3xgFeEoXtbUg5YN9Kb8Uk8.png",
    percentage: 90,
    color: "#a3ff12",
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    description: "Raster graphics editor by Adobe",
    icon: "https://framerusercontent.com/images/GHXl7VBSGcrSBfVqhvVSCWIk.png",
    percentage: 80,
    color: "#a3ff12",
  },
  {
    id: "illustrator",
    name: "Adobe illustrator",
    description: "powerful drawing app for iPad.",
    icon: "https://framerusercontent.com/images/YF27WyMqG6aRohLXr4jIvTPbr0.png",
    percentage: 80,
    color: "#a3ff12",
  },
];

