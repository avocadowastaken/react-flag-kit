const path = require("path");
const fse = require("fs-extra");
const { execSync } = require("child_process");

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: "inherit",
    env: Object.assign({}, process.env, extraEnv),
  });

console.log("\nBuilding ES modules...");

exec("babel src/modules -d es --ignore __tests__", {
  BABEL_ENV: "es",
});

console.log("\nBuilding CommonJS modules...");

exec("babel src/modules -d lib --ignore __tests__", {
  BABEL_ENV: "cjs",
});

console.log("\nCopying flag assets...");

copy(path.join("src", "assets"), "assets");

function copy(from, to) {
  console.log(from, "->", to);
  fse.copySync(path.join("src", "assets"), "assets");
}
