import useThemeData from "@hook/useThemeData";
import NextLink from "next/link";
import { ReactNode } from "react";

interface LinkItemProps {
  href: string;
  target?: string;
  children: ReactNode;
}

export function LinkItem({ href, children, target }: LinkItemProps) {
  const { isDark } = useThemeData();

  return (
    <NextLink
      href={href}
      className={`${
        isDark
          ? "text-teal-600  hover:decoration-teal-600"
          : "text-teal-200  hover:decoration-pink-500"
      } ml-2 flex w-36 items-center gap-2 rounded-md p-2 font-semibold hover:bg-teal-400/20 hover:underline hover:decoration-1 hover:underline-offset-[6px]
`}
      target={target}
    >
      {children}
    </NextLink>
  );
}
