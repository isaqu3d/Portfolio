"use client";

import { Skeleton } from "@/components/Skeleton";

export default function ProjectLoading() {
  return (
    <div
      className="isolate
   overflow-hidden
   shadow-xl shadow-black/5
   before:border-t before:border-rose-100/10"
    >
      <div className="w-96 space-y-5 rounded-2xl bg-zinc-800 p-4 dark:bg-slate-200">
        <Skeleton className="h-24 rounded-lg bg-zinc-700 dark:bg-slate-300" />
        <div className="space-y-3">
          <Skeleton className="h-3 w-3/5 rounded-lg bg-rose-100/10 dark:bg-slate-300" />
          <Skeleton className="h-3 w-3/5 rounded-lg bg-rose-100/10 dark:bg-slate-300" />
          <Skeleton className="h-3 w-3/5 rounded-lg bg-rose-100/10 dark:bg-slate-300" />
          <Skeleton className="h-3 w-3/5 rounded-lg bg-rose-100/10 dark:bg-slate-300" />
        </div>
      </div>
    </div>
  );
}
