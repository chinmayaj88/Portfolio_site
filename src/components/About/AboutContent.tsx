"use client";

import { motion } from "framer-motion";
import styles from "./AboutContent.module.css";

export default function AboutContent() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          <span>Available online</span>
        </div>
        <h1 className={styles.title}>About me</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.bioWrapper}
      >
        <p className={styles.bioText}>
          Hi, I'm Akshay L Shetty, a passionate Product Designer blending UI, UX, and creativity to craft seamless digital experiences. With a love for technology and an obsession with mobile innovation since childhood, I design interfaces that not only look stunning but feel intuitive. Beyond pixels, I'm also a creative artist, bringing imagination and craft into everything I build.
        </p>
        <p className={styles.bioText}>
          With over 7 years of experience, I've worked with a diverse range of clients and products from service-based startups to B2B SaaS platforms and B2C products, learning from each collaboration while helping teams bring their visions to life online.
        </p>
        <p className={styles.bioText}>
          Let's create something amazing together!
        </p>
      </motion.div>
    </div>
  );
}

