import type { Chart } from "function-plot";
import type { EventEmitter } from "events";
export type rendererType = "interactive" | "image";

/**
 * Input types: values that should be set to a default by the plugin are required, values that should be set to a default by functionplot are marked optional. Values that are not set by either are marked optional but default values Omit<> them.
 */

/**
 * A sum-type of Chart and EventEmitter because TypeScript can't figure this out on it's own.
 */
export type chartType = Chart & EventEmitter;

//Custom utility type:
export type DeepNonNullable<T> = {
  [K in keyof T]: DeepNonNullable<Required<T[K]>>;
};

export interface FunctionInputs {
  id?: string;
  scope: { [_: string]: number };
  fnType: "linear" | "vector" | "polar";
  fn?: string;
  vector: {
    x?: number;
    y?: number;
  };
  r?: string;
  offset: {
    x?: number;
    y?: number;
  };
  color?: string;
  range: {
    min?: number;
    max?: number;
  };
  graphType: "polyline" | "interval" | "scatter";
  nSamples?: number;
  closed?: boolean;
  skipTip?: boolean;
}
export interface ConstantInputs {
  min: number;
  max: number;
  step: number;
  value: number;
}
/**
 * An interface specifying the options for a plot.
 */
export interface PlotInputs {
  data: FunctionInputs[];
  constants: { [_: string]: ConstantInputs };
  xAxis: {
    label?: string;
    domain: {
      min?: number;
      max?: number;
    };
  };
  yAxis: {
    label?: string;
    domain: {
      min?: number;
      max?: number;
    };
  };
  grid?: boolean;
  disableZoom?: boolean;
  title?: string;
}

export interface V1YAMLPlotInputs {
  title?: string;
  disableZoom?: boolean;
  grid?: boolean;
  yLabel?: string;
  xLabel?: string;
  bounds?: [number, number, number, number];
}

/**
 * The plugin's settings.
 */
export interface PluginSettings {
  titleFontSize: number;
  scaleFontSize: number;
  labelFontSize: number;
  // annotationFontSize: number
  lineWidth: number;
  gridWidth: number;

  fontColor: string;
  // annotationColor: string
  lineColor: string;
  gridColor: string;

  defaultRenderer: rendererType;
}
