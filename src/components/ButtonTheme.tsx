import { FiSun } from "react-icons/fi";
import { RiMoonFill } from "react-icons/ri";
type ButtonThemeProps = {
  theme: string;
  changeTheme: () => void;
};

export function ButtonTheme(props: ButtonThemeProps) {
  return props.theme === "dark" ? (
    <div
      onClick={props.changeTheme}
      className="flex justify-center items-center bg-purple-700 hover:bg-purple-800 text-white-100 p-3 rounded-lg cursor-pointer animate-ButtonThemeFall"
    >
      <button>
        <RiMoonFill />
      </button>
    </div>
  ) : (
    <div
      onClick={props.changeTheme}
      className="flex justify-center items-center bg-yellow-300 hover:bg-yellow-500 text-black p-3 rounded-lg cursor-pointer animate-ButtonThemeFall2"
    >
      <button>
        <FiSun />
      </button>
    </div>
  );
}
