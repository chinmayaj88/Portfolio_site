"use client";

import { motion } from "framer-motion";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <motion.div
      className={styles.formCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
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
    </motion.div>
  );
}

