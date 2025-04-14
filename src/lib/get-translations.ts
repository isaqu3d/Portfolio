import { PortableTextBlock } from "sanity";
import client from "./sanityClient";

type BiographyItem = {
  _key: string;
  year: number;
  description: string;
};

type Translations = {
  home_summary?: PortableTextBlock[];
  home_biography?: BiographyItem[];
};

export async function getTranslations(
  locale: string,
): Promise<Translations | null> {
  const query = `
    *[_type == "translations" && locale == $locale][0] {
      locale,
      messages {
        home_summary,
        home_biography,
        experiences
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
