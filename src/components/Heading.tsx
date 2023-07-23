import useThemeData from "@hook/useThemeData";
import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export function Heading({ className, children }: HeadingProps) {
  const { theme } = useThemeData();

  return (
    <h1
      className={`${
        theme ? "text-gray-600" : "text-white-100"
      } mb-4 mt-3 font-sansMPlus text-xl font-bold underline decoration-gray-300 decoration-4 underline-offset-[6px] ${className}`}
    >
      {children}
    </h1>
  );
}
