// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // Ignore patterns
  {
    ignores: ["dist", "eslint.config.js", ".prettierrc.cjs"],
  },

  // Recommended JS rules
  js.configs.recommended,

  // Prettier config
  eslintConfigPrettier,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // React recommended rules
  react.configs.flat.recommended, // This is not a plugin object, but a shareable config object
  react.configs.flat["jsx-runtime"], // Add this if you are using React 17+
  reactHooks.configs["recommended-latest"],
  reactRefresh.configs.vite,

  {
    settings: {
      react: {
        version: "detect", // automatically uses the installed React version
      },
    },
  },
];
