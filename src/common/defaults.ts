import type {
  FunctionOptions,
  PlotOptions,
  PluginSettings,
  rendererType,
} from "./types";

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

export const FALLBACK_FUNCTION_OPTIONS: Partial<FunctionOptions> = {
  range: {
    min: -Infinity,
    max: Infinity,
  },
};

export const DEFAULT_FUNCTION_INPUTS: FunctionOptions = {
  id: null,
  fnType: "linear", // always set by the plugin
  fn: "", // error if missing, no fallback
  vector: {
    x: null,
    y: null,
  }, // error if missing, no fallback
  r: "", // error if missing, no fallback
  color: "#808080",
  offset: {
    x: null,
    y: null,
  },
  closed: false,
  graphType: null,
  range: {
    min: null,
    max: null,
  },
  nSamples: null,
  skipTip: false,
};

/**
 * The options displayed for renderers
 */
// eslint-disable-next-line no-unused-vars
export const rendererOptions: { [_ in rendererType]: string } = {
  interactive: "Interactive (zoomable)",
  image: "Image (exportable)",
};

export const FALLBACK_PLOT_OPTIONS: Partial<PlotOptions> = {
  xAxis: {
    domain: {
      min: -10,
      max: 10,
    },
  },
  yAxis: {
    domain: {
      min: -10,
      max: 10,
    },
  },
};

/**
 * The default options for a plot.
 */
export const DEFAULT_PLOT_INPUTS: PlotOptions = {
  target: null, // set by rendering function
  renderer: null, // has initial state controlled by plugin.settings.defaultRenderer
  title: null,
  xAxis: {
    label: null,
    domain: {
      min: null,
      max: null,
    },
  },
  yAxis: {
    label: null,
    domain: { min: null, max: null },
  },
  grid: true,
  disableZoom: false,
  data: [],
};
