export interface ContactLink {
  id: string;
  name: string;
  icon: string;
  href: string;
}

export const contactData = {
  title: "I'm all over the internet",
  email: "akshayshetty61@gmail.com",
  name: "Akshay L Shetty",
  role: "Product Designer",
  avatar: "https://framerusercontent.com/images/5oVs0K6gBX5p6TNFWKBQHThlQ10.png",
  socialLinks: [
    {
      id: "linkedin",
      name: "Linkedin",
      icon: "in",
      href: "https://www.linkedin.com/in/akshaylshetty/",
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: "ig",
      href: "https://www.instagram.com/axy__sty/",
    },
    {
      id: "youtube",
      name: "Youtube",
      icon: "yt",
      href: "https://www.youtube.com/@Axysty",
    },
    {
      id: "behance",
      name: "Behance",
      icon: "Be",
      href: "https://www.behance.net/akshaylshetty",
    },
  ],
};

