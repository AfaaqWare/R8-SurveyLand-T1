module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "boundaries", "import", "unused-imports"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],

  rules: {
    /* =============================
       1️⃣ IMPORT DISCIPLINE
    ============================== */
    "import/no-relative-parent-imports": "error",
    "unused-imports/no-unused-imports": "error",

    /* =============================
       2️⃣ FILE NAMING
    ============================== */
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        "newlines-between": "always",
        alphabetize: { order: "asc" },
      },
    ],

    /* =============================
       3️⃣ ARCHITECTURE BOUNDARIES
    ============================== */
    "boundaries/element-types": [
      "error",
      {
        default: "disallow",
        rules: [
          {
            from: "components",
            allow: ["components", "lib", "utils"],
          },
          {
            from: "modules",
            allow: ["components", "services", "hooks", "utils", "core", "lib"],
          },
          {
            from: "services",
            allow: ["config", "utils", "core"],
          },
          {
            from: "core",
            allow: ["lib"],
          },
        ],
      },
    ],
  },

  settings: {
    "boundaries/elements": [
      { type: "components", pattern: "src/components/*" },
      { type: "modules", pattern: "src/modules/*" },
      { type: "services", pattern: "src/services/*" },
      { type: "core", pattern: "src/core/*" },
      { type: "utils", pattern: "src/utils/*" },
      { type: "lib", pattern: "src/lib/*" },
    ],
  },
};
