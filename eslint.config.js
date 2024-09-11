import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    rules: {
      "unused-imports/no-unused-imports": "warn",
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
];
