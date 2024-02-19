"use client";

import { ReactNode } from "react";

type SkillsCardProps = {
  children: ReactNode;
};

export function SkillsCard({ children }: SkillsCardProps) {
  return (
    <div
      className="
        flex scale-100 justify-center rounded border-2 border-pink-400 p-4 opacity-100 transition hover:scale-110 hover:border-pink-500 hover:opacity-100 sm:opacity-40 dark:border-teal-400 dark:hover:border-teal-600"
    >
      {children}
    </div>
  );
}
