import useThemeData from "../hook/useThemeData";

type ButtonProps = {
  children: string;
  className?: string;
};

export function Button({ children, className }: ButtonProps) {
  const { theme } = useThemeData();
  return (
    <button
      className={`${
        theme
          ? " bg-teal-400 hover:bg-teal-600 text-white-100 "
          : " bg-teal-200 hover:bg-teal-400 text-black"
      } ${className}transition-colors  font-medium p-2 px-4 rounded-md`}
    >
      {children}
    </button>
  );
}
