import { OnlineStatusProps } from "./types";
import styles from "./OnlineStatus.module.css";

export default function OnlineStatus({ status }: OnlineStatusProps) {
  return (
    <div className={styles.container}>
      <div className={styles.statusDot} />
      <p className={styles.statusText}>{status}</p>
    </div>
  );
}
