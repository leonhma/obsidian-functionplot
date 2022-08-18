import functionPlot, { Chart } from 'function-plot'
import { FunctionPlotOptions } from 'function-plot/dist/types'
import { MarkdownPostProcessorContext, Plugin, parseYaml, Editor } from 'obsidian'
import CreatePlotModal from './app/CreatePlotModal'
import SettingsTab from './app/SettingsTab'
import { parseToPlot } from "./utils"
import createStylingPlugin from './plugins/styling'
import { PlotOptions, DEFAULT_PLOT_OPTIONS, PluginSettings, DEFAULT_PLOT_PLUGIN_SETTINGS } from './types'

export default class ObsidianFunctionPlot extends Plugin {
  settings: PluginSettings

  async onload(): Promise<void> {
    // load settings
    await this.loadSettings();
    // add settings tab
    this.addSettingTab(new SettingsTab(this.app, this))
    // register command for PlotModal
    this.addCommand({
      id: 'insert-functionplot',
      name: 'Plot a function',
      editorCallback: (editor: Editor) => {
        new CreatePlotModal(this.app, this, (result) => {
          const line = editor.getCursor().line
          editor.setLine(line, parseToPlot(result))
        }).open()
      },
    })
    // register code block renderer
    this.registerMarkdownCodeBlockProcessor(
      'functionplot',
      this.createFunctionPlotHandler(this)
    )
  }

  async loadSettings() {
    // TODO load default settings for font size, color and line width from themes
    this.settings = Object.assign({}, DEFAULT_PLOT_PLUGIN_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
    console.log(`saved settings ${JSON.stringify(this.settings)}`)
  }

  createFunctionPlotHandler(plugin: ObsidianFunctionPlot) {
    return async (
      source: string,
      el: HTMLElement,
      _ctx: MarkdownPostProcessorContext
    ) => {
      // parse functionplot options
      const header: string = (source.match(/-{3}[^]*-{3}/) || [null])[0]
      const functions = (header ? source.substring(header.length) : source)
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
      const options: PlotOptions = Object.assign(
        {},
        DEFAULT_PLOT_OPTIONS,
        header ? parseYaml(header.match(/-{3,}([^]*?)-{3,}/)[1]) : {},
        { functions: functions }
      )
      await createPlot(options, el, plugin)
    }
  }
  
}


export async function createPlot(
  options: PlotOptions,
  target: HTMLElement,
  plugin: ObsidianFunctionPlot
): Promise<Chart> {
  try {
    const fPlotOptions: FunctionPlotOptions = {
      target: target,
      plugins: [createStylingPlugin(plugin)],
      title: options.title,
      grid: options.grid,
      disableZoom: options.disableZoom,
      xAxis: {
        domain: options.bounds.slice(0, 2),
        label: options.xLabel,
      },
      yAxis: {
        domain: options.bounds.slice(2, 4),
        label: options.yLabel,
      },
      data: options.functions.map((line) => {
        return { fn: line.split('=')[1], graphType: 'polyline' }
      })
    }
    const plot = functionPlot(fPlotOptions)
    plot.root.select('.title').style('font-size', `${plugin.settings.titleFontSize}px`).style('fill', plugin.settings.fontColor)
    plot.root.selectAll('.axis-label').style('font-size', `${plugin.settings.labelFontSize}px`).style('fill', plugin.settings.fontColor)
    plot.root.selectAll('.origin').style('stroke', plugin.settings.lineColor).style('stroke-width', `${plugin.settings.lineWidth}px`)
    plot.root.selectAll('line.tick').style('stroke', plugin.settings.gridColor).style('stroke-width', `${plugin.settings.gridWidth}px`)
    plot.root.selectAll('line.text').style('fill', plugin.settings.fontColor).style('font-size', `${plugin.settings.scaleFontSize}px`)
    plot.root.selectAll('.domain').style('stroke', plugin.settings.lineColor).style('stroke-width', `${plugin.settings.gridWidth}px`)
    return plot
  } catch (e) {
    console.debug(e)
  }
}


