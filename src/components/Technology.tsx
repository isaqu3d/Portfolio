"use client";

import { ReactNode } from "react";

export function Technology({ children }: { children: ReactNode }) {
  return (
    <li className="relative flex items-center gap-2 overflow-hidden rounded-lg bg-zinc-800 px-3  py-2 text-zinc-200 transition hover:scale-105 hover:bg-gray-600 dark:bg-gray-200 dark:text-zinc-900 dark:hover:bg-[#ececec] ">
      {children}

      <div className="via-10% absolute right-0 top-0 h-px w-80 bg-gradient-to-l from-transparent  via-slate-100/30 to-transparent dark:via-slate-800/30" />
    </li>
  );
}
