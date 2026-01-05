"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { contactData } from "@/data/contactData";
import { AnimatedText, GradientText } from "@/components/TextAnimations";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
import styles from "./page.module.css";

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const subject = encodeURIComponent(formData.subject || "Contact from Portfolio");
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      // Open email client
      window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;

      // Show success message
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      
      // Reset after delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (fieldName: string) => {
    setFocusedField(null);
    // Validate individual field on blur
    if (fieldName === "email" && formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setErrors((prev) => ({ ...prev, email: "Please enter a valid email address" }));
      }
    }
  };

  const socialLinks = contactData.socialLinks.filter((link) =>
    ["linkedin", "github", "email"].includes(link.id)
  );

  return (
    <main className={styles.main} ref={ref}>
      <div className={styles.container}>
        {/* Hero Section */}
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.h1
            className={styles.contactTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in touch
          </motion.h1>
        </motion.div>

        {/* Main Content */}
        <div className={styles.contentWrapper}>
          {/* Contact Form Card */}
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className={styles.cardGlow} />
            <div className={styles.cardContent}>
              <motion.div
                className={styles.cardHeader}
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className={styles.cardTitle}>Send a Message</h2>
                <p className={styles.cardDescription}>Fill out the form below and I'll get back to you soon.</p>
              </motion.div>

              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <motion.div
                  className={styles.formGroup}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className={styles.inputWrapper}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => handleBlur("name")}
                      className={`${styles.input} ${focusedField === "name" ? styles.focused : ""} ${errors.name ? styles.inputError : ""}`}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="name" className={styles.floatingLabel}>
                      Your Name
                    </label>
                    <div className={styles.inputUnderline} />
                    {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                  </div>
                </motion.div>

                <motion.div
                  className={styles.formGroup}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className={styles.inputWrapper}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => handleBlur("email")}
                      className={`${styles.input} ${focusedField === "email" ? styles.focused : ""} ${errors.email ? styles.inputError : ""}`}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="email" className={styles.floatingLabel}>
                      Your Email
                    </label>
                    <div className={styles.inputUnderline} />
                    {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                  </div>
                </motion.div>

                <motion.div
                  className={styles.formGroup}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className={styles.inputWrapper}>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      className={`${styles.input} ${focusedField === "subject" ? styles.focused : ""}`}
                      placeholder=" "
                    />
                    <label htmlFor="subject" className={styles.floatingLabel}>
                      Subject (Optional)
                    </label>
                    <div className={styles.inputUnderline} />
                  </div>
                </motion.div>

                <motion.div
                  className={styles.formGroup}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <div className={styles.inputWrapper}>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => handleBlur("message")}
                      className={`${styles.textarea} ${focusedField === "message" ? styles.focused : ""} ${errors.message ? styles.inputError : ""}`}
                      placeholder=" "
                      rows={6}
                      required
                    />
                    <label htmlFor="message" className={styles.floatingLabel}>
                      Your Message
                    </label>
                    <div className={styles.inputUnderline} />
                    {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
                  </div>
                </motion.div>

                {submitStatus === "success" && (
                  <motion.div
                    className={styles.successMessage}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>Message sent successfully! Your email client should open shortly.</span>
                  </motion.div>
                )}
                
                {submitStatus === "error" && (
                  <motion.div
                    className={styles.errorMessageBox}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>Please fix the errors above before submitting.</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{isSubmitting ? "Opening Email..." : "Send Message"}</span>
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    animate={isSubmitting ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 0.5, repeat: isSubmitting ? Infinity : 0 }}
                  >
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </motion.svg>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className={styles.cardGlow} />
            <div className={styles.cardContent}>
              {/* Profile Section */}
              <motion.div
                className={styles.profileSection}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  className={styles.avatarWrapper}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={contactData.avatar}
                    alt={contactData.name}
                    width={120}
                    height={120}
                    className={styles.avatar}
                  />
                  <div className={styles.avatarRing} />
                </motion.div>
                <h3 className={styles.profileName}>{contactData.name}</h3>
                <p className={styles.profileRole}>{contactData.role}</p>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                className={styles.contactDetails}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.a
                  href={`mailto:${contactData.email}`}
                  className={styles.contactItem}
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className={styles.contactIcon}>
                    <SiGmail size={24} />
                  </div>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactValue}>{contactData.email}</span>
                  </div>
                </motion.a>

                <motion.div
                  className={styles.contactItem}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className={styles.contactIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>Location</span>
                    <span className={styles.contactValue}>{contactData.location}</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Availability Badge */}
              <motion.div
                className={styles.availabilitySection}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <motion.div
                  className={styles.availabilityBadge}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.span
                    className={styles.availabilityDot}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <span>Available for freelance</span>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className={styles.socialSection}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <h4 className={styles.socialTitle}>Connect with me</h4>
                <div className={styles.socialLinks}>
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 1.1 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {link.id === "linkedin" && <FaLinkedin size={22} />}
                      {link.id === "github" && <FaGithub size={22} />}
                      {link.id === "email" && <SiGmail size={22} />}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
