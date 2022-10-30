import { readFileSync } from "fs";

test("minAppVersion and obsidian version in package.json match", () => {
    // read files
    let package_ = JSON.parse(readFileSync("package.json", "utf8"));
    let manifest = JSON.parse(readFileSync("manifest.json", "utf8"));
    expect(manifest.minAppVersion).toBe(package_.dependencies.obsidian);
});
