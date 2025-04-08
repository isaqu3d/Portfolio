import { defineType } from "sanity";

export default defineType({
  title: "Home",
  name: "home",
  type: "document",
  fields: [
    {
      name: "summary",
      title: "Summary",
      type: "blockContent",
    },

    {
      title: "Biography",
      name: "biography",
      type: "array",
      of: [
        {
          type: "biography",
        },
      ],
    },
  ],
});
