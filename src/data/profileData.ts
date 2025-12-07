export interface SocialLink {
  id: string;
  name: string;
  href: string;
  ariaLabel: string;
  iconSrc: string;
  width: number;
  height: number;
}

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
  socialLinks: SocialLink[];
  cta: {
    text: string;
    href: string;
  };
}

export const profileData: ProfileData = {
  avatar: {
    src: "https://framerusercontent.com/images/5oVs0K6gBX5p6TNFWKBQHThlQ10.png?scale-down-to=512&width=1000&height=1000",
    alt: "Avatar of the website author",
    width: 1000,
    height: 1000,
  },
  name: "Akshay L Shetty",
  role: "Digital Product Designer",
  location: "Bengaluru 🇮🇳",
  status: "Online Now",
  bio: "Product Designer & Artist specializing in user experience, design systems, and visual storytelling.",
  experience: "7+ Years of Designing…",
  socialLinks: [
    {
      id: "linkedin",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/akshaylshetty/",
      ariaLabel: "Link to social network",
      iconSrc: "https://framerusercontent.com/images/1Y2KG9fpqu7mkU0WxG1P9UODs0.svg?width=24&height=24",
      width: 24,
      height: 24,
    },
    {
      id: "instagram",
      name: "Instagram",
      href: "https://www.instagram.com/axy__sty/",
      ariaLabel: "Link to social network",
      iconSrc: "https://framerusercontent.com/images/Cw60tKtmS1dIG4c5tG24TKC8X5U.svg?width=22&height=22",
      width: 22,
      height: 22,
    },
    {
      id: "youtube",
      name: "YouTube",
      href: "https://www.youtube.com/@Axysty",
      ariaLabel: "Link to social network",
      iconSrc: "https://framerusercontent.com/images/1zfgEHKWN1nF6UoM7vgpiwxt7no.svg?width=24&height=24",
      width: 24,
      height: 24,
    },
  ],
  cta: {
    text: "See what i can do",
    href: "https://akshaylshetty.framer.website/#projects",
  },
};
