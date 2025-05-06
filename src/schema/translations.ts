import { defineType } from "sanity";

export default defineType({
  name: "translations",
  title: "Translations",
  type: "document",
  fields: [
    {
      name: "locale",
      title: "Locale",
      type: "string",
      options: {
        list: [
          { title: "Português", value: "pt" },
          { title: "English", value: "en" },
          { title: "Español", value: "es" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "messages",
      title: "Messages",
      type: "object",
      fields: [
        { name: "home", title: "Home", type: "home" },

        {
          name: "projects",
          title: "Projects",
          type: "array",
          of: [{ type: "projects" }],
        },

        {
          name: "experiences",
          title: "Experiences",
          type: "array",
          of: [{ type: "experiences" }],
        },
      ],
    },
  ],
});
