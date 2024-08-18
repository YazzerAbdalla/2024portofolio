import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "2024protofolio",
  title: "protoflio-project",

  projectId: "ohqfzjrv",
  dataset: "production",

  plugins: [structureTool()],
  basePath: "/studio",
  schema: {
    types: schemaTypes,
  },
});
