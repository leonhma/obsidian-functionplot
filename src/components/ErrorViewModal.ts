import { App, Modal } from "obsidian";
import ErrorView from "./ErrorView.svelte";


interface ErrorViewProps {
    heading: string;
    message: string;
    link: string
}

export default class ErrorViewModal extends Modal {
    component
    props: ErrorViewProps

    constructor(
        app: App,
        props: ErrorViewProps
    ) {
        super(app);
        this.props = props
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
