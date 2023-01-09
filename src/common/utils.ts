import { Editor, parseYaml } from "obsidian";
import type ObsidianFunctionPlot from "../main";
import type { PlotOptions } from "./types";
import createStylingPlugin from "../plugins/styling";
import functionPlot, { Chart } from "function-plot";
import { DEFAULT_FUNCTION_INPUTS, DEFAULT_PLOT_INPUTS, FALLBACK_FUNCTION_OPTIONS } from "./defaults";
import { toPng } from "html-to-image";
import type { FunctionPlotOptions } from "function-plot/dist/types";
import { nestedObjectAssign } from "nested-object-assign";

export function sanitize(options: PlotOptions): FunctionPlotOptions {
  const options_ = JSON.parse(JSON.stringify(options));

  nestedObjectAssign(options_, FALLBACK_FUNCTION_OPTIONS);

  options_.xAxis.domain = [options_.xAxis.domain.min, options_.xAxis.domain.max];
  options_.yAxis.domain = [options_.yAxis.domain.min, options_.yAxis.domain.max];
  
  for (let i = 0; i < options_.data.length; i++) {
    const f = options_.data[i];
    nestedObjectAssign(f, FALLBACK_FUNCTION_OPTIONS);

    f.range = [f.range.min, f.range.max];

    if (f.vector) {
      f.vector = [f.vector.x, f.vector.y];
      if (f.offset) {
        f.offset = [f.offset.x, f.offset.y];
      }
    }

    // remove unnecessary options
    if (f.fnType === "linear") {
      delete f.vector;
      delete f.offset;
      delete f.r;
    }
    if (f.fnType === "vector") {
      delete f.fn;
      delete f.r;
      delete f.range;
      delete f.graphType;
      delete f.closed;
    }
    if (f.fnType === "polar") {
      delete f.fn;
      delete f.vector;
      delete f.offset;
      delete f.range;
    }
    if (f.graphType == "scatter") {
      delete f.closed;
    }
    if (f.graphType == "interval") {
      delete f.range;
    }

    options_.data[i] = f;
  }

  return options_ as FunctionPlotOptions;
}

export function hueToHexRGB(hue: number): string {
  const f = (n, k = (n + hue / 60) % 6) =>
    1 - Math.max(Math.min(k, 4 - k, 1), 0);
  return (
    "#" +
    [
      Math.round(f(5) * 255)
        .toString(16)
        .padStart(2, "0"),
      Math.round(f(3) * 255)
        .toString(16)
        .padStart(2, "0"),
      Math.round(f(1) * 255)
        .toString(16)
        .padStart(2, "0"),
    ].join("")
  );
}

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
 * Create a plot in the specified `target` element.
 * @param options The options for the plot
 * @param target The html element to target
 * @param plugin A reference to the plugin (accessed for settings)
 * @returns The chart object of the created plot
 */
export function renderPlot(
  options: PlotOptions,
  plugin: ObsidianFunctionPlot
): Chart {
  console.log("called renderPlot");
  console.log(options);
  if (options.target == null) return;
  try {
    const stylingPlugin = createStylingPlugin(plugin);
    return functionPlot(
      Object.assign({}, sanitize(options), { plugins: [stylingPlugin] })
    );
  } catch (e) {
    console.debug(e);
  }
}

/**
 * Insert an interactive plot at the current cursor position.
 * @param plugin A reference to the plugin
 * @param editor A reference to the active editor
 * @param options The options for the plot
 */
export function insertPlotAsInteractive(
  plugin: ObsidianFunctionPlot,
  editor: Editor,
  options: PlotOptions
): void {
  const text = `\`\`\`functionplot\n${JSON.stringify(options)}\n\`\`\``;
  insertParagraphAtCursor(plugin, editor, text);
}

/**
 * Render the plot as an image element using a data url.
 * @param plugin A reference to the plugin
 * @param editor A reference to the active editor
 * @param options The options for the plot
 */
export async function insertPlotAsImage(
  plugin: ObsidianFunctionPlot,
  editor: Editor,
  options: PlotOptions
) {
  const target = document.createElement("div");
  renderPlot(Object.assign(options, { target }), plugin);
  const dataURL = await toPng(target);
  if (dataURL === "data:,") {
    new Error("Data URL is empty");
  }
  const text = `<img data-functionplot="${JSON.stringify(
    options
  )}" src="${dataURL}">`;
  target.remove();
  insertParagraphAtCursor(plugin, editor, text);
}

export function insertPlot(
  plugin: ObsidianFunctionPlot,
  editor: Editor,
  options: PlotOptions
) {
  switch (options.renderer) {
    case "interactive":
      insertPlotAsInteractive(plugin, editor, options);
      break;
    case "image":
      insertPlotAsImage(plugin, editor, options);
      break;
  }
}

export function parseYAMLCodeBlock(content: string): PlotOptions {
  let header:any = {},
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
    target: null,
    renderer: null,
    title: header.title ?? DEFAULT_PLOT_INPUTS.title,
    xAxis: {
      label: header.xLabel ?? DEFAULT_PLOT_INPUTS.xAxis.label,
      domain: header.bounds ? { min: header.bounds[0], max: header.bounds[1] } : DEFAULT_PLOT_INPUTS.xAxis.domain,
    },
    yAxis: {
      label: header.yLabel ?? DEFAULT_PLOT_INPUTS.yAxis.label,
      domain: header.bounds ? {min: header.bounds[2], max: header.bounds[3]} ?? DEFAULT_PLOT_INPUTS.yAxis.domain,
    },
    disableZoom: header.disableZoom ?? DEFAULT_PLOT_INPUTS.disableZoom,
    grid: header.grid ?? DEFAULT_PLOT_INPUTS.grid,
    data: functions.map((f) => {
      const fn = /^[A-z]\([A-z]\) *= *(?=[0-z])([^]+?)$/.exec(f)?.[1] ?? f;

      return Object.assign({}, DEFAULT_FUNCTION_INPUTS, {
        fnType: "linear",
        graphType: "polyline",
        fn,
      });
    }),
  };
}

export function parseCodeBlock(content: string): PlotOptions {
  try {
    return Object.assign({}, DEFAULT_PLOT_INPUTS, JSON.parse(content));
  } catch (e) {
    console.log(`Error while parsing code block in JSON mode: ${e}`);
    return parseYAMLCodeBlock(content);
  }
}
