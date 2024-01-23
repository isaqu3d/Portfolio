import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import { TypedObject } from "sanity";

type Technology = {
  _id: string;
  name: string & string[];
  image: StaticImageData[];
};

export type WorkExperienceProps = {
  _id: string;
  companyName: string;
  companyUrl: string;
  companyLogo: string | StaticImport;
  role: string;
  startDate: string;
  endDate: string;
  imageTech: StaticImageData;
  technologies: Technology[];
  description: TypedObject | TypedObject[];
};
