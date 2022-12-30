import type { Chart } from "function-plot";
import type {
  FunctionPlotOptions,
  FunctionPlotDatum,
} from "function-plot/dist/types";
import type { EventEmitter } from "events";

/**
 * A sum-type of Chart and EventEmitter because TypeScript can't figure this out on it's own.
 */
export type chartType = Chart & EventEmitter;

export interface FunctionOptions extends FunctionPlotDatum {
  id: string;
  fn?: string;
  r?: string;
}
/**
 * An interface specifying the options for a plot.
 */
export interface PlotOptions extends Partial<FunctionPlotOptions> {
  data: FunctionOptions[];
};

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
}
