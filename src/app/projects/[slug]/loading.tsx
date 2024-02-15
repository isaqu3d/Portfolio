"use client";

import { Skeleton } from "@/components/skeleton";
import useThemeData from "@/hook/useThemeData";

export default function ProjectLoading() {
  const { theme } = useThemeData();

  return (
    <div
      className={`${
        theme ? "bg-slate-200" : "bg-gray-600 "
      } w-96 space-y-5 rounded-2xl p-4`}
    >
      <Skeleton
        className={`${theme ? "bg-slate-300" : "bg-zinc-700 "} h-24 rounded-lg`}
      />
      <div className="space-y-3">
        <Skeleton
          className={`${theme ? "bg-slate-300" : "bg-gray-700"} h-3 rounded-lg`}
        />
        <Skeleton
          className={`${theme ? "bg-slate-300" : "bg-gray-700"} h-3 rounded-lg`}
        />
        <Skeleton
          className={`${theme ? "bg-slate-300" : "bg-gray-700"} h-3 rounded-lg`}
        />
        <Skeleton
          className={`${theme ? "bg-slate-300" : "bg-gray-600"} h-3 rounded-lg`}
        />
      </div>
    </div>
  );
}
