import { Editor, parseYaml } from "obsidian";
import type ObsidianFunctionPlot from "../main";
import type { PlotOptions } from "./types";
import createStylingPlugin from "../plugins/styling";
import functionPlot, { Chart } from "function-plot";
import { DEFAULT_FUNCTION_OPTIONS, DEFAULT_PLOT_OPTIONS } from "./defaults";

/**
 * Insert the text as a new paragraph (newline before and after), and place the active cursor below.
 * @param editor The editor element
 * @param value The text to place
 */
export function insertParagraphAtCursor(
  plugin: ObsidianFunctionPlot,
  editor: Editor,
  value: string
) {
  editor.replaceRange(`\n${value}\n`, editor.getCursor());
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
  const text = `\`\`\`functionplot\n${JSON.stringify(options)}\n\`\`\``;
  insertParagraphAtCursor(plugin, editor, text);
}

/**
 * Create a plot in the specified `target` element.
 * @param options The options for the plot
 * @param target The html element to target
 * @param plugin A reference to the plugin (accessed for settings)
 * @returns The chart object of the created plot
 */
export function createPlot(
  options: PlotOptions,
  target: HTMLElement,
  plugin: ObsidianFunctionPlot
): Chart {
  try {
    const stylingPlugin = createStylingPlugin(plugin);
    return functionPlot(
      Object.assign({}, options, { target, plugins: [stylingPlugin] })
    );
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

export function parseYAMLCodeBlock(content: string): PlotOptions {
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

  return {
    title: header["title"] ?? DEFAULT_PLOT_OPTIONS.title,
    xAxis: {
      label: header["xLabel"] ?? DEFAULT_PLOT_OPTIONS.xAxis.label,
      domain:
        header["bounds"]?.slice(0, 2) ?? DEFAULT_PLOT_OPTIONS.xAxis.domain,
    },
    yAxis: {
      label: header["yLabel"] ?? DEFAULT_PLOT_OPTIONS.yAxis.label,
      domain:
        header["bounds"]?.slice(2, 4) ?? DEFAULT_PLOT_OPTIONS.yAxis.domain,
    },
    disableZoom: header["disableZoom"] ?? DEFAULT_PLOT_OPTIONS.disableZoom,
    grid: header["grid"] ?? DEFAULT_PLOT_OPTIONS.grid,
    data: functions.map((f) => {
      const fn = /^[A-z]\([A-z]\) *= *(?=[0-z])([^]+?)$/.exec(f)?.[1] ?? f;

      return Object.assign({}, DEFAULT_FUNCTION_OPTIONS, {
        fnType: "linear",
        graphType: "polyline",
        fn,
      });
    }),
  };
}

export function parseCodeBlock(content: string): PlotOptions {
  try {
    return Object.assign({}, DEFAULT_PLOT_OPTIONS, JSON.parse(content));
  } catch (e) {
    console.log(`Error while parsing code block in JSON mode: ${e}`);
    return parseYAMLCodeBlock(content);
  }
}
