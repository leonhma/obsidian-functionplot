import { Chart } from "function-plot";
import { EventEmitter } from "events";

/**
 * The possible types of renderer.
 */


export type rendererType = 'interactive' | 'image';
/**
 * A sum-type of Chart and EventEmitter because TypeScript can't figure this out on it's own.
 */

export type chartType = Chart & EventEmitter;
/**
 * An interface specifying the options for a plot.
 */

export interface PlotOptions {
    title: string;
    xLabel: string;
    yLabel: string;
    bounds: [number, number, number, number];
    disableZoom: boolean;
    grid: boolean;
    functions: string[];
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
