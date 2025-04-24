"use client";

import { getLocalTranslations } from "@/lib/get-local-translations";
import { useLocale, useTranslations } from "next-intl";
import TypewriterComponent from "typewriter-effect";

export function Typewriter() {
  const locale = useLocale();
  const translations = getLocalTranslations(locale);
  const navbar = translations;
  const t = useTranslations();

  return (
    <div className="mb-4 flex h-12 items-center justify-center rounded-lg bg-gray-600  bg-opacity-40 p-1 text-center text-white-100 shadow-md dark:bg-white-100 dark:text-black">
      <TypewriterComponent
        options={{
          strings: [
            t("typeWriter.welcomeMessage"),
            t("typeWriter.techEnthusiast"),
            t("typeWriter.developer"),
            t("typeWriter.frontend"),
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
