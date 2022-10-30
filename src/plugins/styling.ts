import ObsidianFunctionPlot from "../main";
import type { chartType } from "../types";

export default function createStylingPlugin(plugin: ObsidianFunctionPlot) {
    return function stylingPlugin(instance: chartType) {
        if (!instance.listenerCount("after:draw")) {
            instance.on("after:draw", () => {
                const selection = instance.root.merge(instance.root.enter);

                selection
                    .select(".title")
                    .style("font-size", `${plugin.settings.titleFontSize}px`)
                    .style("fill", plugin.settings.fontColor);

                selection
                    .selectAll(".axis-label")
                    .style("font-size", `${plugin.settings.labelFontSize}px`)
                    .style("fill", plugin.settings.fontColor);

                selection
                    .selectAll(".origin")
                    .style("stroke", plugin.settings.lineColor)
                    .style("stroke-width", `${plugin.settings.lineWidth}px`)
                    .style("opacity", 1);

                selection
                    .selectAll(".tick line")
                    .style("stroke", plugin.settings.gridColor)
                    .style("stroke-width", `${plugin.settings.gridWidth}px`)
                    .style("opacity", 1);

                selection
                    .selectAll("line.text")
                    .style("fill", plugin.settings.fontColor)
                    .style("font-size", `${plugin.settings.scaleFontSize}px`);

                selection
                    .selectAll(".domain")
                    .style("stroke", plugin.settings.gridColor)
                    .style("stroke-width", `${plugin.settings.gridWidth}px`)
                    .style("opacity", 1);

                instance.root.merge(selection);
            });
            instance.emit("after:draw"); // self-emit event, remove after mauriciopoppe/function-plot#208
        }
    };
}
