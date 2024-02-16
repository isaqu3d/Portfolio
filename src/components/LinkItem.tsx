import NextLink from "next/link";
import { ReactNode } from "react";

interface LinkItemProps {
  href: string;
  target?: string;
  children: ReactNode;
}

export function LinkItem({ href, children, target }: LinkItemProps) {
  return (
    <NextLink
      href={href}
      className=" ml-2 flex w-36  items-center gap-2 rounded-md p-2 font-semibold text-teal-200 hover:bg-teal-400/20 hover:underline hover:decoration-pink-500 hover:decoration-1 hover:underline-offset-[6px] dark:text-teal-600 dark:hover:decoration-teal-600"
      target={target}
    >
      {children}
    </NextLink>
  );
}
