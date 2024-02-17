"use client";

import NextLink from "next/link";
import { BiChevronRight } from "react-icons/bi";

export function NextLinkColor() {
  return (
    <div className="flex items-center">
      <NextLink
        href="/projects"
        className="text-sm text-pink-400 hover:underline dark:text-teal-600 dark:hover:underline md:text-base"
      >
        Projeto
      </NextLink>

      <span>
        <BiChevronRight />
      </span>
    </div>
  );
}
