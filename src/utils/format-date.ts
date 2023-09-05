import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function formatDate(date: string) {
  return capitalize(
    format(new Date(date), "MMM yyyy", {
      locale: ptBR,
    }),
  );
}
