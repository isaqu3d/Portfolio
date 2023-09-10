"use client";

import useThemeData from "@hook/useThemeData";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<"button"> & {
  children: ReactNode;
  href: string;
};

export function ButtonLink({ children, href }: ButtonProps) {
  const { theme } = useThemeData();

  return (
    <div className="flex justify-center">
      <Link
        href={href}
        className={`${
          theme
            ? " bg-teal-400 text-white-100 hover:bg-teal-600 "
            : " bg-teal-200 text-black hover:bg-teal-400"
        } my-2 flex items-center justify-center gap-2 rounded-md py-2 px-4 font-medium transition-colors`}
      >
        {children}
      </Link>
    </div>
  );
}
