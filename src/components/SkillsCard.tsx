"use client";

import useThemeData from "@/hook/useThemeData";
import { ReactNode } from "react";

type SkillsCardProps = {
  children: ReactNode;
  onClick: () => void;
};

export function SkillsCard({ children, onClick }: SkillsCardProps) {
  const { theme } = useThemeData();

  return (
    <div
      className={`${
        theme
          ? "border-2 border-teal-400 hover:border-teal-600"
          : "border-2 border-pink-400 hover:border-pink-500"
      } flex scale-100 justify-center rounded border-2 p-4 opacity-100 transition hover:scale-110 hover:opacity-100 sm:opacity-40`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
