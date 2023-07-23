import useThemeData from "@hook/useThemeData";
import { ReactNode } from "react";

type BadgeTitleProps = {
  children: ReactNode;
};
export default function BadgeTitle({ children }: BadgeTitleProps) {
  const { theme } = useThemeData();
  return (
    <>
      <span
        className={`${
          theme
            ? "bg-green-400 text-[#22543d]"
            : "bg-green-400/20 text-green-400"
        } mr-2 px-1 font-serif text-xs font-bold uppercase`}
      >
        {children}
      </span>
    </>
  );
}
