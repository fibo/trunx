module.exports = {
  plugins: [
    require("postcss-ts-classnames")({
      dest: "src/bulma.ts",
      isModule: true,
    }),
  ],
}
