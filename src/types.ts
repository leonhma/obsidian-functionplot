export interface PlotOptions {
  title: string
  xLabel: string
  yLabel: string
  bounds: [number, number, number, number]
  disableZoom: boolean
  grid: boolean
  functions: string[]
}

export const DEFAULT_PLOT_OPTIONS: PlotOptions = {
  title: '',
  xLabel: '',
  yLabel: '',
  bounds: [-10, 10, -10, 10],
  disableZoom: false,
  grid: true,
  functions: []
}

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
}

export const DEFAULT_PLOT_PLUGIN_SETTINGS: PluginSettings = {
  titleFontSize: 24,
  scaleFontSize: 14,
  labelFontSize: 12,
  // annotationFontSize: 16,

  lineWidth: 2,
  gridWidth: 1,

  fontColor: '#000000',
  // annotationColor: '#000',
  lineColor: '#000000',
  gridColor: '#cccccc'
}
