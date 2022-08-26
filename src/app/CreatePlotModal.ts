import { Chart } from 'function-plot'
import { FunctionPlotDatum } from 'function-plot/dist/types'
import { App, Editor, Modal, Setting } from 'obsidian'
import { DEFAULT_PLOT_OPTIONS, PlotOptions, PluginSettings, rendererOptions, rendererType } from '../types'
import ObsidianFunctionPlot, { createPlot } from '../main'
import { insertParagraphAtCursor, renderAsImage, renderAsInteractive } from '../utils'


export default class CreatePlotModal extends Modal {
  options: PlotOptions
  plugin: ObsidianFunctionPlot
  editor: Editor
  plot: Chart
  renderer: rendererType

  constructor(
    plugin: ObsidianFunctionPlot,
    editor: Editor
  ) {
    super(plugin.app)
    this.plugin = plugin
    this.editor = editor
    this.renderer = this.plugin.settings.defaultRenderer
  }

  /**
   * Reload the preview using internal functions. Zooming doesn't work here.
   * @returns A Promise
   */
  async reloadPreview() {
    if (!this.plot) return
    // update values
    this.plot.options.title = this.options.title
    this.plot.options.xAxis.label = this.options.xLabel
    this.plot.options.yAxis.label = this.options.yLabel
    this.plot.options.xAxis.domain = this.options.bounds.slice(0, 2)
    this.plot.options.yAxis.domain = this.options.bounds.slice(2, 4)
    this.plot.options.grid = this.options.grid
    this.plot.options.data = this.options.functions.map((f): FunctionPlotDatum => {
      return {
        fn: f.split('=')[1],
        graphType: 'polyline'
      }
    })
    // redirect errors within function-plot to debug
    try {
      this.plot.build()
    } catch (e) { console.debug(e) }
  }

  async onOpen() {
    this.options = Object.assign({}, DEFAULT_PLOT_OPTIONS)

    let { contentEl } = this
    contentEl.empty();

    // Header
    contentEl.createEl('h1', { text: 'Plot a function' })

    const flex = contentEl.createDiv({ attr: { style: 'display: flex; align-items: center' } })

    const settings = flex.createDiv()
    const preview = flex.createDiv({ attr: { style: 'padding: 1em' } })
    this.plot = await createPlot(Object.assign({}, this.options, { disableZoom: true }), preview.createDiv(), this.plugin)
    preview.createEl('p', { text: 'Preview - Zoom is disabled while in preview', attr: { style: 'margin: 0 3em; font-size: 0.8em; color: var(--text-faint)' } })

    new Setting(settings).setName('Title').addText((text) => {
      text.onChange(async (value) => {
        this.options.title = value
        await this.reloadPreview()
      })
    })

    new Setting(settings).setName('Label X').addText((text) => {
      text.onChange(async (value) => {
        this.options.xLabel = value
        await this.reloadPreview()
      })
    })
    new Setting(settings).setName('Label Y').addText((text) => {
      text.onChange(async (value) => {
        this.options.yLabel = value
        await this.reloadPreview()
      })
    })

    new Setting(settings)
      .setName('Bounds')
      .setDesc('Bounds must be written in this format: minX, maxX, minY, maxY')
      .addText((text) => {
        text.setPlaceholder(DEFAULT_PLOT_OPTIONS.bounds.join(', '))
        text.onChange(async (_) => {
          let bounds = text
            .getValue()
            .split(',')
            .map((c) => parseFloat(c))
          const n = bounds.filter((v) => !isNaN(v)).length
          if (n === 0) {
            bounds = DEFAULT_PLOT_OPTIONS.bounds
          }
          if (n >= 4 || n === 0) {
            this.options.bounds = bounds as PlotOptions['bounds']
            await this.reloadPreview()
          }
        })
      })

    new Setting(settings).setName('Disable Zoom').addToggle((com) => {
      com.setValue(this.options.disableZoom)
      com.onChange(async (value) => {
        this.options.disableZoom = value
        await this.reloadPreview()
      })
    })

    new Setting(settings).setName('Enable Grid').addToggle((com) => {
      com.setValue(this.options.grid)
      com.onChange(async (value) => {
        this.options.grid = value
        await this.reloadPreview()
      })
    })

    new Setting(settings).setName('Functions').setDesc('Specify functions to plot. Must be in format: <name>(x) = <expression>').addTextArea((com) => {
      com.onChange(async (value) => {
        if (!value.trim()) return
        this.options.functions = value.split('\n').map((f) => f.trim() || undefined)
        // maybe check if there are valid functions
        await this.reloadPreview()
      })
    })

    new Setting(contentEl)
      .addDropdown((com) => {
        com
          .addOptions(rendererOptions)
          .setValue(this.plugin.settings.defaultRenderer)
          .onChange((value: rendererType) => {
            this.renderer = value
          })
      })
      .addButton((btn) => {
        btn
          .setButtonText('Plot')
          .setCta()
          .onClick(async () => {
            await this.handlePlotCreate(this.options)
          })
      })
  }

  async handlePlotCreate(options: PlotOptions) {
    // render and insert chosen plot using renderer
    switch (this.renderer) {
      case 'interactive':
        await insertParagraphAtCursor(this.editor, await renderAsInteractive(options))
        break
      case 'image':
        await insertParagraphAtCursor(this.editor, await renderAsImage(options, this.plugin))
        break
    }

    this.close()
  }

  async onClose() {
    let { contentEl } = this
    contentEl.empty()
    this.plot = null
  }
}
