import { PlotOptions } from "./types";

export function parseToPlot(result: PlotOptions): string {
    return `\`\`\`functionplot
---
title: ${result.title}
xLabel: ${result.xLabel}
yLabel: ${result.yLabel}
bounds: [${result.bounds}]
disableZoom: ${result.disableZoom}
grid: ${result.grid}
---
${(result.functions ?? []).join('\n')}
\`\`\`
`;
}
