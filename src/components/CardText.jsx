import useThemeData from "../hook/useThemeData";
import { Typewriter } from "./TypeWriter";

export default function CardText() {
  const { theme } = useThemeData();
  return (
    <>
      <div
        className={`${
          theme
            ? "bg-white-100 bg-opacity-40  text-black"
            : "bg-gray-600 text-white-300"
        }  flex justify-center items-center  shadow-xl rounded-lg mb-4 p-1 text-center h-12`}
      >
        <Typewriter />
      </div>
    </>
  );
}
