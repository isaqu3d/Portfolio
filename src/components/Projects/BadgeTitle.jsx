import useThemeData from "../../hook/useThemeData";

export default function BadgeTitle({ children }) {
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
