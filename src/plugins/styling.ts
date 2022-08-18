import ObsidianFunctionPlot from "../main"
import type { chartType } from "../types"

export default function createStylingPlugin(plugin: ObsidianFunctionPlot) {
    return function stylingPlugin(instance: chartType) {
        console.log('registering styling plugin')
        if (!instance.listenerCount('after:draw')) {
            instance.on('after:draw', () => {
                console.log('after:draw')
                console.log(plugin.settings)
                instance.root.selectAll('.title')
                    .attr('font-size', plugin.settings.titleFontSize)
                    .attr('fill', plugin.settings.fontColor)
                console.log('applied styles')
            })
        }

    }
}
