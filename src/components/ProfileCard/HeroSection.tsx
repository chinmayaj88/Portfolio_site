import OnlineStatus from "./OnlineStatus";
import { HeroSectionProps } from "./types";
import styles from "./HeroSection.module.css";

export default function HeroSection({
  name,
  role,
  location,
  status,
}: HeroSectionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.statusSection}>
        <OnlineStatus status={status} />
      </div>

      <div className={styles.greetingSection}>
        <div className={styles.greetingRow}>
          <div className={styles.greetingLabel}>
            <p className={styles.labelText}>Hi!</p>
          </div>
          <div className={styles.namePill}>
            <div className={styles.namePillContent}>
              <p className={styles.nameText}>
                <span className={styles.nameGradient}>{name}</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.descriptionRow}>
          <div className={styles.roleRow}>
            <div className={styles.roleLabel}>
              <p className={styles.labelText}>a</p>
            </div>
            <div className={styles.rolePill}>
              <div className={styles.rolePillContent}>
                <p className={styles.roleText}>{role}</p>
              </div>
            </div>
          </div>

          <div className={styles.locationRow}>
            <div className={styles.locationLabel}>
              <p className={styles.labelText}>from</p>
            </div>
            <div className={styles.locationPill}>
              <div className={styles.locationPillContent}>
                <p className={styles.locationText}>{location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
