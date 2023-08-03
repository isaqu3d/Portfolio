import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    <h1 className="mb-4 mt-3 font-sansMPlus text-xl font-bold underline decoration-gray-300 decoration-4 underline-offset-[6px]">
      {children}
    </h1>
  );
}
