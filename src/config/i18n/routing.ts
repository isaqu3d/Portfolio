import { languages } from "@/config/constants/languages";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: languages,

  // Used when no locale matches
  defaultLocale: "pt",
});
