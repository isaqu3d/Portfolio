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
  ],
});
