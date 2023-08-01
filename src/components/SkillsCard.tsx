"use client";

import useThemeData from "@hook/useThemeData";
import { ReactNode } from "react";

type SkillsCardProps = {
  children: ReactNode;
};

export function SkillsCard({ children }: SkillsCardProps) {
  const { theme } = useThemeData();

  return (
    <div
      className={`${
        theme
          ? "border-2 border-teal-400 hover:border-teal-600"
          : "border-2 border-pink-400 hover:border-pink-500"
      } flex scale-100 justify-center rounded border-2 p-4 opacity-100 hover:scale-110 hover:opacity-100 sm:opacity-40 
      
   `}
    >
      {children}
    </div>
  );
}
