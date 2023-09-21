import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export function Heading({ children, className }: HeadingProps) {
  return (
    <h1
      className={`${className} mb-4 mt-3 py-2 font-sansMPlus text-2xl font-medium underline decoration-gray-300 decoration-4 underline-offset-[6px]`}
    >
      {children}
    </h1>
  );
}
