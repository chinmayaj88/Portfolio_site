import Image from "next/image";
import { SocialLinksProps } from "./types";
import styles from "./SocialLinks.module.css";

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className={styles.container}>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          className={styles.link}
        >
          <div className={styles.iconWrapper}>
            <div className={styles.iconContainer}>
              <Image
                src={link.iconSrc}
                alt=""
                width={link.width}
                height={link.height}
                className={styles.icon}
              />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
