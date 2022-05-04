import functionPlot from 'function-plot';
import { FunctionPlotOptions } from 'function-plot/dist/types';
import { MarkdownPostProcessorContext, Plugin_2 } from 'obsidian';
import { parse } from 'yaml';
import { DEFAULT_HEADER_OPTIONS, HEADER_OPTIONS } from './config';

export default class ObsidianFunctionPlot extends Plugin_2 { 
	async onload(): Promise<void> {
		console.log('loading functionPlot plugin')
		this.registerMarkdownCodeBlockProcessor('functionplot', this.functionPlotHandler)
	}

	async onunload(): Promise<void> {
		console.log('unloading functionPlot plugin')
	}

	async functionPlotHandler(source: string, el: HTMLElement, _ctx: MarkdownPostProcessorContext): Promise<void> {
		// parse yamly for bounds and functions to plot
		const header = source.match(/-{3}[^]*-{3}/g).first()
		const config: HEADER_OPTIONS = Object.assign(DEFAULT_HEADER_OPTIONS, parse(header))
		const functions = source.substring(header.length).split('\n')
			.map(line => line.trim()).filter(line => line.length > 0)

		const fPlotOptions: FunctionPlotOptions = {
			"target": el as unknown as string,  // weird workaround
			"title": config.title,
			"grid": config.grid,
			"disableZoom": config.disableZoom,
			"xAxis": {
				"domain": [config.bounds[0], config.bounds[1]],
				"label": config.xLabel
			},
			"yAxis": {
				"domain": [config.bounds[2], config.bounds[3]],
				"label": config.yLabel
			},
			"data": functions.map(line => { return { "fn": line.split('=')[1].trim() } })
		}

		// render
		functionPlot(fPlotOptions)  // type error in function-plot
	}
}
