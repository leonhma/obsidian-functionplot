var $8zHUo$functionplot = require("function-plot");
var $8zHUo$obsidian = require("obsidian");
var $8zHUo$yaml = require("yaml");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $882b6d93070905b3$export$2e2bcd8739ae039);



const $dba5cd6913742fdd$export$7133e6ad2ead4f42 = {
    "title": "title",
    "disableZoom": false,
    "bounds": [
        -10,
        10,
        -10,
        10
    ],
    "grid": true,
    "xLabel": "",
    "yLabel": ""
};


class $882b6d93070905b3$export$2e2bcd8739ae039 extends $8zHUo$obsidian.Plugin_2 {
    async onload() {
        console.log('loading functionPlot plugin');
        this.registerMarkdownCodeBlockProcessor('functionplot', this.functionPlotHandler);
    }
    async onunload() {
        console.log('unloading functionPlot plugin');
    }
    async functionPlotHandler(source, el, _ctx) {
        // parse yamly for bounds and functions to plot
        const header = source.match(/-{3}[^]*-{3}/g).first();
        const config = Object.assign($dba5cd6913742fdd$export$7133e6ad2ead4f42, $8zHUo$yaml.parse(header));
        const functions = source.substring(header.length).split('\n').map((line)=>line.trim()
        ).filter((line)=>line.length > 0
        );
        let fPlotOptions = {
            "title": config.title,
            "grid": config.grid,
            "target": el
        };
        // parse functions
        if (config.disableZoom) {
            fPlotOptions['disableZoom'] = true;
            fPlotOptions['xAxis']['domain'] = [
                config.bounds[0],
                config.bounds[1]
            ];
            fPlotOptions['yAxis']['domain'] = [
                config.bounds[2],
                config.bounds[3]
            ];
        }
        if (config.xLabel) fPlotOptions['xAxis']['xLabel'] = config.xLabel;
        if (config.yLabel) fPlotOptions['yAxis']['yLabel'] = config.yLabel;
        // found no way to make labels work with functionPlot
        fPlotOptions['data'] = functions.map((line)=>{
            return {
                "fn": line.split('=')[1].trim()
            };
        });
        // render
        ($parcel$interopDefault($8zHUo$functionplot))(fPlotOptions) // type error in function-plot
        ;
    }
}


//# sourceMappingURL=main.js.map
