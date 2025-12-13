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
    category: "Backend Development",
    date: "2024",
    image: "/construction.webp",
    link: "/projects/ecommerce-microservices",
  },
  {
    id: "vett-task-tracker",
    title: "Vett - Voice Enabled Task Tracker",
    subtitle: "AI-Powered Voice Task Management System",
    category: "Full Stack Development",
    date: "2024",
    image: "/construction.webp",
    link: "/projects/vett-task-tracker",
  },
  {
    id: "lenskart-supercards",
    title: "Lenskart Supercards",
    subtitle: "Product Card Redesign",
    category: "Lenskart Product cards",
    date: "",
    image: "https://framerusercontent.com/images/eYXqseQzAZ73eDQa7SSWQVuLfEc.jpg?width=1853&height=1126",
    link: "https://akshaylshetty.framer.website/projects/lenskart-design",
  },
  {
    id: "lenskart-cart",
    title: "Lenskart Cart Redesign",
    subtitle: "Gold Membership Pitch & Design system update",
    category: "Cart Redesign",
    date: "",
    image: "https://framerusercontent.com/images/jKJfZTmBRpve694NdibNW2hX0.jpg?lossless=1&width=1853&height=1126",
    link: "https://akshaylshetty.framer.website/projects/lenskart-cart-redesign",
  },
];

