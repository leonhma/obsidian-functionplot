import { parseYaml } from "obsidian";
import { PlotOptions } from "./types";

export function parseToPlot(result: PlotOptions): string {
    return `\`\`\`functionplot
---
title: ${result.title}
xLabel: ${result.xLabel}
yLabel: ${result.yLabel}
bounds: [${result.bounds.join(", ")}]
disableZoom: ${result.disableZoom}
grid: ${result.grid}
---
${(result.functions ?? []).join("\n")}
\`\`\`
`;
}

export function parseCodeBlock(content: string): [object, string[]] {
    let header = {},
        offset = 0;
    if (/-{3}[^]*-{3}/.test(content)) {
        // header present
        const headerMatch = content.match(/-{3}([^]*?)-{3}/)[1]
        offset = headerMatch.length + 6;
        header = parseYaml(headerMatch);
    }
    const functions = (content.slice(offset))
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
    return [header, functions];
}
