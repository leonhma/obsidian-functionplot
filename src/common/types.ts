import type { Chart } from "function-plot";
import type { EventEmitter } from "events";

export type rendererType = "interactive" | "image";

/**
 * A sum-type of Chart and EventEmitter because TypeScript can't figure this out on it's own.
 */
export type chartType = Chart & EventEmitter;

export interface FunctionOptions {
  id: string;
  fnType: string;
  fn?: string;
  vector?: {
    x: number;
    y: number;
  };
  r?: string;
  offset?: {
    x: number;
    y: number;
  };
  color?: string;
  range?: {
    min: number;
    max: number;
  };
  graphType?: string;
  nSamples?: number;
  closed?: boolean;
  skipTip?: boolean;
}
/**
 * An interface specifying the options for a plot.
 */
export interface PlotOptions {
  data: FunctionOptions[];
  renderer: rendererType;
  target: HTMLElement | Node | string;
  xAxis?: {
    label?: string;
    domain?: {
      min?: number;
      max?: number;
    };
  };
  yAxis?: {
    label?: string;
    domain?: {
      min?: number;
      max?: number;
    };
  };
  grid?: boolean;
  disableZoom?: boolean;
  title?: string;
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
