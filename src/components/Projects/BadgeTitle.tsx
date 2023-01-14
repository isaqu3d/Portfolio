import { ReactNode } from "react";
import useThemeData from "../../hook/useThemeData";
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
        } px-1 mr-2 text-xs font-bold font-serif uppercase`}
      >
        {children}
      </span>
    </>
  );
}
