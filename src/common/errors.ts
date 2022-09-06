import ErrorViewModal from "../components/ErrorViewModal"
import ObsidianFunctionPlot from "../main"
import { ErrorViewProps } from "./types"

/**
 * Show an error-modal with a qr code and link.
 * @param plugin A reference to the plugin
 * @param props The props to pass to the component
 */
export function renderError(plugin: ObsidianFunctionPlot, props?: Partial<ErrorViewProps>) {
    new ErrorViewModal(plugin, props).open()
}
