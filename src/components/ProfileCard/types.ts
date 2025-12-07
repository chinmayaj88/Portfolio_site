import { ProfileData, SocialLink } from "@/data/profileData";

export interface ProfileImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface OnlineStatusProps {
  status: string;
}

export interface SocialLinksProps {
  links: SocialLink[];
}

export interface SocialLinkItemProps {
  link: SocialLink;
}

export interface HeroSectionProps {
  name: string;
  role: string;
  location: string;
  status: string;
}

export interface CallToActionProps {
  text: string;
  href: string;
}

export interface ProfileCardProps {
  data: ProfileData;
}
