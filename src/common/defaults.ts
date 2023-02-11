import type {
  FunctionInputs,
  PlotInputs,
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

/**
 * The options displayed for renderers
 */
// eslint-disable-next-line no-unused-vars
export const rendererOptions: { [_ in rendererType]: string } = {
  interactive: "Interactive (zoomable)",
  image: "Image (exportable)",
};

export const DEFAULT_FUNCTION_INPUTS: FunctionInputs = {
  id: null,
  fnType: undefined, // always set by the plugin
  fn: undefined, // error if missing, no fallback
  vector: {
    x: undefined,
    y: undefined,
  }, // error if missing, no fallback
  r: undefined, // error if missing, no fallback
  color: null, // set by color generator. fallback value is gray
  offset: {
    x: undefined,
    y: undefined,
  },
  closed: false,
  graphType: undefined,
  range: {
    min: undefined,
    max: undefined,
  },
  nSamples: undefined,
  skipTip: false,
};

export const FALLBACK_FUNCTION_INPUTS: Partial<FunctionInputs> = {
  range: {
    min: -Infinity,
    max: Infinity,
  },
};

export const DEFAULT_CONSTANT_INPUTS = {
  min: -10,
  max: 10,
  step: 1,
  value: 1,
}

/**
 * The default options for a plot.
 */
export const DEFAULT_PLOT_INPUTS: PlotInputs = {
  renderer: null, // has initial state controlled by plugin.settings.defaultRenderer
  constants: {},
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

export const FALLBACK_PLOT_INPUTS: Partial<PlotInputs> = {
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
