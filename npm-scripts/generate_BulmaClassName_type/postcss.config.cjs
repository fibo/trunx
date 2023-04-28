// This config is used by `generate_BulmaClassName_type` npm script.
//
// This current implementation has a great value added, by now it is worth to keep it as is.
//
// The ideal solution would be to create a postcss plugin starting from postcss-ts-classnames.
// ///
module.exports = {
  plugins: [
    require("postcss-ts-classnames")({
      dest: "packages/trunx/src/bulmaClassNames.ts",
      isModule: true,
      exportAsDefault: true,
    }),
  ],
}
