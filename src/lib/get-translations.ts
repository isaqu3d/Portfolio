import { StaticImageData } from "next/image";
import { PortableTextBlock, TypedObject } from "sanity";
import client from "./sanityClient";

type BiographyItem = {
  _key: string;
  year: number;
  description: string;
};

type Technology = {
  _id: string;
  name: string & string[];
  image: StaticImageData[];
};

type Experiences = {
  _key: string;
  companyName: string;
  companyUrl: string;
  companyLogo: StaticImageData | StaticImageData[];
  role: string;
  startDate: string;
  endDate: string;
  imageTech: StaticImageData;
  technologies: Technology[];
  description: TypedObject | TypedObject[];
};

type Translations = {
  home_summary?: PortableTextBlock[];
  home_biography?: BiographyItem[];
  experiences?: Experiences;
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
