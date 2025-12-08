export interface ProfileData {
  avatar: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  name: string;
  role: string;
  location: string;
  status: string;
  bio: string;
  experience: string;
  cta: {
    text: string;
    href: string;
  };
}

export const profileData: ProfileData = {
  avatar: {
    src: "/cj_profile_2.jpg",
    alt: "Avatar of Chinmaya Jena",
    width: 1000,
    height: 1000,
  },
  name: "Chinmaya Jena",
  role: "Developer, DevOps / Cloud Engineer",
  location: "Bhubaneswar 🇮🇳",
  status: "Online Now",
  bio: "Software Developer and Cloud/DevOps Engineer focused on scalable backend systems, Kubernetes, and production-grade cloud architecture.",
  experience: "2+ Years of Experience",
  cta: {
    text: "See what I can do",
    href: "#projects",
  },
};
