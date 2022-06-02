import functionPlot from 'function-plot'
import { FunctionPlotOptions } from 'function-plot/dist/types'
import { MarkdownPostProcessorContext, Plugin, parseYaml } from 'obsidian'


interface HeaderOptions {
	title: string,
	disableZoom: boolean,
	bounds: [number, number, number, number],
	grid: boolean,
	xLabel: string,
	yLabel: string
}

const DEFAULT_HEADER_OPTIONS: HeaderOptions = {
	title: "",
	disableZoom: false,
	bounds: [-10, 10, -10, 10],
	grid: true,
	xLabel: "",
	yLabel: ""
};

export default class ObsidianFunctionPlot extends Plugin {
	async onload(): Promise<void> {
		this.registerMarkdownCodeBlockProcessor('functionplot', this.functionPlotHandler)
	}

	async functionPlotHandler(source: string, el: HTMLElement, _ctx: MarkdownPostProcessorContext): Promise<void> {
		try {
			// styles
			el.classList.add('functionplot')
			// parse yaml for bounds and functions to plot
			
			const header = (source.match(/-{3}[^]+-{3}/) || [null])[0]
			const functions = (header ? source.substring(header.length) : source)
				.split('\n')
				.map(line => line.trim())
				.filter(line => line.length > 0)
			
			const config: HeaderOptions = Object.assign(
				{},
				DEFAULT_HEADER_OPTIONS,
				parseYaml(header.match(/-{3,}([^]+?)-{3,}/)[1] || '')
			)

			// prepare options for call to FunctionPlotya
			const fPlotOptions: FunctionPlotOptions = {
				target: el as unknown as string,  // weird workaround
				title: config.title,
				grid: config.grid,
				disableZoom: config.disableZoom,
				xAxis: {
					domain: [config.bounds[0], config.bounds[1]],
					label: config.xLabel
				},
				yAxis: {
					domain: [config.bounds[2], config.bounds[3]],
					label: config.yLabel
				},
				data: functions.map(line => { return { "fn": line.split('=')[1].trim() } })
			}
			// render
			functionPlot(fPlotOptions)
			// make text listen to stylesheet
			el.querySelectorAll('text').forEach(el => el.setAttribute('fill', 'currentColor'))
		} catch (e) {
			el.innerHTML = `
			<div style="border-radius:1em;background:black;opacity:0.5">
				<p style="opacity:1;font-size:0.7em;padding:1em">
					${e}\n\n${source}
				</p>
			</div>`
		}
	}
}
