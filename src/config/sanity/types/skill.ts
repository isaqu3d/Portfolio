import { defineType } from "sanity";

export default defineType({
  title: "Skill",
  name: "skill",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      description: "Name of the technology/skill",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Logo",
      name: "logo",
      type: "image",
      description: "Logo or icon of the technology",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Category",
      name: "category",
      type: "string",
      description: "Category of the skill",
      options: {
        list: [
          { title: "Technology", value: "technology" },
          { title: "Tool", value: "tool" },
          { title: "Framework", value: "framework" },
          { title: "Language", value: "language" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "object",
      description: "Short description in multiple languages",
      fields: [
        {
          title: "Portuguese",
          name: "pt",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.required().max(200),
        },
        {
          title: "English",
          name: "en",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.required().max(200),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Proficiency Level",
      name: "proficiency",
      type: "string",
      description: "Your proficiency level with this skill",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
          { title: "Expert", value: "expert" },
        ],
      },
    },
    {
      title: "Color",
      name: "color",
      type: "string",
      description: "Brand color of the technology (hex code)",
      validation: (Rule) =>
        Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
          name: "hex color",
          invert: false,
        }),
    },
    {
      title: "Order",
      name: "order",
      type: "number",
      description: "Display order (lower numbers appear first)",
      validation: (Rule) => Rule.integer().positive(),
    },
    {
      title: "Featured",
      name: "featured",
      type: "boolean",
      description: "Show this skill prominently",
      initialValue: false,
    },
  ],
  orderings: [
    {
      title: "Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Name",
      name: "name",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
});
