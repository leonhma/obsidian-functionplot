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
		// styles
		el.classList.add('functionplot')
		// parse yaml for bounds and functions to plot
		const config: HeaderOptions = Object.assign(
			DEFAULT_HEADER_OPTIONS,
			// yaml parse of first occurence of ---...--- or empty string
			parseYaml((source.match(/-{3,}([^]+)-{3,}/) ?? ['', ''])[1])
		)
		const functions = source.match(/(^|-)([^-]+)$/)[2]  // 2nd capturing group
			.split('\n')
			.map(line => line.trim())
			.filter(line => line.length > 0)
		// prepare options for call to FunctionPlot
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
	}
}
