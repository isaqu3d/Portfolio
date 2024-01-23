import { defineType } from "sanity";

export default defineType({
  title: "Home",
  name: "home",
  type: "document",
  fields: [
    {
      name: "about_me",
      title: "About Me",
      type: "blockContent",
    },

    {
      name: "bio",
      title: "Bio",
      type: "blockContent",
    },
  ],
});
