"use client";

import useThemeData from "@hook/useThemeData";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type LinkSanityProps = LinkProps & {
  href: string;
  target?: string;
  className?: string;
  children: ReactNode;
};

export function LinkSanity({
  href,
  children,
  target,
  ...props
}: LinkSanityProps) {
  const { theme } = useThemeData();
  return (
    <Link
      href={href}
      className={`${
        theme
          ? "text-teal-60 hover:text-teal-500"
          : " text-pink-60 hover:text-pink-700"
      }  transition-colors`}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
}
