import { Modal } from "obsidian";
import ErrorView from "./ErrorView.svelte";
import { ErrorViewProps  } from "../common/types";
import ObsidianFunctionPlot from "../main";
import { DEFAULT_ERROR_VIEW_PROPS } from "../common/defaults";

export default class ErrorViewModal extends Modal {
    component
    props: ErrorViewProps

    constructor(
        plugin: ObsidianFunctionPlot,
        props: Partial<ErrorViewProps>
    ) {
        super(plugin.app);
        this.props = Object.assign({}, DEFAULT_ERROR_VIEW_PROPS, props)
    }

    async onOpen() {
        this.component = new ErrorView({
            target: this.contentEl,
            props: this.props
        })
    }

    async onClose() {
        this.component.$destroy()
    }
}
