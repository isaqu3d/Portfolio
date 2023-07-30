import useThemeData from "@hook/useThemeData";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
};

export function ButtonLink({ children, href }: ButtonProps) {
  const { theme } = useThemeData();

  return (
    <Link
      href={href}
      className={`${
        theme
          ? " bg-teal-400 text-white-100 hover:bg-teal-600 "
          : " bg-teal-200 text-black hover:bg-teal-400"
      } flex items-center gap-2 rounded-md py-2 px-4 font-medium transition-colors`}
    >
      {children}
    </Link>
  );
}
