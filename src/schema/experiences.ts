import { defineType } from "sanity";

export default defineType({
  title: "Experiences",
  name: "experiences",
  type: "document",
  fields: [
    {
      name: "companyName",
      title: "CompanyName",
      type: "string",
    },

    {
      name: "companyUrl",
      title: "CompanyUrl",
      type: "url",
    },

    {
      name: "companyLogo",
      title: "CompanyLogo",
      type: "url",
    },

    {
      name: "role",
      title: "Role",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },

    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "startDate",
      type: "date",
      title: "StartDate",
    },

    {
      name: "endDate",
      type: "date",
      title: "EndDate",
    },
  ],
});
