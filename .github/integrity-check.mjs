import { readFileSync } from 'fs'

// read files
let package_ = JSON.parse(readFileSync("package.json", "utf8"));
let manifest = JSON.parse(readFileSync("manifest.json", "utf8"));

if (package_.dependencies.obsidian != manifest.minAppVersion) {
    console.log("ERROR: obsidian version mismatch");
    process.exit(1);
}
