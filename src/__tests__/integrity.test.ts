import { readFileSync } from "fs";
import type { PluginManifest } from "obsidian";

test("minAppVersion and obsidian version in package.json match", () => {
  // read files
  const package_ = JSON.parse(readFileSync("package.json", "utf8")) as {
    dependencies: { obsidian: string };
  };
  const manifest = JSON.parse(
    readFileSync("manifest.json", "utf8")
  ) as PluginManifest;
  expect(manifest.minAppVersion).toBe(package_.dependencies.obsidian);
});
