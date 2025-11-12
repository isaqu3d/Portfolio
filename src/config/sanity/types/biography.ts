import { defineType } from "sanity";

export default defineType({
  title: "Biography",
  name: "biography",
  type: "object",

  fields: [
    { type: "number", name: "year" },
    { type: "string", name: "description" },
  ],
});
