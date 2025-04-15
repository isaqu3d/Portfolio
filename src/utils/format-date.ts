import { format } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";

const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function formatDate(date: string, locale: string) {
  let selectedLocale: Locale;

  if (locale === "pt") {
    selectedLocale = ptBR;
  } else if (locale === "en") {
    selectedLocale = enUS;
  } else {
    selectedLocale = enUS;
  }

  return capitalize(
    format(new Date(date), "MMM yyyy", {
      locale: selectedLocale,
    }),
  );
}
