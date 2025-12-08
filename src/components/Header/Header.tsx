"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./Header.module.css";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "About & Contact", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 50], [0.8, 0.95]);
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
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
      style={{
        backdropFilter: useTransform(headerBlur, (blur) => `blur(${blur}px)`),
      }}
    >
      <div className={styles.container}>
        {/* Logo/Brand */}
        <motion.div
          className={styles.logoSection}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link href="/" className={styles.logoLink}>
            <motion.div
              className={styles.logoIcon}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                className={styles.logoSvg}
              >
                <path d="M88.08,128a22,22,0,1,1,22-22A22,22,0,0,1,88.08,128Zm92,0a22,22,0,1,1,22-22A22,22,0,0,1,180.08,128Zm-46-74a22,22,0,1,0,22-22A22,22,0,0,0,134.08,54Z" />
              </svg>
            </motion.div>
            <motion.h3
              className={styles.logoText}
              whileHover={{ x: 3, scale: 1.02 }}
              transition={{ duration: 0.15 }}
            >
              Chinmaya Jena
            </motion.h3>
          </Link>
        </motion.div>

        {/* Main content wrapper */}
        <div className={styles.contentWrapper}>
          {/* Navigation */}
          <motion.nav
            className={styles.nav}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                className={styles.navItem}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${
                    pathname === link.href ? styles.active : ""
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ duration: 0.15, type: "spring", stiffness: 500 }}
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.div
              className={styles.emailSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <p className={styles.emailLabel}>Email:</p>
              <p className={styles.emailValue}>jenachinmaya51@gmail.com</p>
            </motion.div>

            {/* Resume Download Button */}
            <motion.a
              href="#"
              // target="_blank"
              rel="noopener noreferrer"
              // download
              title="Download Resume"
              className={styles.resumeButton}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 8px 30px rgba(163, 255, 18, 0.5)",
              }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
                className={styles.resumeIcon}
                animate={{ y: [0, 3, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path d="M228 152v56a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-56a12 12 0 0 1 24 0v52h152v-52a12 12 0 0 1 24 0Zm-108.49 8.49a12 12 0 0 0 17 0l40-40a12 12 0 0 0-17-17L140 123V40a12 12 0 0 0-24 0v83l-19.51-19.49a12 12 0 0 0-17 17Z" />
              </motion.svg>
              <span>My Resume</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
