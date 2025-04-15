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
        { name: "home_summary", title: "Home Summary", type: "blockContent" },
        {
          name: "home_biography",
          title: "Home Biography",
          type: "array",
          of: [{ type: "biography" }],
        },

        { name: "experiences", title: "Experiences", type: "experiences" },
      ],
    },
  ],
});
