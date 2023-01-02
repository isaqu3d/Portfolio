import useThemeData from "../hook/useThemeData";

export function SkillsCard({ children }) {
  const { theme } = useThemeData();

  return (
    <div
      className={`${
        theme
          ? "border-2 hover:border-teal-400 border-teal-200"
          : "border-2 hover:border-pink-500 border-pink-400"
      } flex justify-center px-4 py-2 sm:py-0 opacity-100 sm:opacity-40 rounded hover:opacity-100 border-2 hover:scale-105 scale-100"
      
   `}
    >
      {children}
    </div>
  );
}
