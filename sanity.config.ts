import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/schema";

export default defineConfig({
  basePath: "/studio",
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,

  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool(), visionTool()],
});
