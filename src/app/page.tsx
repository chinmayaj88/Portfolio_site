"use client";

import { motion } from "motion/react";
import { ProfileCard } from "@/components/ProfileCard";
import { BrandsCarousel } from "@/components/BrandsCarousel";
import { ToolsSkills } from "@/components/ToolsSkills";
import { ProfessionalJourney } from "@/components/ProfessionalJourney";
import { Statistics } from "@/components/Statistics";
import { Projects } from "@/components/Projects";
import { SocialSection } from "@/components/SocialSection";
import { Contact } from "@/components/Contact";
import { profileData } from "@/data/profileData";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ProfileCard data={profileData} />
      <BrandsCarousel />
      <ToolsSkills />
      <ProfessionalJourney />
      <Statistics />
      <Projects />
      <SocialSection />
      <Contact />
    </motion.main>
  );
}
