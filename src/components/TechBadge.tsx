"use client";

import useThemeData from "@hook/useThemeData";
import { motion } from "framer-motion";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { MotionBadge } from "./Motion";

const badgeColors = tv({
  base: "font-bold hover:cursor-default rounded-md transition-all text-sm text-white-100",
  variants: {
    color: {
      badgeYear: "bg-gray-300",
      badgeTeal: "bg-teal-600 hover:bg-teal-800",
      badgePink: "bg-pink-700 hover:bg-pink-800",
    },

    size: {
      default: "text-xs py-1 px-3",
      sm: "text-sm py-2 px-3",
      md: "text-base py-2 px-3",
    },
  },

  defaultVariants: {
    size: "default",
    color: "badgeYear",
  },
});

type TechBadgeProps = ComponentProps<typeof motion.span> &
  VariantProps<typeof badgeColors> & {
    name: string;
    color?: string;
    size?: string;
  };

export function TechBadge({
  name,
  color,
  size,
  className,
  ...props
}: TechBadgeProps) {
  const { theme } = useThemeData();
  const isDark = theme === "dark";

  const colorTheme = isDark ? "badgePink" : "badgeTeal";

  return (
    <MotionBadge>
      <motion.span
        className={badgeColors({
          color: color || colorTheme,
          size,
          className,
        })}
        {...props}
      >
        {name}
      </motion.span>
    </MotionBadge>
  );
}
