import Image from "next/image";
import { ProfileImageProps } from "./types";
import styles from "./ProfileImage.module.css";

export default function ProfileImage({
  src,
  alt,
  width,
  height,
}: ProfileImageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          className={styles.image}
        />
      </div>
    </div>
  );
}
