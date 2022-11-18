import { Editor, parseYaml } from "obsidian";
import type ObsidianFunctionPlot from "../main";
import { PlotOptions } from "./types";
import { type FunctionPlotOptions } from "function-plot/dist/types";
import createStylingPlugin from "../plugins/styling";
import functionPlot, { Chart } from "function-plot";

/**
 * Insert the text as a new paragraph (newline before and after), and place the active cursor below.
 * @param editor The editor element
 * @param text The text to place
 */
export function insertParagraphAtCursor(
  plugin: ObsidianFunctionPlot,
  editor: Editor,
  text: string
) {
  // TODO broken
  text = "\n" + text.trim() + "\n\n";
  editor.setLine(editor.getCursor().line, text);
}

/**
 * Insert an interactive plot at the current cursor position.
 * @param plugin A reference to the plugin
 * @param editor A reference to the active editor
 * @param options The options for the plot
 */
export function renderPlotAsInteractive(
  plugin: ObsidianFunctionPlot,
  editor: Editor,
  options: PlotOptions
) {
  const text = `\`\`\`functionplot
---
title: ${options.title}
xLabel: ${options.xLabel}
yLabel: ${options.yLabel}
bounds: [${options.bounds.join(",")}]
disableZoom: ${options.disableZoom}
grid: ${options.grid}
---
${(options.functions ?? []).join("\n")}
\`\`\``;
  insertParagraphAtCursor(plugin, editor, text);
}

/**
 * Create a plot in the specified `target` element.
 * @param options The options for the plot
 * @param target The html element to target
 * @param plugin A reference to the plugin (accessed for settings)
 * @returns The chart object of the created plot
 */
export async function createPlot(
  options: PlotOptions,
  target: HTMLElement,
  plugin: ObsidianFunctionPlot
): Promise<Chart> {
  try {
    const fPlotOptions: FunctionPlotOptions = {
      target: target,
      plugins: [createStylingPlugin(plugin)],
      title: options.title,
      grid: options.grid,
      disableZoom: options.disableZoom,
      xAxis: {
        domain: options.bounds.slice(0, 2),
        label: options.xLabel,
      },
      yAxis: {
        domain: options.bounds.slice(2, 4),
        label: options.yLabel,
      },
      data: options.functions.map((line) => {
        return { fn: line.split("=")[1], graphType: "polyline" };
      }),
    };
    const plot = functionPlot(fPlotOptions);

    return plot;
  } catch (e) {
    console.debug(e);
  }
}

/**
 * Render the plot as an image element using a data url.
 * @param plugin A reference to the plugin
 * @param editor A reference to the active editor
 * @param options The options for the plot
export async function renderPlotAsImage(
  plugin: ObsidianFunctionPlot,
  editor: Editor,
  options: PlotOptions
) {
  const htmlTarget = document.createElement("div");
  await createPlot(options, htmlTarget, plugin);
  const dataURL = await toPng(htmlTarget);
  if (dataURL === "data:,") {
    new Error("Data URL is empty");
  }
  const text = `<img alt="Obsidian Functionplot Plot. Name: ${
    options.title
  }, X-Label: ${options.xLabel}, Y-Label: ${options.yLabel}, Functions: ${(
    options.functions ?? []
  ).join("\n")}."src="${dataURL}">`;
  htmlTarget.remove();
  insertParagraphAtCursor(plugin, editor, text);
}
*/

export function parseCodeBlock(content: string): [object, string[]] {
  let header = {},
    offset = 0;
  if (/-{3}[^]*-{3}/.test(content)) {
    // header present
    const headerMatch = content.match(/-{3}([^]*?)-{3}/)[1];
    offset = headerMatch.length + 6;
    header = parseYaml(headerMatch);
  }
  const functions = content
    .slice(offset)
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  return [header, functions];
}
