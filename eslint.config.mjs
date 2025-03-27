import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  { ignores: ["dist/**"] },
  { files: ["**/*.{js,cjs,mjs,ts}"] },
  {
    files: ["**/*.{js,cjs,mjs,ts}"],
    languageOptions: { globals: globals.node },
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,cjs,mjs}"],
    rules: {
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_[a-zA-Z0-9]*$",
          varsIgnorePattern: "^_[a-zA-Z0-9]*$",
        },
      ],
    },
  },
  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_[a-zA-Z0-9]*$",
          varsIgnorePattern: "^_[a-zA-Z0-9]*$",
        },
      ],
    },
  },
  ...tseslint.configs.recommended,
  prettierConfig,
]);
