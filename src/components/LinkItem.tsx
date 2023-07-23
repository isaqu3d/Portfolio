import NextLink from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import useThemeData from "../hook/useThemeData";

interface LinkItemProps {
  href: string;
  target?: string;
  children: ReactNode;
}

export function LinkItem({ href, children, target, ...props }: LinkItemProps) {
  const { theme } = useThemeData();

  const router = useRouter();
  const active = router.asPath === href;

  return (
    <NextLink href={href} passHref scroll={false}>
      <a
        href={href}
        className={`${
          theme
            ? "text-teal-700  hover:decoration-teal-600"
            : "text-teal-200  hover:decoration-pink-500"
        } flex items-center rounded-md p-2 ml-2 gap-2 w-36 font-semibold  hover:underline hover:underline-offset-[6px] hover:decoration-1 hover:bg-teal-400/20
    `}
        target={target}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
}
