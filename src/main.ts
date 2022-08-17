import functionPlot, { Chart } from 'function-plot'
import { FunctionPlotOptions } from 'function-plot/dist/types'
import { MarkdownPostProcessorContext, Plugin, parseYaml, Editor } from 'obsidian'
import CreatePlotModal from './app/CreatePlotModal'
import SettingsTab from './app/SettingsTab'
import { parseToPlot } from "./utils"
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
        new CreatePlotModal(this.app, (result) => {
          const line = editor.getCursor().line
          editor.setLine(line, parseToPlot(result))
        }).open()
      },
    })
    // register code block renderer
    this.registerMarkdownCodeBlockProcessor(
      'functionplot',
      this.functionPlotHandler
    )
  }

  async loadSettings() {
    // TODO load default settings for font size, color and line width from themes
    this.settings = Object.assign({}, DEFAULT_PLOT_PLUGIN_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async functionPlotHandler(
    source: string,
    el: HTMLElement,
    _ctx: MarkdownPostProcessorContext
  ): Promise<void> {
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
    await createPlot(options, el)
  }
}


export async function createPlot(
  options: PlotOptions,
  target: HTMLElement
): Promise<Chart> {
  try {
    target.classList.add('obsfplt-rendertarget')
    const fPlotOptions: FunctionPlotOptions = {
      target: target,
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
    return functionPlot(fPlotOptions)
  } catch (e) {
    console.debug(e)
    target.innerHTML = `
    <div class="obsfplt-error">
      <h3>Error</h3>
      <p>${e}\nOptions passed to createPlot: ${options.toString()}</p>
      <p>Please check your syntax. If this error keeps happening, please file a bug report on <a href="https://github.com/leonhma/obsidian-functionplot#bugs-and-errors">GitHub</a>.</p>
    </div>`
  }
}


