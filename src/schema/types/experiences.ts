import { defineType } from "sanity";

export default defineType({
  title: "Experiences",
  name: "experiences",
  type: "document",
  fields: [
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },

    {
      name: "companyUrl",
      title: "Company Url",
      type: "url",
    },

    {
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
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
      of: [
        {
          type: "technology",
        },
      ],
    },

    {
      name: "startDate",
      type: "date",
      title: "Start Date",
    },

    {
      name: "endDate",
      type: "date",
      title: "End Date",
    },
  ],
});
