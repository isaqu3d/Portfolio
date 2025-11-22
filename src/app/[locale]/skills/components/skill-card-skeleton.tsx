"use client";

import { motion } from "framer-motion";

interface SkillCardSkeletonProps {
  index: number;
}

export function SkillCardSkeleton({ index }: SkillCardSkeletonProps) {
  return (
    <motion.div
      className="relative flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-900 p-6 shadow-sm dark:border-zinc-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      {/* Logo Skeleton */}
      <div className="relative h-16 w-16 animate-pulse rounded-xl bg-zinc-700" />

      {/* Name Skeleton */}
      <div className="h-4 w-20 animate-pulse rounded-full bg-zinc-700" />

      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-zinc-700/20 to-transparent" />
    </motion.div>
  );
}

export function SkillsSectionSkeleton({
  title,
  count = 8,
}: {
  title: string;
  count?: number;
}) {
  return (
    <section className="mb-12">
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          {title}
        </h2>
      </div>

      {/* Grid of Skeletons */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {Array.from({ length: count }).map((_, index) => (
          <SkillCardSkeleton key={index} index={index} />
        ))}
      </div>
    </section>
  );
}
