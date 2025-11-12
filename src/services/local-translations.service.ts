import en from "@/config/i18n/locales/en";
import pt from "@/config/i18n/locales/pt";

export function getLocalTranslations(locale: string) {
  if (locale === "pt") return pt;
  return en;
}
