import en from "@/translations/languages/en";
import pt from "@/translations/languages/pt";

export function getLocalTranslations(locale: string) {
  if (locale === "pt") return pt;
  return en;
}
