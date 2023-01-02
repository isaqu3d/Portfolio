import Link from "next/link";
import { RiCodeSSlashLine } from "react-icons/ri";
import useThemeData from "../hook/useThemeData";

export default function Logo() {
  const { theme } = useThemeData();
  return (
    <Link href="/">
      <a>
        <div
          className={`${
            theme ? " text-gray-600 " : "text-white-100"
          } inline-flex text-lg font-sans font-semibold items-center h-8 leading-5 p-3 group tracking-tighter`}
        >
          <RiCodeSSlashLine className="group-hover:rotate-[30deg] transition-all" />
          <h2 className="">Isaque de Sousa</h2>
        </div>
      </a>
    </Link>
  );
}
