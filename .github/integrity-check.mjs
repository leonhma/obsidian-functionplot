import { readFileSync } from "fs";

// read files
let package_ = JSON.parse(readFileSync("package.json", "utf8"));
let manifest = JSON.parse(readFileSync("manifest.json", "utf8"));

switch (true) {
  case package_.dependencies.obsidian != manifest.minAppVersion:
    throw new Error(
      "obsidian version in package.json does not match minAppVersion in manifest.json"
    );
  default:
    console.log("Integrity check passed");
}
