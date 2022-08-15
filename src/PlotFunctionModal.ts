import { App, Modal, Setting } from 'obsidian'
import { plotFunction } from './main'
import { HeaderOptions } from './types'

export function parseToPlot(
  result: HeaderOptions & { functions: string }
): string {
  return `
\`\`\`functionplot
${parseToYAML(result)}
\`\`\`
`
}

export function parseToYAML(
  result: HeaderOptions & { functions: string }
): string {
  return `---
title: ${result.title ?? "''"}
disableZoom: ${result.disableZoom}
bounds: [${result.bounds}]
grid: ${result.grid}
xLabel: ${result.xLabel ?? "''"} 
yLabel: ${result.yLabel ?? "''"}
---
${result.functions ?? ''}
`
}

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

  reloadPreview(previewDiv: HTMLElement) {
    while (previewDiv.firstChild) {
      previewDiv.removeChild(previewDiv.firstChild)
    }
    plotFunction(
      parseToYAML({
        title: this.title,
        xLabel: this.xLabel,
        yLabel: this.yLabel,
        bounds: this.bounds,
        disableZoom: this.disableZoom,
        grid: this.grid,
        functions: this.functions,
      }),
      previewDiv
    )
  }

  onOpen(): void {
    let { contentEl } = this

    // Header
    contentEl.createEl('h1', { title: 'Plot a function.' })

    const flex = contentEl.createDiv({ cls: 'flex' })
    flex.style.display = 'flex'
    flex.style.alignItems = 'center'

    const settings = flex.createDiv({ cls: 'settings' })
    const preview = flex.createDiv()
    this.reloadPreview(preview)

    new Setting(settings).setName('Title').addText((text) => {
      text.onChange((value) => {
        this.title = value
        this.reloadPreview(preview)
      })
    })

    new Setting(settings).setName('X').addText((text) => {
      text.onChange((value) => {
        this.xLabel = value
        this.reloadPreview(preview)
      })
    })
    new Setting(settings).setName('Y').addText((text) => {
      text.onChange((value) => {
        this.yLabel = value
        this.reloadPreview(preview)
      })
    })

    new Setting(settings)
      .setName('Bounds')
      .setDesc('Bounds must be written in this format: minX, maxX, minY, maxY')
      .addText((text) => {
        text.setPlaceholder('-10, 10, -10, 10')
        text.inputEl.onchange = (_) => {
          const bounds = text
            .getValue()
            .split(',')
            .map((c) => parseFloat(c))
          if (bounds.length === 4) {
            this.bounds = bounds as HeaderOptions['bounds']
            this.reloadPreview(preview)
          }
        }
      })

    new Setting(settings).setName('Disable Zoom').addToggle((com) => {
      com.setValue(this.disableZoom)
      com.onChange((value) => {
        this.disableZoom = value
        this.reloadPreview(preview)
      })
    })

    new Setting(settings).setName('Enable Grid').addToggle((com) => {
      com.setValue(this.grid)
      com.onChange((value) => {
        this.grid = value
        this.reloadPreview(preview)
      })
    })

    new Setting(settings).setName('Functions').addTextArea((com) => {
      com.onChange((value) => {
        this.functions = value
      })
      com.inputEl.onchange = (_) => this.reloadPreview(preview)
    })

    // Preview

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
