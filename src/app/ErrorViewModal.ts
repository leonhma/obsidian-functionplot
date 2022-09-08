import { Modal } from "obsidian";
import ErrorView from "../components/ErrorView.svelte";
import { ErrorViewProps } from "../common/types";
import ObsidianFunctionPlot from "../main";

export default class ErrorViewModal extends Modal {
  component;
  props: ErrorViewProps;

  constructor(plugin: ObsidianFunctionPlot, props: ErrorViewProps) {
    super(plugin.app);
    this.props = props;
  }

  async onOpen() {
    this.component = new ErrorView({
      target: this.contentEl,
      props: this.props,
    });
  }

  async onClose() {
    this.component.$destroy();
  }
}
