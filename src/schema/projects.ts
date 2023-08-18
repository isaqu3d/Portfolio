import { defineType } from "sanity";

export default defineType({
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },

    {
      name: "badge",
      title: "Badge",
      type: "number",
    },

    {
      name: "description",
      type: "string",
      title: "Description",
    },

    { name: "slug", type: "slug", title: "Slug" },

    {
      name: "content",
      type: "blockContent",
      title: "Content",
    },

    {
      name: "linkWebsite",
      type: "url",
      title: "LinkWebsite",
    },

    {
      name: "linkGithub",
      type: "url",
      title: "LinkGithub",
    },

    { name: "tech", title: "Tech", type: "string" },
    {
      name: "thumbnail",
      title: "thumbnail",
      type: "image",
    },

    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
});
