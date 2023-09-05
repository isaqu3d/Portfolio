"use client";
import { motion } from "framer-motion";
import { ComponentProps } from "react";

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
};

export function TechBadge({ name, ...props }: TechBadgeProps) {
  return (
    <motion.span
      className="hover: cursor-default rounded-lg bg-teal-600 py-1 px-3 text-sm text-white-100 transition-all hover:scale-105 hover:bg-teal-500"
      {...props}
    >
      {name}
    </motion.span>
  );
}
