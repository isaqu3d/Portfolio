import NextLink from "next/link";
import { ReactNode } from "react";

import useThemeData from "../hook/useThemeData";

interface LinkItemProps {
  href: string;
  target?: string;
  children: ReactNode;
}

export function LinkItem({ href, children, target, ...props }: LinkItemProps) {
  const { theme } = useThemeData();

  return (
    <NextLink href={href} passHref scroll={false}>
      <a
        href={href}
        className={`${
          theme
            ? "text-teal-700  hover:decoration-teal-600"
            : "text-teal-200  hover:decoration-pink-500"
        } ml-2 flex w-36 items-center gap-2 rounded-md p-2 font-semibold  hover:bg-teal-400/20 hover:underline hover:decoration-1 hover:underline-offset-[6px]
    `}
        target={target}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
}
