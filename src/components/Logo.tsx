import Link from "next/link";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function Logo() {
  return (
    <Link href="/">
      <span className="group inline-flex h-8 items-center p-3 font-sansMPlus text-lg font-semibold tracking-tighter text-white-100 dark:text-gray-600">
        <RiCodeSSlashLine className="transition-all group-hover:rotate-[30deg]" />
        <h1>Isaque de Sousa</h1>
      </span>
    </Link>
  );
}
