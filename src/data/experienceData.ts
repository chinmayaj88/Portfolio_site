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
}

export const experienceData: ExperienceItem[] = [
  {
    id: "lenskart",
    company: "lenskart",
    logo: "https://framerusercontent.com/images/H0mVNKzf1rPF5jofhioym8okMVM.svg",
    position: "Lead/Senior Product Designer",
    duration: "3+ Years",
    type: "Full Time",
    responsibilities: [
      {
        title: "Bottom Funnel:",
        description: "Redesigned cart & payment screens, boosting conversions.",
      },
      {
        title: "Mid Funnel:",
        description: "Redesigned PDP, PLP & Created Supercards for consistent UX",
      },
      {
        title: "Membership:",
        description: "Created Gold page with benefits and transaction history.",
      },
      {
        title: "POS:",
        description: "Updated designs for LK Stores' Point-of-Sale application",
      },
    ],
  },
  {
    id: "convertcart",
    company: "Convertcart",
    logo: "https://framerusercontent.com/images/maivdGm4FyHLpAw7qKPsq6XMCIU.svg",
    position: "Senior UI/UX Designer",
    duration: "2 Years",
    type: "Full Time",
    responsibilities: [
      {
        title: "Design System:",
        description: "Created a full end-to-end design system for the Products",
      },
      {
        title: "Brand Guidelines",
        description: "Created Brand Guidelines for consistent visual identity",
      },
      {
        title: "Cross Functoing:",
        description: "Collaboration with Marketing to add collaterals",
      },
    ],
  },
  {
    id: "tailwebs",
    company: "tailwebs.",
    logo: "https://framerusercontent.com/images/E3t0k2oHZD9le2V7M9xWG9z8yHM.svg",
    position: "User Experience Consultant",
    duration: "1 Year",
    type: "Part Time",
    responsibilities: [
      {
        title: "Design & Development:",
        description: "Cross functioning with different teams",
      },
      {
        title: "Client collaboration:",
        description: "Collaborated with clients to create impactful designs",
      },
    ],
  },
  {
    id: "palpx",
    company: "palpx",
    logo: "https://framerusercontent.com/images/HRmtW41UUTR97IvWFV8H9szrVv4.svg",
    position: "UI/UX Designer",
    duration: "2.5 Years",
    type: "Full Time",
    responsibilities: [
      {
        title: "Design Strategy & User Experience:",
        description: "Applied design strategy to improve usability and adoption",
      },
      {
        title: "Branding Projects:",
        description: "Handled diverse branding projects across media.",
      },
      {
        title: "UI/UX Exploration:",
        description: "Explored digital projects and essential design tools.",
      },
    ],
  },
];

