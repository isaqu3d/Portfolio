"use client";

import clsx from "clsx";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleChange = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          disabled={isPending}
          onClick={() => handleChange(code)}
          className={clsx(
            "rounded px-2 py-1 transition-all hover:underline",
            locale === code ? "font-bold text-teal-500" : "text-gray-400",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
