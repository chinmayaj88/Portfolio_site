"use client";

import { motion } from "motion/react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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
                Chinmaya Jena
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
              <Link
                href={"https://github.com/chinmayaj88"}
                style={{
                  marginLeft: 4,
                  marginRight: 4,
                }}
              >
                <FaGithub size={20} color="#6fa717ff" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/chinmaya-jena-934ba71b2/"}
                style={{
                  marginLeft: 4,
                  marginRight: 4,
                }}
              >
                <FaLinkedin size={20} color="#6fa717ff" />
              </Link>
              <Link
                href={""}
                style={{
                  marginLeft: 4,
                  marginRight: 4,
                }}
              >
                <SiGmail size={20} color="#6fa717ff" />
              </Link>
            </div>
          </motion.div>

          {/* Creator */}
          <div className={styles.creator}>
            <p className={styles.createdBy}>Created by:</p>
            <div className={styles.creatorInfo}>
              <div className={styles.avatar}>
                <Image
                  src="/cj_profile_2.jpg"
                  alt="Chinmaya Jena"
                  width={36}
                  height={36}
                  className={styles.avatarImage}
                />
              </div>
              <span className={styles.creatorName}>Chinmaya Jena</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
