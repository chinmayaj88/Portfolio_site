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
  role: "Developer / Cloud & DevOps Engineer",
  location: "Bhubaneswar, Odisha, India",
  status: "Online Now",
  bio: "Full Stack, Cloud & DevOps Engineer with ~2 years of experience building scalable backend systems, cloud-native applications, and high-impact customer integrations. Skilled in Python, Node.js, API design, and deploying reliable solutions on AWS and OCI.",
  experience: "2 Years of Experience",
  cta: {
    text: "GitHub",
    href: "https://github.com/chinmayaj88",
  },
};
