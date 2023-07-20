import type { FunctionPlotOptions } from "function-plot/dist/types";
import type { PlotInputs } from "./common/types";
import createStylingPlugin from "./plugins/styling";
import { toFunctionPlotOptions } from "./common/utils";
import type ObsidianFunctionPlot from "./main";
import functionPlot from "function-plot";

export class FunctionPlot {
  id?: string;
  plugin: ObsidianFunctionPlot;
  target_: HTMLElement;
  options_: PlotInputs;

  constructor(plugin: ObsidianFunctionPlot) {
    this.plugin = plugin;
  }

  set target(target: HTMLElement) {
    this.target_ = target;
    this.render();
  }

  set options(options: PlotInputs) {
    this.options_ = options;
    this.render();
  }

  render(): void {
    if (!this.target_ || !this.options_) {
      console.log("No target or options set");
      return;
    }
    const stylingPlugin = createStylingPlugin(this.plugin);
    try {
      const functionPlotOptions = Object.assign(
        {},
        toFunctionPlotOptions(this.options_, this.target_),
        {
          plugins: [stylingPlugin],
          id: this.id,
          // width: 55,
          // height: 35,
        }
      ) as FunctionPlotOptions;
      console.log(functionPlotOptions);
      functionPlot(functionPlotOptions);
      this.id = functionPlotOptions.id;  // save id to preserve viewport state
    } catch (err) {
      console.error(`Error rendering plot: ${err}`);
    }
  }

  resetView(): void {
    this.id = undefined;
    this.render();
  }
}
