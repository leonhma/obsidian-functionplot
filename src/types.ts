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
