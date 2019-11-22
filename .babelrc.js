"use strict";

module.exports = {
  presets: ["@babel/react", "@babel/typescript"],
  plugins: [
    ["@babel/plugin-transform-runtime", { useESModules: false }],
    ["@babel/plugin-proposal-optional-chaining", { loose: true }],
    ["@babel/plugin-proposal-nullish-coalescing-operator", { loose: true }],
  ],
};
