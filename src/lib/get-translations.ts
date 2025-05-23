import { Translations } from "@/@types/types";
import client from "./sanityClient";

export async function getTranslations(
  locale: string,
): Promise<Translations | null> {
  const query = `
    *[_type == "translations" && locale == $locale][0] {
      locale,
      messages {
        home {
          summary,
          biography
        },
        experiences,
        projects
      }
    }
  `;

  try {
    const result = await client.fetch(query, { locale });

    if (!result || !result.messages) {
      return null;
    }
    return result.messages as Translations;
  } catch (err) {
    console.error(err);
    return null;
  }
}
