const { readFileSync, writeFileSync, existsSync } = require("fs");

const [name, body] = process.argv.slice(2);

let changelog = "";

if (existsSync("./CHANGELOG.md")) {
  changelog = readFileSync("./CHANGELOG.md", "utf8");
}

changelog = `## ${name}\n\n${body}\n\n${changelog}`;

writeFileSync("./CHANGELOG.md", changelog);
