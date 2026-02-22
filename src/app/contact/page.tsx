"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { contactData } from "@/data/contactData";
import Image from "next/image";
import styles from "./page.module.css";

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email))
        newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
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
      const subject = encodeURIComponent(
        formData.subject || "Contact from Portfolio",
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      );
      window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("idle");
      }, 3000);
    } catch {
      setSubmitStatus("error");
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const n = { ...prev };
        delete n[name];
        return n;
      });
    }
  };

  const handleBlur = (fieldName: string) => {
    setFocusedField(null);
    if (fieldName === "email" && formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email))
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address",
        }));
    }
  };

  const socialLinks = contactData.socialLinks.filter((link) =>
    ["linkedin", "github", "instagram"].includes(link.id),
  );

  return (
    <main className={styles.main} ref={ref}>
      {/* Ambient orbs */}
      <div className={styles.orbWrap} aria-hidden="true">
        <motion.div
          className={`${styles.orb} ${styles.orbA}`}
          animate={{ scale: [1, 1.25, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`${styles.orb} ${styles.orbB}`}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className={`${styles.orb} ${styles.orbC}`}
          animate={{ scale: [1, 1.15, 1], opacity: [0.07, 0.14, 0.07] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
      </div>

      {/* Grid */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.container}>
        {/* ── HERO ────────────────────────────── */}
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Label pill */}
          <motion.div
            className={styles.heroPill}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <span className={styles.pillDot} />
            <span>Open to opportunities</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.65, delay: 0.25 }}
          >
            Got an idea?
            <br />
            <span className={styles.accentLine}>Let&apos;s make it</span>
            <br />
            happen<span className={styles.dot}>.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Whether it&apos;s a full-stack build, a quick freelance gig, or just
            a conversation — I&apos;m all ears. Reach out and let&apos;s make
            something worth talking about.
          </motion.p>
        </motion.div>

        {/* ── CONTENT GRID ─────────────────────── */}
        <div className={styles.contentWrapper}>
          {/* ── FORM CARD ── */}
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, x: -48 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -48 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <div className={styles.cardCornerTL} aria-hidden="true" />
            <div className={styles.cardCornerBR} aria-hidden="true" />

            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </div>
              <div>
                <h2 className={styles.cardTitle}>Send a Message</h2>
                <p className={styles.cardDesc}>
                  Fill the form and I&apos;ll get back to you soon.
                </p>
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {/* Name + Email row */}
              <div className={styles.formRow}>
                {/* Name */}
                <motion.div
                  className={styles.formGroup}
                  initial={{ opacity: 0, y: 16 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                  }
                  transition={{ duration: 0.45, delay: 0.5 }}
                >
                  <div
                    className={`${styles.inputBox} ${
                      focusedField === "name" ? styles.inputFocused : ""
                    } ${errors.name ? styles.inputErr : ""}`}
                  >
                    <label htmlFor="name" className={styles.label}>
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => handleBlur("name")}
                      className={styles.input}
                      placeholder="Chinmaya Jena"
                      autoComplete="name"
                    />
                  </div>
                  {errors.name && (
                    <span className={styles.errMsg}>{errors.name}</span>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div
                  className={styles.formGroup}
                  initial={{ opacity: 0, y: 16 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                  }
                  transition={{ duration: 0.45, delay: 0.6 }}
                >
                  <div
                    className={`${styles.inputBox} ${
                      focusedField === "email" ? styles.inputFocused : ""
                    } ${errors.email ? styles.inputErr : ""}`}
                  >
                    <label htmlFor="email" className={styles.label}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => handleBlur("email")}
                      className={styles.input}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>
                  {errors.email && (
                    <span className={styles.errMsg}>{errors.email}</span>
                  )}
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div
                className={styles.formGroup}
                initial={{ opacity: 0, y: 16 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.45, delay: 0.7 }}
              >
                <div
                  className={`${styles.inputBox} ${
                    focusedField === "subject" ? styles.inputFocused : ""
                  }`}
                >
                  <label htmlFor="subject" className={styles.label}>
                    Subject <span className={styles.optional}>(Optional)</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className={styles.input}
                    placeholder="Project collaboration, freelance, etc."
                  />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div
                className={styles.formGroup}
                initial={{ opacity: 0, y: 16 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.45, delay: 0.8 }}
              >
                <div
                  className={`${styles.inputBox} ${
                    focusedField === "message" ? styles.inputFocused : ""
                  } ${errors.message ? styles.inputErr : ""}`}
                >
                  <label htmlFor="message" className={styles.label}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => handleBlur("message")}
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Tell me about your project, idea, or just say hi…"
                    rows={6}
                  />
                </div>
                {errors.message && (
                  <span className={styles.errMsg}>{errors.message}</span>
                )}
              </motion.div>

              {/* Status banners */}
              {submitStatus === "success" && (
                <motion.div
                  className={styles.bannerSuccess}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>
                    Message sent! Your email client should open shortly.
                  </span>
                </motion.div>
              )}
              {submitStatus === "error" && Object.keys(errors).length > 0 && (
                <motion.div
                  className={styles.bannerError}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>Please fix the errors above before submitting.</span>
                </motion.div>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 16 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.45, delay: 0.9 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{isSubmitting ? "Opening Email…" : "Send Message"}</span>
                <motion.svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  animate={isSubmitting ? { x: [0, 6, 0] } : {}}
                  transition={{
                    duration: 0.5,
                    repeat: isSubmitting ? Infinity : 0,
                  }}
                >
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </motion.svg>
              </motion.button>
            </form>
          </motion.div>

          {/* ── INFO CARD ── */}
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: 48 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 48 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {/* Profile */}
            <motion.div
              className={styles.profileBlock}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.92 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className={styles.avatarWrap}
                whileHover={{ scale: 1.07, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.avatarGlowRing} />
                <Image
                  src={contactData.avatar}
                  alt={contactData.name}
                  width={100}
                  height={100}
                  className={styles.avatar}
                />
                <span className={styles.onlineDot} />
              </motion.div>
              <h3 className={styles.profileName}>{contactData.name}</h3>
              <p className={styles.profileRole}>{contactData.role}</p>
              <motion.div
                className={styles.availBadge}
                whileHover={{ scale: 1.04 }}
              >
                <motion.span
                  className={styles.availDot}
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Available for freelance</span>
              </motion.div>
            </motion.div>

            {/* Divider */}
            <div className={styles.infoDivider} />

            {/* Contact rows */}
            <motion.div
              className={styles.contactRows}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.55, delay: 0.75 }}
            >
              {/* Email row */}
              <motion.a
                href={`mailto:${contactData.email}`}
                className={styles.contactRow}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className={styles.rowIcon}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline
                      points="22,6 12,13 2,6"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className={styles.rowText}>
                  <span className={styles.rowLabel}>Email</span>
                  <span className={styles.rowValue}>{contactData.email}</span>
                </div>
                <div className={styles.rowArrow}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>

              {/* Phone row */}
              <motion.a
                href={`tel:${contactData.phone}`}
                className={styles.contactRow}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className={styles.rowIcon}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 17z" />
                  </svg>
                </div>
                <div className={styles.rowText}>
                  <span className={styles.rowLabel}>Phone</span>
                  <span className={styles.rowValue}>{contactData.phone}</span>
                </div>
                <div className={styles.rowArrow}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>

              {/* Location row */}
              <div className={styles.contactRow} style={{ cursor: "default" }}>
                <div className={styles.rowIcon}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className={styles.rowText}>
                  <span className={styles.rowLabel}>Location</span>
                  <span className={styles.rowValue}>
                    {contactData.location}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className={styles.infoDivider} />

            {/* Social links */}
            <motion.div
              className={styles.socialBlock}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <p className={styles.socialTitle}>Connect with me</p>
              <div className={styles.socialLinks}>
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: 1 + i * 0.1,
                      type: "spring",
                      stiffness: 220,
                    }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.92 }}
                    title={link.name}
                  >
                    {link.id === "github" && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    )}
                    {link.id === "linkedin" && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    )}
                    {link.id === "instagram" && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                      </svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* response time callout */}
            <motion.div
              className={styles.responseTag}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Typically responds within 24 hours</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className={styles.marqueeWrap} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className={styles.marqueeItem}>
              Let&apos;s collaborate
              <span className={styles.marqueeStar}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
