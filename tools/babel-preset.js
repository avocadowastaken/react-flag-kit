module.exports = {
  presets: [
    [
      "env",
      {
        modules: process.env.BABEL_ENV === "cjs" ? "commonjs" : false,
        targets: {
          uglify: true,
        },
      },
    ],

    "react",
  ],

  plugins: ["transform-object-rest-spread"],
};
