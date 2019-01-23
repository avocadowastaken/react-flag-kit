"use strict";

const { join } = require("path");
const { remove, copy, list } = require("fs-jetpack");
const { execSync } = require("child_process");

const typingsDir = join(__dirname, "..", "typings");
const typingsSrcDir = join(typingsDir, "src");

remove(typingsDir);
execSync("yarn tsc --project tsconfig.typings.json", { stdio: "inherit" });
list(typingsSrcDir).forEach(x => {
  copy(join(typingsSrcDir, x), join(typingsDir, x));
});
remove(typingsSrcDir);
