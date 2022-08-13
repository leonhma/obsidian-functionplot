import { App, Modal, Setting } from 'obsidian'
import { HeaderOptions } from './types'

export default class PlotFunctionModal extends Modal {
  title: HeaderOptions['title']
  xLabel: HeaderOptions['xLabel']
  yLabel: HeaderOptions['yLabel']
  bounds: HeaderOptions['bounds'] = [-10, 10, -10, 10]
  disableZoom: HeaderOptions['disableZoom'] = false
  grid: HeaderOptions['grid'] = true

  functions: string

  onSubmit: (result: HeaderOptions & { functions: string }) => void

  constructor(
    app: App,
    onSubmit: (result: HeaderOptions & { functions: string }) => void
  ) {
    super(app)
    this.onSubmit = onSubmit
  }

  static parseToPlot(result: HeaderOptions & { functions: string }): string {
    return `
\`\`\`functionplot
---
title: ${result.title}
disableZoom: ${result.disableZoom}
bounds: [${result.bounds}]
grid: ${result.grid}
xLabel: ${result.xLabel}
yLabel: ${result.yLabel}
---
${result.functions}
\`\`\`
`
  }

  onOpen(): void {
    let { contentEl } = this

    // Header
    contentEl.createEl('h1', { text: 'Plot a function.' })

    new Setting(contentEl).setName('Title').addText((text) => {
      text.onChange((value) => {
        this.title = value
      })
    })

    new Setting(contentEl).setName('X').addText((text) => {
      text.onChange((value) => {
        this.xLabel = value
      })
    })
    new Setting(contentEl).setName('Y').addText((text) => {
      text.onChange((value) => {
        this.yLabel = value
      })
    })

    new Setting(contentEl)
      .setName('Bounds')
      .setDesc('Bounds must be written in this format: minX, maxX, minY, maxY')
      .addText((text) => {
        text.setPlaceholder('-10, 10, -10, 10')
        text.inputEl.onchange = (_) => {
          const bounds = text
            .getValue()
            .split(',')
            .map((c) => parseFloat(c))
          if (bounds.length === 4)
            this.bounds = bounds as HeaderOptions['bounds']
        }
      })

    new Setting(contentEl).setName('Disable Zoom').addToggle((com) => {
      com.setValue(this.disableZoom)
      com.onChange((value) => {
        this.disableZoom = value
      })
    })

    new Setting(contentEl).setName('Enable Grid').addToggle((com) => {
      com.setValue(this.grid)
      com.onChange((value) => {
        this.grid = value
      })
    })

    new Setting(contentEl).setName('Functions').addTextArea((com) => {
      com.onChange((value) => {
        this.functions = value
      })
    })

    new Setting(contentEl).addButton((btn) => {
      btn
        .setButtonText('Plot')
        .setCta()
        .onClick(() => {
          this.close()
          this.onSubmit({
            title: this.title,
            xLabel: this.xLabel,
            yLabel: this.yLabel,
            bounds: this.bounds,
            disableZoom: this.disableZoom,
            grid: this.grid,
            functions: this.functions,
          })
        })
    })
  }

  onClose(): void {
    let { contentEl } = this
    contentEl.empty()
  }
}
