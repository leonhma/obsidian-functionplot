import { readFileSync, writeFileSync } from "fs";

const version = process.argv[2];

// read files
let package_ = JSON.parse(readFileSync("../package.json", "utf8"));
let manifest = JSON.parse(readFileSync("../manifest.json", "utf8"));
let versions = JSON.parse(readFileSync("../versions.json", "utf8"));

const minAppVersion = manifest.minAppVersion;

// index minAppVersion
versions[version] = minAppVersion;

// update versions
package_.version = version;
manifest.version = version;

writeFileSync("package.json", JSON.stringify(package_, null, "\t"));
writeFileSync("manifest.json", JSON.stringify(manifest, null, "\t"));
writeFileSync("versions.json", JSON.stringify(versions, null, "\t"));
