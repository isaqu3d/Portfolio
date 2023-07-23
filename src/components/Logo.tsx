import useThemeData from "@hook/useThemeData";
import Link from "next/link";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function Logo() {
  const { theme } = useThemeData();
  return (
    <Link href="/">
      <a>
        <div
          className={`${
            theme ? " text-gray-600 " : "text-white-100"
          } group inline-flex h-8 items-center p-3 font-sans text-lg font-semibold leading-5 tracking-tighter`}
        >
          <RiCodeSSlashLine className="transition-all group-hover:rotate-[30deg]" />
          <h2 className="">Isaque de Sousa</h2>
        </div>
      </a>
    </Link>
  );
}
