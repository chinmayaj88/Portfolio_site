"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useLoading } from "@/contexts/LoadingContext";
import styles from "./Header.module.css";
import { FaRegFileAlt } from "react-icons/fa";
import { headerData } from "@/data/headerData";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { isLoading } = useLoading();

  const headerBlur = useTransform(scrollY, [0, 50], [20, 30]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={isLoading ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.2 }}
      style={{
        backdropFilter: useTransform(headerBlur, (blur) => `blur(${blur}px)`),
      }}
    >
      <div className={styles.container}>
        {/* Logo/Brand */}
        <motion.div
          className={styles.logoSection}
          initial={{ opacity: 0, x: -20 }}
          animate={isLoading ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link href="/" className={styles.logoLink}>
            <motion.h3
              className={styles.logoText}
              whileHover={{ x: 3, scale: 1.02 }}
              transition={{ duration: 0.15 }}
            >
              {headerData.name}
            </motion.h3>
          </Link>
        </motion.div>

        {/* Main content wrapper */}
        <div className={styles.contentWrapper}>
          {/* Navigation */}
          <motion.nav
            className={styles.nav}
            initial={{ opacity: 0, y: -10 }}
            animate={isLoading ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            {headerData.navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                className={styles.navItem}
                initial={{ opacity: 0, y: -10 }}
                animate={isLoading ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 + index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${
                    pathname === link.href ? styles.active : ""
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{
                      duration: 0.15,
                      type: "spring",
                      stiffness: 500,
                    }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Right section: Email and Resume */}
          <motion.div
            className={styles.rightSection}
            initial={{ opacity: 0, x: 20 }}
            animate={isLoading ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <motion.div
              className={styles.emailSection}
              initial={{ opacity: 0 }}
              animate={isLoading ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.45 }}
            >
              <p className={styles.emailLabel}>Email:</p>
              <p className={styles.emailValue}>{headerData.email}</p>
            </motion.div>

            {/* Resume Download Button */}
            <motion.a
              href={headerData.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Download Resume"
              className={styles.resumeButton}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 8px 30px rgba(163, 255, 18, 0.5)",
              }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <FaRegFileAlt />
              My Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
