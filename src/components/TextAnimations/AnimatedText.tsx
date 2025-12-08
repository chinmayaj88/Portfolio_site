"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "words" | "chars" | "lines";
}

export function AnimatedText({ 
  text, 
  className = "", 
  delay = 0,
  type = "words" 
}: AnimatedTextProps) {
  if (type === "chars") {
    const chars = text.split("");
    return (
      <span className={className}>
        {chars.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: delay + index * 0.02,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    );
  }

  if (type === "words") {
    const words = text.split(" ");
    return (
      <span className={className}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.4,
              delay: delay + index * 0.08,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
            style={{ display: "inline-block", marginRight: "0.3em" }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    );
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.6, 0.01, 0.05, 0.95],
      }}
    >
      {text}
    </motion.span>
  );
}

export function AnimatedHeading({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.6, 0.01, 0.05, 0.95],
      }}
    >
      {children}
    </motion.div>
  );
}

export function GradientText({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      style={{
        background: "linear-gradient(90deg, #a3ff12, #ffffff, #a3ff12, #ffffff)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      animate={{
        backgroundPosition: ["0% center", "200% center"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}

export function TypewriterText({ 
  text, 
  className = "",
  speed = 0.05 
}: { 
  text: string; 
  className?: string;
  speed?: number;
}) {
  const chars = text.split("");
  
  return (
    <span className={className}>
      {chars.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: index * speed,
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export function ScaleInText({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.4,
        delay,
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}

export function SlideInText({ 
  children, 
  className = "",
  direction = "left",
  delay = 0 
}: { 
  children: ReactNode; 
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}) {
  const directionOffset = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: -50 },
    down: { x: 0, y: 50 },
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        ...directionOffset[direction], 
        opacity: 0,
        filter: "blur(10px)" 
      }}
      animate={{ 
        x: 0, 
        y: 0, 
        opacity: 1,
        filter: "blur(0px)" 
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.6, 0.01, 0.05, 0.95],
      }}
    >
      {children}
    </motion.div>
  );
}

