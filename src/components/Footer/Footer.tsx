"use client";

import { motion } from "motion/react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { headerData } from "@/data/headerData";
import { socialLinksData } from "@/data/socialLinksData";
import { profileData } from "@/data/profileData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <motion.div
            className={styles.logoSection}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className={styles.logoLink}>
              <motion.h3
                className={styles.logoText}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.15 }}
              >
                {headerData.name}
              </motion.h3>
            </Link>
          </motion.div>

          {/* Credits */}
          <motion.div
            className={styles.credits}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <motion.p className={styles.copyright} whileHover={{ x: 2 }}>
              Copyright © Web Design and Development, {currentYear}
            </motion.p>
            <div>
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
          </motion.div>

          {/* Creator */}
          <div className={styles.creator}>
            <p className={styles.createdBy}>Created by:</p>
            <div className={styles.creatorInfo}>
              <div className={styles.avatar}>
                <Image
                  src={profileData.avatar.src}
                  alt={profileData.avatar.alt}
                  width={36}
                  height={36}
                  className={styles.avatarImage}
                />
              </div>
              <span className={styles.creatorName}>{profileData.name}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
