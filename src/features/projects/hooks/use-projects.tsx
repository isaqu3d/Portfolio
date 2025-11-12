"use client";

import { Translations } from "@/types";
import { getTranslations } from "@/services/translations.service";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

export function useProjects() {
  const locale = useLocale();

  return useQuery<Translations | null>({
    queryKey: ["translations", locale],
    queryFn: async () => {
      const res = await getTranslations(locale);
      return res;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
}
