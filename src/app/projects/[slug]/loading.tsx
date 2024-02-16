"use client";

import { Skeleton } from "@/components/Skeleton";
import useThemeData from "@/hook/useThemeData";

export default function ProjectLoading() {
  const { theme } = useThemeData();

  return (
    <div
      className="isolate
   overflow-hidden
   shadow-xl shadow-black/5
   before:border-t before:border-rose-100/10"
    >
      <div
        className={`${
          theme ? "bg-slate-200" : "bg-zinc-800 "
        } w-96 space-y-5 rounded-2xl p-4`}
      >
        <Skeleton
          className={`${
            theme ? "bg-slate-300" : "bg-zinc-700"
          } h-24 rounded-lg`}
        />
        <div className="space-y-3">
          <Skeleton
            className={`${
              theme ? "bg-slate-300" : "bg-rose-100/10"
            } h-3 w-3/5 rounded-lg`}
          />
          <Skeleton
            className={`${
              theme ? "bg-slate-300" : "bg-rose-100/20"
            } h-3 w-4/5 rounded-lg`}
          />
          <Skeleton
            className={`${
              theme ? "bg-slate-300" : "bg-rose-100/20"
            } h-3 w-2/5 rounded-lg`}
          />
          <Skeleton
            className={`${
              theme ? "bg-slate-300" : " bg-rose-100/10"
            } h-3 w-3/5 rounded-lg`}
          />
        </div>
      </div>
    </div>
  );
}
