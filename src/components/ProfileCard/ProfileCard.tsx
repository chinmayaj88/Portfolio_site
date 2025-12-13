import ProfileImage from "./ProfileImage";
import HeroSection from "./HeroSection";
import CallToAction from "./CallToAction";
import { ProfileCardProps } from "./types";
import styles from "./ProfileCard.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import { socialLinksData } from "@/data/socialLinksData";

export default function ProfileCard({ data }: ProfileCardProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Profile card with image and social links */}
          <div className={styles.profileCardWrapper}>
            <div className={styles.profileCard}>
              <ProfileImage
                src={data.avatar.src}
                alt={data.avatar.alt}
                width={data.avatar.width}
                height={data.avatar.height}
              />
              <div className={styles.profileInfo}>
                <div className={styles.nameSection}>
                  <h3 className={styles.name}>{data.name}</h3>
                </div>
                <div className={styles.roleSection}>
                  <p className={styles.role}>{data.role}</p>
                </div>
                <div className={styles.socialLinksSection}>
                  {socialLinksData.map((social) => (
                    <Link
                      key={social.id}
                      href={social.href}
                      style={{
                        marginLeft: 4,
                        marginRight: 4,
                      }}
                    >
                      {social.icon === "github" && (
                        <FaGithub size={20} color="#6fa717ff" />
                      )}
                      {social.icon === "linkedin" && (
                        <FaLinkedin size={20} color="#6fa717ff" />
                      )}
                      {social.icon === "email" && (
                        <SiGmail size={20} color="#6fa717ff" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hero section with greeting and intro */}
          <div className={styles.heroWrapper}>
            <div className={styles.heroContent}>
              <HeroSection
                name={data.name}
                role={data.role}
                location={data.location}
                status={data.status}
              />
            </div>
          </div>

          {/* Experience section */}
          <div className={styles.experienceWrapper}>
            <div className={styles.experienceContent}>
              <p className={styles.experience}>{data.experience}</p>
            </div>
          </div>

          {/* Description and CTA */}
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>
              <p className={styles.descriptionText}>{data.bio}</p>
            </div>
            <div className={styles.ctaWrapper}>
              <div className={styles.ctaContent}>
                <CallToAction text={data.cta.text} href={data.cta.href} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className={styles.backgroundDecoration}>
        <div className={styles.decorationContent}>
          <div className={styles.decorationShape} />
        </div>
      </div>
    </section>
  );
}
