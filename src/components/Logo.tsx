import useThemeData from "@/hook/useThemeData";
import Link from "next/link";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function Logo() {
  const { theme } = useThemeData();
  return (
    <Link href="/">
      <span
        className={`${
          theme ? " text-gray-600 " : "text-white-100"
        } font-sansMPlus group inline-flex h-8 items-center p-3 text-lg font-semibold tracking-tighter`}
      >
        <RiCodeSSlashLine className="transition-all group-hover:rotate-[30deg]" />
        <h1>Isaque de Sousa</h1>
      </span>
    </Link>
  );
}
