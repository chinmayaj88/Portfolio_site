import { CallToActionProps } from "./types";
import styles from "./CallToAction.module.css";

export default function CallToAction({ text, href }: CallToActionProps) {
  return (
    <a href={href} className={styles.button}>
      <div className={styles.textContainer}>
        <p className={styles.buttonText}>{text}</p>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.iconBox}>
          <div className={styles.iconContent}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              className={styles.icon}
            >
              <g>
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}
