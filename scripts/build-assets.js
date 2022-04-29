import { spawnSync } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_DIR = fileURLToPath(new URL("..", import.meta.url));
const ASSETS_DIR = join(ROOT_DIR, "assets");
const FLAGKIT_DIR = join(ROOT_DIR, "FlagKit");
const FLAGKIT_ASSETS_DIR = join(FLAGKIT_DIR, "Assets", "SVG");

const FLAGKIT_REPO = "https://github.com/madebybowtie/FlagKit.git";
const FLAGKIT_VERSION = "v2.3.0";

/**
 * @param {string} command
 * @param {string[]} args
 */
function exec(command, ...args) {
  return spawnSync(command, args, {
    cwd: ROOT_DIR,
    encoding: "utf8",
    stdio: "inherit",
  });
}

exec("npx", "--yes", "rimraf", FLAGKIT_DIR);
exec(
  "git",
  "clone",
  "--depth",
  "1",
  "--branch",
  FLAGKIT_VERSION,
  FLAGKIT_REPO,
  FLAGKIT_DIR
);
exec(
  "npx",
  "--yes",
  "svgo",
  "--folder",
  FLAGKIT_ASSETS_DIR,
  "--output",
  ASSETS_DIR,
  "--multipass"
);
exec("npx", "--yes", "rimraf", FLAGKIT_DIR);
