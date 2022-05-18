import functionPlot from 'function-plot'
import { FunctionPlotOptions } from 'function-plot/dist/types'
import { MarkdownPostProcessorContext, Plugin, parseYaml } from 'obsidian'


interface HEADER_OPTIONS { 
	title: string,
	disableZoom: boolean,
	bounds: [number, number, number, number],
	grid: boolean,
	xLabel: string,
	yLabel: string
}

const DEFAULT_HEADER_OPTIONS: HEADER_OPTIONS = {
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
		// styles
		el.classList.add('functionplot')
		// sizing
		// parse yamly for bounds and functions to plot
		const matches = source.match(/-{3,}[^]*-{3,}/g)
		let config: HEADER_OPTIONS = DEFAULT_HEADER_OPTIONS
		let funcs = source
		if (matches) { 
			config = Object.assign({}, config, parseYaml(matches[0].substring(3, matches[0].length - 3)))
			funcs = source.substring(matches[0].length)
		}

		const functions = funcs.split('\n')
			.map(line => line.trim()).filter(line => line.length > 0)

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

		console.debug(`[functionplot] ${fPlotOptions}`)
		// render
		functionPlot(fPlotOptions)
		// make text listen to stylesheet
		el.querySelectorAll('text').forEach(el => el.setAttribute('fill', 'currentColor'))
	}
}
