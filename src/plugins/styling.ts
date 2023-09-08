/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { chartType } from "../common/types";
import type ObsidianFunctionPlot from "../main";

export default function createStylingPlugin(plugin: ObsidianFunctionPlot) {
  return function stylingPlugin(instance: chartType) {
    instance.root
      .attr("viewBox", "0 0 550 350")
      .attr("width", null)
      .attr("height", null)
      .attr("preserveAspectRatio", "xMinYMin meet");

    instance.root
      .select(".title")
      .style("font-size", `${plugin.settings.titleFontSize}px`)
      .style("fill", plugin.settings.fontColor);

    instance.root
      .selectAll(".axis-label")
      .style("font-size", `${plugin.settings.labelFontSize}px`)
      .style("fill", plugin.settings.fontColor);

    instance.root
      .selectAll(".origin")
      .style("stroke", plugin.settings.lineColor)
      .style("stroke-width", `${plugin.settings.lineWidth}px`)
      .style("opacity", 1);

    instance.root
      .selectAll("line.text")
      .style("fill", plugin.settings.fontColor)
      .style("font-size", `${plugin.settings.scaleFontSize}px`);

    instance.root
      .selectAll(".domain")
      .style("stroke", plugin.settings.gridColor)
      .style("stroke-width", `${plugin.settings.gridWidth}px`)
      .style("opacity", 1);

    instance.on("after:draw", () => {
      console.log("draw");
      instance.root
        .selectAll(".tick line")
        .style("stroke", plugin.settings.gridColor)
        .style("stroke-width", `${plugin.settings.gridWidth}px`)
        .style("opacity", 1);
    });
  };
}
