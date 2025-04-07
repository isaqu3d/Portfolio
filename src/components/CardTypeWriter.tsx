"use client";

import { Typewriter } from "./TypeWriter";
export function CardTypeWriter() {
  return (
    <>
      <div className="mb-4 flex h-12 items-center justify-center rounded-lg bg-gray-600  bg-opacity-40 p-1 text-center text-white-100 shadow-md dark:bg-white-100 dark:text-black">
        <Typewriter />
      </div>
    </>
  );
}
