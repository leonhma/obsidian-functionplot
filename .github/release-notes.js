const { readFileSync, writeFileSync, existsSync } = require("fs");

const [name, body] = process.argv.slice(2);

let releaseNotes = "";

if (existsSync("./release-notes.md")) {
  releaseNotes = readFileSync("./release-notes.md", "utf8");
}

releaseNotes = `## ${name}\n\n${body}\n\n${releaseNotes}`;

writeFileSync("./release-notes.md", releaseNotes);
