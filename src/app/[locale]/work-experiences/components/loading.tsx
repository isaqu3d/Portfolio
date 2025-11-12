import { Skeleton } from "@/components/shared/skeleton";

export function ExperienceLoading() {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-10 rounded-full border border-gray-500 p-[2px]">
          <Skeleton className="h-full w-full rounded-full bg-zinc-700 dark:bg-slate-300" />
        </div>
        <div className="h-full w-[2px] grow bg-gray-500 dark:bg-slate-300" />
      </div>

      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-40 rounded bg-rose-100/10 dark:bg-slate-300" />
        <Skeleton className="h-4 w-32 rounded bg-rose-100/10 dark:bg-slate-300" />
        <Skeleton className="h-3 w-48 rounded bg-rose-100/10 dark:bg-slate-300" />

        <div className="mt-4 space-y-2">
          <Skeleton className="h-3 w-4/5 rounded bg-zinc-700 dark:bg-slate-300" />
          <Skeleton className="h-3 w-3/5 rounded bg-zinc-700 dark:bg-slate-300" />
          <Skeleton className="h-3 w-2/5 rounded bg-zinc-700 dark:bg-slate-300" />
        </div>

        <div className="mt-6">
          <Skeleton className="mb-2 h-3 w-24 rounded bg-zinc-600 dark:bg-slate-300" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3].map((i) => (
              <Skeleton
                key={i}
                className="h-6 w-20 rounded bg-zinc-700 dark:bg-slate-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
