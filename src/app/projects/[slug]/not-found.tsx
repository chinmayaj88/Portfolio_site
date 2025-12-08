import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Project Not Found</h1>
        <p className={styles.description}>
          Sorry, the project you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/projects" className={styles.link}>
          Back to Projects
        </Link>
      </div>
    </main>
  );
}
