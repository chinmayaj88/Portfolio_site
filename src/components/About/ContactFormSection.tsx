"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { contactData } from "@/data/contactData";
import styles from "./ContactFormSection.module.css";

export default function ContactFormSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Column (Same as About Section Left) */}
          <motion.div
            className={styles.leftColumn}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.profileBlock}>
              <Image
                src={contactData.avatar}
                alt="Profile"
                width={60}
                height={60}
                className={styles.avatar}
              />
              <div className={styles.socialIcons}>
                <span className={styles.miniIcon}>in</span>
                <span className={styles.miniIcon}>ig</span>
                <span className={styles.miniIcon}>yt</span>
              </div>
            </div>

            <h3 className={styles.email}>{contactData.email}</h3>
            
            <p className={styles.shortBio}>
              I'm Akshay, a passionate Product Designer with a love for crafting intuitive, user-friendly, and visually striking digital experiences.
            </p>

            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Follow on Insta</span>
              <span className={styles.arrowIcon}>↗</span>
            </motion.a>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className={styles.rightColumn}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Let's get in touch</h2>
              
              <form className={styles.form}>
                <div className={styles.inputGroup}>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <textarea 
                    placeholder="Leave me a message" 
                    className={styles.textarea}
                    rows={4}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

