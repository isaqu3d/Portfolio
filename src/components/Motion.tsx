"use client";

import { motion } from "framer-motion";
export function Motion({ children }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.0 }}
    >
      {children}
    </motion.div>
  );
}
