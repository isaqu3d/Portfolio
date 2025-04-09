"use client";

import TypewriterComponent from "typewriter-effect";

export function Typewriter() {
  return (
    <div className="mb-4 flex h-12 items-center justify-center rounded-lg bg-gray-600  bg-opacity-40 p-1 text-center text-white-100 shadow-md dark:bg-white-100 dark:text-black">
      <TypewriterComponent
        options={{
          strings: [
            "< Olá, Seja bem-vindo ao meu portfolio",
            "< Entusiasta da tecnologia",
            "< Sou Desenvolvedor Web e Mobile",
            "< Front-end",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 15,
          delay: 45,
          cursor: " />",
        }}
      />
    </div>
  );
}
