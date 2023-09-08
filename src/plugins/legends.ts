/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { PlotInputs, chartType } from "../common/types";

// TODO dont show legends for functions with empty name
export default function createLegendsPlugin(options: PlotInputs) {
  return function legendsPlugin(instance: chartType) {
    console.log("applying legends plugin");
    if (!options.legends) return;
    instance.root.append("text").attr("class", "top-left-legend");
    const legends: { name: string; color: string }[] = [];
    instance.options.data?.forEach((datum, index) => {
      legends.push({
        name: options.data[index].name ?? "",
        color: datum.color ?? "",
      });
    });
    const tll = instance.root.select(".top-left-legend");
    console.log(legends);
    tll.selectAll("tspan").remove();
    legends.forEach((legend) => {
      tll
        .attr("y", (instance.meta.margin?.top ?? 20) / 2)
        .attr("x", instance.meta.margin?.left ?? 10);
      tll
        .append("tspan")
        .attr("fill", legend.color)
        .text("█ " + legend.name + "\n");
    });
  };
}
