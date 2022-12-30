import type { FunctionOptions, PlotOptions, PluginSettings } from "./types";

export const DEFAULT_FUNCTION_OPTIONS: FunctionOptions = {
  id: null,
  fnType: "linear",
  fn: "",
  vector: [undefined, undefined],
  r: "",
  color: '#000',
  offset: [undefined, undefined],
  closed: false,
  graphType: "interval",
  range: [undefined, undefined],
  nSamples: undefined,
  skipTip: false,
};

/**
 * The options displayed for renderers
 *
// eslint-disable-next-line no-unused-vars
export const rendererOptions: { [_ in rendererType]: string } = {
  interactive: "Interactive (zoomable)",
  //image: "Image (exportable)",
};*/

/**
 * The default options for a plot.
 */
export const DEFAULT_PLOT_OPTIONS: PlotOptions = {
  title: "",
  xAxis: {
    label: "",
    domain: [-10, 10],
  },
  yAxis: {
    label: "",
    domain: [-10, 10],
  },
  grid: true,
  disableZoom: false,
  data: []
};

/**
 * The default plugin settings.
 */
export const DEFAULT_PLUGIN_SETTINGS: PluginSettings = {
  titleFontSize: 24,
  scaleFontSize: 12,
  labelFontSize: 12,
  // annotationFontSize: 16,

  lineWidth: 2,
  gridWidth: 1,

  fontColor: "var(--text-normal)",
  // annotationColor: '#000',
  lineColor: "gray",
  gridColor: "var(--interactive-hover)",
};
