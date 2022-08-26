import { Chart } from "function-plot"
import { EventEmitter } from "events"


/**
 * The possible types of renderer.
 */
export type rendererType = 'interactive' | 'image'

/**
 * A sum-type of Chart and EventEmitter because TypeScript can't figure this out on it's own.
 */
export type chartType = Chart & EventEmitter

/**
 * An interface specifying the options for a plot.
 */
export interface PlotOptions {
  title: string
  xLabel: string
  yLabel: string
  bounds: [number, number, number, number]
  disableZoom: boolean
  grid: boolean
  functions: string[]
}

/**
 * The plugin's settings.
 */
export interface PluginSettings {
  titleFontSize: number
  scaleFontSize: number
  labelFontSize: number
  // annotationFontSize: number

  lineWidth: number
  gridWidth: number

  fontColor: string
  // annotationColor: string
  lineColor: string
  gridColor: string

  defaultRenderer: rendererType
}

/**
 * The options displayed for renderers
 */
export const rendererOptions: { [_ in rendererType]: string } = {
  'interactive': 'Interactive (zoomable)',
  'image': 'Image (exportable)'
}

/**
 * The default options for a plot.
 */
export const DEFAULT_PLOT_OPTIONS: PlotOptions = {
  title: '',
  xLabel: '',
  yLabel: '',
  bounds: [-10, 10, -10, 10],
  disableZoom: false,
  grid: true,
  functions: []
}

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

  fontColor: 'var(--text-normal)',
  // annotationColor: '#000',
  lineColor: 'gray',
  gridColor: 'var(--interactive-hover)',

  defaultRenderer: 'interactive'
}
