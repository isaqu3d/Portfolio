import { motion } from "framer-motion";
export function Motion({ children }) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
