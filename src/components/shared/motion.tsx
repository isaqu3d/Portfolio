"use client";

import { motion } from "framer-motion";
import { ComponentProps, ReactNode } from "react";
type motionProps = ComponentProps<typeof motion.span> & {
  children: ReactNode;
};

export const MotionHeader = ({ children, ...props }: motionProps) => {
  return (
    <motion.header
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.header>
  );
};

export const MotionSection = ({ children, ...props }: motionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export const MotionSlide = ({ children, ...props }: motionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -120 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export const MotionBadge = ({ children, ...props }: motionProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.2, delay: 0.3 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export const Motion = ({ children }: motionProps) => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
