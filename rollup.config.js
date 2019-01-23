"use strict";

const jsonPlugin = require("rollup-plugin-json");
const babelPlugin = require("rollup-plugin-babel");
const nodeResolvePlugin = require("rollup-plugin-node-resolve");
const { sizeSnapshot } = require("rollup-plugin-size-snapshot");

const pkg = require("./package");

module.exports = [
  createConfig("es", pkg.module),
  createConfig("cjs", pkg.main),
  createConfig("es2015", pkg.es2015),
];

function createConfig(target, file) {
  const externals = Object.keys(pkg.peerDependencies);

  return {
    input: "./src/index.ts",

    output: {
      file,
      format: target.startsWith("es") ? "es" : target,
    },

    external: id => externals.includes(id),

    plugins: [
      jsonPlugin(),

      nodeResolvePlugin({ extensions: [".ts", ".tsx"] }),

      babelPlugin({
        babelrc: false,
        runtimeHelpers: true,
        extensions: [".ts", ".tsx"],
        presets: [
          [
            "@babel/preset-env",
            {
              loose: true,
              modules: false,
              forceAllTransforms: target !== "es2015",
              targets: { esmodules: target === "es2015" },
            },
          ],
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
      }),

      sizeSnapshot({ matchSnapshot: process.env.CI === "true" }),
    ],
  };
}
