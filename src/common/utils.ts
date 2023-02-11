import { Editor, parseYaml } from "obsidian";
import type ObsidianFunctionPlot from "../main";
import type { FunctionInputs, PlotInputs } from "./types";
import createStylingPlugin from "../plugins/styling";
import functionPlot from "function-plot";
import {
  DEFAULT_FUNCTION_INPUTS,
  DEFAULT_PLOT_INPUTS,
  FALLBACK_FUNCTION_INPUTS,
  FALLBACK_PLOT_INPUTS,
} from "./defaults";
import { toPng } from "html-to-image";
import type {
  FunctionPlotDatum,
  FunctionPlotOptions,
} from "function-plot/dist/types";

// TODO make change to returned object reflect in input
export function toFunctionPlotOptions(
  options: PlotInputs,
  target: HTMLElement
): FunctionPlotOptions {
  function functionInputsToFunctionPlotDatum(
    inputs: FunctionInputs
  ): FunctionPlotDatum {
    const output: FunctionPlotDatum = {
      fnType: inputs.fnType,
      graphType:
        inputs.graphType ?? ["vector", "polar"].includes(inputs.fnType)
          ? "polyline"
          : undefined, // workaround for https://github.com/mauriciopoppe/function-plot/issues/224
      fn: inputs.fnType === "linear" ? inputs.fn : undefined,
      vector:
        inputs.fnType === "vector"
          ? [inputs.vector.x, inputs.vector.y]
          : undefined,
      offset:
        inputs.fnType === "vector" &&
        (inputs.offset?.x !== undefined || inputs.offset?.y !== undefined) //TODO work here offset is [undef, undef]
          ? [inputs.offset.x ?? 0, inputs.offset.y ?? 0]
          : undefined,
      r: inputs.fnType === "polar" ? inputs.r : undefined,
      color: inputs.color,
      range:
        inputs.range.min || inputs.range.max
          ? [
              inputs.range.min ?? FALLBACK_FUNCTION_INPUTS.range.min,
              inputs.range.max ?? FALLBACK_FUNCTION_INPUTS.range.max,
            ]
          : undefined,
      nSamples: Math.min(inputs.nSamples, 999),
      closed: inputs.closed,
      skipTip: inputs.skipTip,
    };

    Object.keys(output).forEach(
      (key) => output[key] === undefined && delete output[key]
    );

    return output;
  }

  function hasFunction(inputs: FunctionInputs): boolean {
    return Boolean(
      (inputs.fnType === "linear" && inputs.fn) ||
        (inputs.fnType === "vector" && inputs.vector.x && inputs.vector.y) ||
        (inputs.fnType === "polar" && inputs.r)
    );
  }

  const output: FunctionPlotOptions = {
    //id: options.id, //used by funcitonplot to identify the plot for updating
    target: target,
    data: options.data
      .filter(hasFunction)
      .map(functionInputsToFunctionPlotDatum),
    title: options.title || undefined,
    xAxis: {
      label: options.xAxis?.label || undefined,
      domain: [
        options.xAxis?.domain?.min ?? FALLBACK_PLOT_INPUTS.xAxis.domain.min,
        options.xAxis?.domain?.max ?? FALLBACK_PLOT_INPUTS.xAxis.domain.max,
      ],
    },
    yAxis: {
      label: options.yAxis?.label || undefined,
      domain: [
        options.yAxis?.domain?.min ?? FALLBACK_PLOT_INPUTS.yAxis.domain.min,
        options.yAxis?.domain?.max ?? FALLBACK_PLOT_INPUTS.yAxis.domain.max,
      ],
    },
    grid: options.grid,
    disableZoom: options.disableZoom,
  };

  Object.keys(output).forEach(
    (key) => output[key] === undefined && delete output[key]
  );

  return output;
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
  options: PlotInputs,
  target: HTMLElement,
  plugin: ObsidianFunctionPlot
) {
  if (target === null) return;
  const stylingPlugin = createStylingPlugin(plugin);
  try {
    functionPlot(
      Object.assign({}, toFunctionPlotOptions(options, target), {
        plugins: [stylingPlugin],
      })
    );
  } catch (e) {
    // eslint-disable-next-line no-console
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
  options: PlotInputs
): void {
  const text = `\`\`\`functionplot\n${JSON.stringify(
    Object.assign({}, options, { target: null })
  )}\n\`\`\``;
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
  options: PlotInputs
) {
  const target = document.createElement("div");
  renderPlot(options, target, plugin);
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
  options: PlotInputs
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

export function parseYAMLCodeBlock(content: string): PlotInputs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let header: any = {},
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
    renderer: null,
    constants: {},
    title: header.title ?? DEFAULT_PLOT_INPUTS.title,
    xAxis: {
      label: header.xLabel ?? DEFAULT_PLOT_INPUTS.xAxis.label,
      domain: header.bounds
        ? { min: header.bounds[0], max: header.bounds[1] }
        : DEFAULT_PLOT_INPUTS.xAxis.domain,
    },
    yAxis: {
      label: header.yLabel ?? DEFAULT_PLOT_INPUTS.yAxis.label,
      domain: header.bounds
        ? { min: header.bounds[2], max: header.bounds[3] }
        : DEFAULT_PLOT_INPUTS.yAxis.domain,
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

export function parseCodeBlock(content: string): PlotInputs {
  try {
    return Object.assign({}, DEFAULT_PLOT_INPUTS, JSON.parse(content));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.debug(`Error while parsing code block in JSON mode: ${e}`);
    return parseYAMLCodeBlock(content);
  }
}
