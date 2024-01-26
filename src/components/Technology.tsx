"use client";

import useThemeData from "@hook/useThemeData";
import { ReactNode } from "react";

export function Technology({ children }: { children: ReactNode }) {
  const { theme } = useThemeData();

  return (
    <li
      className={`relative flex items-center gap-2 overflow-hidden rounded-lg border  px-3 py-2  transition hover:scale-105  ${
        theme
          ? "bg-[#dbc7ab] text-zinc-900 hover:bg-[#cfc1b0]"
          : "bg-zinc-800 text-zinc-200 hover:bg-gray-600"
      }`}
    >
      {children}

      <div
        className={`via-10% absolute right-0 top-0 h-px w-80 bg-gradient-to-l from-transparent  to-transparent ${
          theme ? "via-slate-800/30" : "via-slate-100/30"
        }`}
      />
    </li>
  );
}
