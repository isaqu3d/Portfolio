import { ReactNode } from "react";

import useThemeData from "../hook/useThemeData";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export function ButtonLink({ children, className, href }: ButtonProps) {
  const { theme } = useThemeData();
  return (
    <a
      href={href}
      className={`${
        theme
          ? " bg-teal-400 hover:bg-teal-600 text-white-100 "
          : " bg-teal-200 hover:bg-teal-400 text-black"
      } ${className} flex items-center transition-colors gap-2 font-medium py-2 px-4 rounded-md`}
    >
      {children}
    </a>
  );
}
