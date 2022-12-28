import type { rendererType, PlotOptions, PluginSettings } from "./types";

export const DEFAULT_FUNCTION_OPTIONS = {
  fnType: 'linear',
  fn: '',
  vector: ['',''],
  r: '',
  points: '',
  color: null,
  offset: ['', ''],
  closed: false,
  graphType: 'interval',
  range: ['', ''],
  nSamples: '',
  skipTip: false
}

export const FUNCTION_CASES = [
  [options => options.fnType == 'vector', () => {/*set fn field to two values*/ }, () => {/*revert to one field*/}]
]
/**
 * The options displayed for renderers
 */
// eslint-disable-next-line no-unused-vars
export const rendererOptions: { [_ in rendererType]: string } = {
  interactive: "Interactive (zoomable)",
  //image: "Image (exportable)",
};

/**
 * The default options for a plot.
 */
export const DEFAULT_PLOT_OPTIONS: PlotOptions = {
  title: "",
  xLabel: "",
  yLabel: "",
  bounds: [-10, 10, -10, 10],
  disableZoom: false,
  grid: true,
  functions: [],
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

  defaultRenderer: "interactive",
};
