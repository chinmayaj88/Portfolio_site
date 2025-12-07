export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  image: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    id: "lenskart-supercards",
    title: "Lenskart Supercards",
    subtitle: "Product Card Redesign",
    category: "Lenskart Product cards",
    date: "",
    image: "https://framerusercontent.com/images/IbAWp9mqlqTcJFSbjFSvQzPEqTM.png",
    link: "#",
  },
  {
    id: "lenskart-cart",
    title: "Lenskart Cart Redesign",
    subtitle: "Gold Membership Pitch & Design system update",
    category: "Cart Redesign",
    date: "",
    image: "https://framerusercontent.com/images/NqnvVhYx9yyOz0HaRcL5n6n1tc.png",
    link: "#",
  },
  {
    id: "merlin",
    title: "Merlin Digital",
    subtitle: "Logo Design & Rebranding",
    category: "Electronic Products",
    date: "6/20/20",
    image: "https://framerusercontent.com/images/Vo3nYYcNGUWnH7aKZHVqFJOXOo.jpg",
    link: "#",
  },
  {
    id: "craft",
    title: "Craft - Customised for You",
    subtitle: "Product Design & Shopping Experience",
    category: "E-commerce store",
    date: "",
    image: "https://framerusercontent.com/images/jDd4c8BFSqEoQNVfJ7EgzZOZnRA.png",
    link: "#",
  },
];

export const categories = [
  "Design System",
  "Interface Design",
  "Design System",
  "Interaction Design",
  "User Centric Design",
  "Mobile first",
];

