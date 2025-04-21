import { cn } from "@/utils/cn";
import Link from "next/link";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/">
      <span
        className={cn(
          "group inline-flex h-8 items-center p-3 font-sans text-lg font-semibold tracking-tighter text-white-100 dark:text-gray-600",
          className,
        )}
      >
        <RiCodeSSlashLine className="transition-all group-hover:rotate-[30deg]" />
        <h1>Isaque de Sousa</h1>
      </span>
    </Link>
  );
}
