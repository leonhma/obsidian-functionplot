import functionPlot from 'function-plot'
import { FunctionPlotOptions } from 'function-plot/dist/types'
import {
  MarkdownPostProcessorContext,
  Plugin,
  parseYaml,
  Editor,
} from 'obsidian'

import PlotFunctionModal from './PlotFunctionModal'
import { HeaderOptions } from './types'

const DEFAULT_HEADER_OPTIONS: HeaderOptions = {
  title: '',
  disableZoom: false,
  bounds: [-10, 10, -10, 10],
  grid: true,
  xLabel: '',
  yLabel: '',
}

export default class ObsidianFunctionPlot extends Plugin {
  async onload(): Promise<void> {
    this.addCommand({
      id: 'insert-functionplot',
      name: 'Plot a function',
      //@ts-ignore
      editorCallback: (editor: Editor) => {
        new PlotFunctionModal(this.app, (result) => {
          const line = editor.getCursor().line
          editor.setLine(line, PlotFunctionModal.parseToPlot(result))
        }).open()
      },
    })

    this.registerMarkdownCodeBlockProcessor(
      'functionplot',
      this.functionPlotHandler
    )
  }

  async functionPlotHandler(
    source: string,
    el: HTMLElement,
    _ctx: MarkdownPostProcessorContext
  ): Promise<void> {
    try {
      // styles
      el.classList.add('obsidian-functionplot-render')
      // parse yaml for bounds and functions to plot

      const header = (source.match(/-{3}[^]+-{3}/) || [null])[0]
      const functions = (header ? source.substring(header.length) : source)
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0)

      const config: HeaderOptions = Object.assign(
        {},
        DEFAULT_HEADER_OPTIONS,
        header ? parseYaml(header.match(/-{3,}([^]+?)-{3,}/)[1] || '') : {}
      )

      // prepare options for call to FunctionPlotya
      const fPlotOptions: FunctionPlotOptions = {
        target: el,
        title: config.title,
        grid: config.grid,
        disableZoom: config.disableZoom,
        xAxis: {
          domain: [config.bounds[0], config.bounds[1]],
          label: config.xLabel,
        },
        yAxis: {
          domain: [config.bounds[2], config.bounds[3]],
          label: config.yLabel,
        },
        data: functions.map((line) => {
          return { fn: line.split('=')[1].trim(), graphType: 'polyline' }
        }),
      }
      // render
      functionPlot(fPlotOptions)
      // make text listen to stylesheet
      el.querySelectorAll('text').forEach((el) =>
        el.setAttribute('fill', 'currentColor')
      )
    } catch (e) {
      el.innerHTML = `
			<div class="obsidian-functionplot-error">
				<h3>Error</h3>
				<p>${e}\n\n${source}</p>
				<p>Please check your syntax. If this error keeps happening, please file a bug report on <a href="https://github.com/leonhma/obsidian-functionplot#bugs-and-errors">GitHub</a>.</p>
			</div>`
    }
  }
}
