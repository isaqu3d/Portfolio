"use client";

import useThemeData from "@hook/useThemeData";

export function ProgressBarExperience() {
  const { theme } = useThemeData();
  return (
    <div
      className={`${theme ? "bg-teal-600" : "bg-pink-800"} h-full w-[2px] `}
    />
  );
}
