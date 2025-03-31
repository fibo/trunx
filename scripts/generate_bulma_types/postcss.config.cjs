module.exports = {
  plugins: [
    require("postcss-ts-classnames")({
      dest: "src/Bulma.ts",
      isModule: true,
    }),
  ],
}
