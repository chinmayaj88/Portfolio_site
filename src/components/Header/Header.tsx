"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo/Brand */}
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                className={styles.logoSvg}
              >
                <path d="M88.08,128a22,22,0,1,1,22-22A22,22,0,0,1,88.08,128Zm92,0a22,22,0,1,1,22-22A22,22,0,0,1,180.08,128Zm-46-74a22,22,0,1,0,22-22A22,22,0,0,0,134.08,54Z" />
              </svg>
            </div>
            <h3 className={styles.logoText}>AXY STY</h3>
          </Link>
        </div>

        {/* Main content wrapper */}
        <div className={styles.contentWrapper}>
          {/* Navigation */}
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <div key={link.href} className={styles.navItem}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${
                    pathname === link.href ? styles.active : ""
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right section: Email and Resume */}
          <div className={styles.rightSection}>
            <div className={styles.emailSection}>
              <p className={styles.emailLabel}>Email:</p>
              <p className={styles.emailValue}>akshayshetty61@gmail.com</p>
            </div>

            {/* Resume Download Button */}
            <a
              href="https://framerusercontent.com/assets/GoQ3Kr9huiXoJwjm3Ft1w3Cs4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              title="Download Resume"
              className={styles.resumeButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="rgb(255, 255, 255)"
                viewBox="0 0 256 256"
                className={styles.resumeIcon}
              >
                <path d="M228 152v56a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-56a12 12 0 0 1 24 0v52h152v-52a12 12 0 0 1 24 0Zm-108.49 8.49a12 12 0 0 0 17 0l40-40a12 12 0 0 0-17-17L140 123V40a12 12 0 0 0-24 0v83l-19.51-19.49a12 12 0 0 0-17 17Z" />
              </svg>
              <span>My Resume</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
