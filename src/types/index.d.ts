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
  positionLevel?: "junior" | "midLevel" | "senior" | "lead";
  startDate: string;
  endDate: string;
  imageTech: StaticImageData;
  technologies: Technology[];
  description: TypedObject | TypedObject[];
};

type Projects = {
  _key: string;
  name: string;
  description: string;
  slug: { current: string; _type: string };
  thumbnail: StaticImageData;
  content: TypedObject[];
  github: string;
  website: string;
  badge: number;
  image: StaticImageData[];
  technologies: Technology[];
};

type Home = {
  summary: PortableTextBlock[];
  biography: BiographyItem[];
};

type SkillCategory = "technology" | "tool" | "framework" | "language";
type SkillProficiency = "beginner" | "intermediate" | "advanced" | "expert";

type Skill = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  name: string;
  slug: {
    current: string;
    _type: string;
  };
  logo: StaticImageData;
  category: SkillCategory;
  description: {
    pt: string;
    en: string;
  };
  proficiency?: SkillProficiency;
  color?: string;
  order?: number;
  featured?: boolean;
};

type Translations = {
  home?: Home;
  experiences?: Experiences[];
  projects?: Projects[];
  skills?: Skill[];
};
