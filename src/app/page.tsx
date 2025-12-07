import { ProfileCard } from "@/components/ProfileCard";
import { BrandsCarousel } from "@/components/BrandsCarousel";
import { profileData } from "@/data/profileData";

export default function Home() {
  return (
    <>
      <ProfileCard data={profileData} />
      <BrandsCarousel />
    </>
  );
}
