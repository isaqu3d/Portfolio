import en from "@/translations/en.json";
import pt from "@/translations/pt.json";

export function getLocalTranslations(locale: string) {
  if (locale === "pt") return pt;
  return en;
}
