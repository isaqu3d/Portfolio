"use client";

import { ReactNode } from "react";

export function Technology({ children }: { children: ReactNode }) {
  return (
    <li className="relative flex items-center gap-2 overflow-hidden rounded-lg bg-zinc-800 p-2 text-zinc-200 dark:bg-gray-200 dark:text-zinc-900 dark:hover:bg-[#ececec] ">
      {children}
      <div className="absolute right-0 top-0 h-px w-80 bg-gradient-to-l from-transparent via-slate-100/30  via-10% to-transparent dark:via-slate-800/30" />
    </li>
  );
}
