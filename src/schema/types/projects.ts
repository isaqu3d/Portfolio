import { defineType } from "sanity";

export default defineType({
  title: "Projects",
  name: "projects",
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
      name: "website",
      type: "url",
      title: "Website",
    },

    {
      name: "github",
      type: "url",
      title: "Github",
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
