import { rendererType, PlotOptions, PluginSettings, ErrorViewProps, BugFormProps } from "./types"


/**
 * The options displayed for renderers
 */
export const rendererOptions: { [_ in rendererType]: string } = {
  'interactive': 'Interactive (zoomable)',
  'image': 'Image (exportable)',
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

/**
 * The default issue url to use
 */
export const DEFAULT_ERROR_VIEW_PROPS: ErrorViewProps = {
  heading: 'Unhandled Error',
  message: '',
  link: 'https://github.com/leonhma/obsidian-functionplot/issues/new?labels=bug&template=BUG_REPORT.yml'
}

export const DEFAULT_BUG_FORM_PROPS: BugFormProps = {
  "what-happened": '',
  checkboxes: [false, false],
  ideas: '',
  additional: ''
}
