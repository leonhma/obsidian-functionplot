import type { rendererType, PlotOptions, PluginSettings } from "./types";

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

  telemetry: true,
};
