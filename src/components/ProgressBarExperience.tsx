"use client";

import useThemeData from "@/hook/useThemeData";

export function ProgressBarExperience() {
  const { theme } = useThemeData();
  return (
    <div
      className={`${theme ? "bg-pink-800" : "bg-teal-600"} h-full w-[2px]`}
    />
  );
}
