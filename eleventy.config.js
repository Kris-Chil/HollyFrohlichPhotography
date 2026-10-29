import { createRequire } from "module";
const require = createRequire(import.meta.url);
const ejsPlugin = require("@11ty/eleventy-plugin-ejs");

export default function(eleventyCc) {
  // Register the EJS parsing engine
  eleventyCc.addPlugin(ejsPlugin);

  // Directly pass through public files right to the root output folder
  eleventyCc.addPassthroughCopy({"public": "/"});

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
