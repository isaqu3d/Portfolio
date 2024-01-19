import { defineType } from "sanity";

export default defineType({
  title: "Technology",
  name: "technology",
  type: "object",

  fields: [
    { type: "image", name: "image" },
    { type: "string", name: "name" },
  ],
});
