export interface ContactLink {
  id: string;
  name: string;
  icon: string;
  href: string;
}

export const contactData = {
  title: "I'm all over the internet",
  email: "jenachinmaya51@gmail.com",
  phone: "+91-6370535011",
  name: "Chinmaya Jena",
  role: "Full Stack Developer",
  avatar: "/cj_profile_2.jpg",
  location: "Bhubaneswar, Odisha, India",
  socialLinks: [
    {
      id: "github",
      name: "GitHub",
      icon: "gh",
      href: "https://github.com/chinmayaj88",
    },
    {
      id: "linkedin",
      name: "Linkedin",
      icon: "in",
      href: "https://www.linkedin.com/in/chinmaya-jena-934ba71b2/",
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: "ig",
      href: "https://instagram.com",
    },
    {
      id: "email",
      name: "Email",
      icon: "✉",
      href: "mailto:jenachinmaya51@gmail.com",
    },
  ],
};

