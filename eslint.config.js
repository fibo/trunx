import typeScriptParser from "@typescript-eslint/parser"
import stylistic from "@stylistic/eslint-plugin"

const rules ={
  stylistic: {
    "@stylistic/array-bracket-spacing": ["error", "never"],
    "@stylistic/arrow-spacing": ["error", { after: true, before: true }],
    "@stylistic/block-spacing": ["error", "always"],
    "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "@stylistic/comma-spacing": ["error", { after: true, before: false }],
    "@stylistic/dot-location": ["error", "property"],
    "@stylistic/function-call-argument-newline": ["error", "consistent"],
    "@stylistic/function-call-spacing": ["error", "never"],
    "@stylistic/generator-star-spacing": ["error", { after: true, before: false }],
    "@stylistic/indent": ["error", 2],
    "@stylistic/key-spacing": ["error", { afterColon: true, beforeColon: false, mode: "strict" }],
    "@stylistic/keyword-spacing": ["error", { after: true, before: true }],
    "@stylistic/linebreak-style": ["error", "unix"],
    "@stylistic/member-delimiter-style": ["error", {
      multiline: { "delimiter": "none" },
      singleline: { "delimiter": "semi", "requireLast": false }
    }],
    "@stylistic/no-mixed-spaces-and-tabs": "error",
    "@stylistic/no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
    "@stylistic/no-tabs": "error",
    "@stylistic/no-trailing-spaces": "error",
    "@stylistic/no-whitespace-before-property": "error",
    "@stylistic/object-curly-spacing": ["error", "always"],
    "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
    "@stylistic/semi": ["error", "never"],
    "@stylistic/space-before-blocks": ["error", "always"],
    "@stylistic/space-before-function-paren": ["error", {
      anonymous: "always",
      asyncArrow: "always",
      named: "never"
    }],
  },

  stylisticJsx: {
    "@stylistic/jsx-closing-bracket-location": ["error"],
    "@stylistic/jsx-curly-spacing": ["error", "never"],
    "@stylistic/jsx-equals-spacing": ["error", "never"],
    "@stylistic/jsx-props-no-multi-spaces": "error",
    "@stylistic/jsx-quotes": ["error", "prefer-double"],
    "@stylistic/jsx-self-closing-comp": ["error", { component: true, html: true }],
    "@stylistic/jsx-tag-spacing": ["error", {
      afterOpening: "never",
      beforeSelfClosing: "always",
      closingSlash: "never"
    }],
  }
}

export default [
  {
    ignores: ["dist"]
  },

  // JavaScript files
  {
    files: ["eslint.config.js", "**/*.js"],
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      ...rules.stylistic,
    }
  },

  // All TypeScript files.
  {
    files: ["**/*.{ts,tsx}"],
    ignores: [
      "tests/components_tsdoc_examples.tsx"
    ],
    languageOptions: { parser: typeScriptParser },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      ...rules.stylistic,
      ...rules.stylisticJsx,
    },
  },

  // Disable indent rule for TSDoc examples: some of the extract snippets are not indented.
  {
    files: ["tests/components_tsdoc_examples.tsx"],
    ignores: [
    ],
    languageOptions: { parser: typeScriptParser },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      ...rules.stylistic,
      ...rules.stylisticJsx,
      "@stylistic/indent": "off"
    },
  },
]
