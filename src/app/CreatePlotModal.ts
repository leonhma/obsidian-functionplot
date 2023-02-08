import { Editor, Modal } from "obsidian";
import type { PlotInputs } from "../common/types";
import type ObsidianFunctionPlot from "../main";
import PlotModal from "../components/PlotModal/PlotModal.svelte";
import { DEFAULT_PLOT_INPUTS } from "../common/defaults";
import { insertPlot } from "../common/utils";

export default class CreatePlotModal extends Modal {
  plugin: ObsidianFunctionPlot;
  editor: Editor;

  constructor(plugin: ObsidianFunctionPlot, editor: Editor) {
    super(plugin.app);
    this.plugin = plugin;
    this.editor = editor;
  }

  async onOpen() {
    this.titleEl.setText("Create a Plot");
    this.modalEl.addClass("fplt-modal");
    // attach svelte PlotModal component
    new PlotModal({
      target: this.contentEl,
      props: {
        options: Object.assign(
          JSON.parse(JSON.stringify(DEFAULT_PLOT_INPUTS)),
          { renderer: this.plugin.settings.defaultRenderer } // assign default renderer as initial dropdown state
        ),
        plugin: this.plugin,
        submit: (options: PlotInputs) => {
          insertPlot(this.plugin, this.editor, options);
          this.close();
        },
      },
    });
  }
}
