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
          ? "border-2 border-teal-200 hover:border-teal-400"
          : "border-2 border-pink-400 hover:border-pink-500"
      } scale-100" flex justify-center rounded border-2 px-4 py-2 opacity-100 hover:scale-105 hover:opacity-100 sm:py-0 sm:opacity-40
      
   `}
    >
      {children}
    </div>
  );
}
