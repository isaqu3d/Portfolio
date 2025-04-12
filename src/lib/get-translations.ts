import client from "./sanityClient";

export async function getTranslations(locale: string) {
  const query = `
    *[_type == "translations" && locale == $locale][0] {
      locale,
      messages
    }
  `;

  try {
    const result = await client.fetch(query, { locale });
    return result?.messages ?? null;
  } catch (err) {
    console.error("Erro ao buscar traduções:", err);
    return null;
  }
}
