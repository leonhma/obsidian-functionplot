export interface HEADER_OPTIONS { 
	title: string,
	disableZoom: boolean,
	bounds: [number, number, number, number],
	grid: boolean,
	xLabel: string,
	yLabel: string
}

export const DEFAULT_HEADER_OPTIONS: HEADER_OPTIONS = {
	"title": "title",
	"disableZoom": false,
	"bounds": [-10, 10, -10, 10],
	"grid": true,
	"xLabel": "",
	"yLabel": ""
};
