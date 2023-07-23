import { Typewriter } from "@components/TypeWriter";
import useThemeData from "@hook/useThemeData";

export function CardTypeWriter() {
  const { theme } = useThemeData();
  return (
    <>
      <div
        className={`${
          theme
            ? "bg-white-100 bg-opacity-40  text-black"
            : "bg-gray-600 text-white-300"
        }  mb-4 flex h-12  items-center justify-center rounded-lg p-1 text-center shadow-xl`}
      >
        <Typewriter />
      </div>
    </>
  );
}
