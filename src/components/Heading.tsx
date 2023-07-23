import { ReactNode } from "react";

import useThemeData from "../hook/useThemeData";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export function Heading({ children, className }: HeadingProps) {
  const { theme } = useThemeData();
  return (
    <h1
      className={`${
        theme ? "text-gray-600" : "text-white-100"
      } text-xl font-bold underline underline-offset-[6px] decoration-4 decoration-gray-300 mb-4 mt-3 ${className}`}
    >
      {children}
    </h1>
  );
}
