"use client";
import { motion } from "framer-motion";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const badges = tv({
  base: "font-bold px-1 text-xs",

  variants: {
    badgeVariantsColors: {
      badgeTech:
        "hover: cursor-default rounded-lg bg-teal-600 py-1 px-3 text-sm text-white-100 transition-all hover:scale-105 hover:bg-teal-500 font-normal",
      badgeGreen: "bg-teal-600 text-white-100",
      badgeGray: "bg-gray-300 text-white-100",
    },

    defaultVariants: {
      size: "badgeTech",
    },
  },
});

/* "bg-teal-600 text-white-100" : "bg-gray-300 text-white-100"
      } px-1 text-xs font-bold */

type TechBadgeProps = ComponentProps<typeof motion.span> &
  VariantProps<typeof badges> & {
    name: string;
  };

export function TechBadge({
  name,
  badgeVariantsColors,
  className,
  ...props
}: TechBadgeProps) {
  return (
    <motion.span
      className={badges({ badgeVariantsColors, className })}
      {...props}
    >
      {name}
    </motion.span>
  );
}
