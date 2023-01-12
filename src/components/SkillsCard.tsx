import { ReactNode } from "react";
import useThemeData from "../hook/useThemeData";

type SkillsCardProps = {
  children: ReactNode;

  onClick?: () => void;
};
export function SkillsCard({ children, onClick }: SkillsCardProps) {
  const { theme } = useThemeData();

  return (
    <div
      className={`${
        theme
          ? "border-2 hover:border-teal-400 border-teal-200"
          : "border-2 hover:border-pink-500 border-pink-400"
      } flex justify-center px-4 py-2 sm:py-0 opacity-100 sm:opacity-40 rounded hover:opacity-100 border-2 hover:scale-105 scale-100"
      
   `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}