import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "2024protofolio",
  title: "protoflio-project",

  projectId: "ohqfzjrv",
  dataset: "production",

  plugins: [structureTool(), visionTool()],
  basePath: "/studio",
  schema: {
    types: schemaTypes,
  },
});
