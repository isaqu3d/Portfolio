import { ReactNode } from "react";

import useThemeData from "../hook/useThemeData";

type HeadingProps = {
  children: ReactNode;
};

export function Heading({ children }: HeadingProps) {
  const { theme } = useThemeData();

  return (
    <h1
      className={`${
        theme ? "text-gray-600" : "text-white-100"
      } mb-4 mt-3 font-sansMPlus text-xl font-bold underline decoration-gray-300 decoration-4 underline-offset-[6px] `}
    >
      {children}
    </h1>
  );
}
