import { StaticImageData } from "next/image";
import { TypedObject } from "sanity";

type BiographyItem = {
  _key: string;
  year: number;
  description: string;
};

type Technology = {
  _key: string;
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
