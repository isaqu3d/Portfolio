"use client";

import useThemeData from "@/hook/useThemeData";
import NextLink from "next/link";
import { BiChevronRight } from "react-icons/bi";

export function NextLinkColor() {
  const { theme } = useThemeData();
  return (
    <div className="flex items-center">
      <NextLink
        href="/projects"
        className={`${
          theme
            ? "text-teal-600 hover:underline"
            : "text-pink-400 hover:underline"
        } text-sm md:text-base`}
      >
        Projeto
      </NextLink>

      <span>
        <BiChevronRight />
      </span>
    </div>
  );
}
