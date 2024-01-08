import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type WorkExperienceProps = {
  _id: string;
  companyName: string;
  companyUrl: string;
  companyLogo: string | StaticImport;
  role: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  description: any;
};
