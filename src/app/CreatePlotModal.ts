import { Editor, Modal, Setting } from "obsidian";
import {
  DEFAULT_PLOT_OPTIONS,
} from "../common/defaults";
import type { PlotOptions } from "../common/types";
import type ObsidianFunctionPlot from "../main";
import FunctionsList from "../components/CreatePlot/FunctionsList.svelte";
import functionPlot from "function-plot";

export default class CreatePlotModal extends Modal {
  options: PlotOptions;
  plugin: ObsidianFunctionPlot;
  editor: Editor;
  rendertarget: HTMLElement;

  constructor(plugin: ObsidianFunctionPlot, editor: Editor) {
    super(plugin.app);
    this.plugin = plugin;
    this.editor = editor;
  }

  reloadPreview() {
    if (!this.rendertarget) return;
    console.log(this.options)
    functionPlot(
      Object.assign({}, this.options, {target: this.rendertarget})
    )
  }

  async onOpen() {
    // fix modal size
    document
      .getElementsByClassName("modal")[0]
      .setAttribute(
        "style",
        "width: var(--max-modal-width); height: var(--max-modal-height);"
      );

    this.options = JSON.parse(JSON.stringify(DEFAULT_PLOT_OPTIONS)); // deepcopy to avoid side effects

    const { contentEl } = this;
    contentEl.empty();

    // Header
    contentEl.createEl("h1", { text: "Create a plot" });

    const flex = contentEl.createDiv({
      attr: { style: "display: flex; align-items: center" },
    });

    const settings = flex.createDiv();
    const preview = flex.createDiv({ attr: { style: "padding: 1em" } });
    this.rendertarget = preview.createDiv()
    
    preview.createEl("p", {
      text: "Preview - Zoom is disabled while in preview",
      attr: {
        style: "margin: 0 3em; font-size: 0.8em; color: var(--text-faint)",
      },
    });

    new Setting(settings).setName("Title").addText((text) => {
      text.onChange(async (value) => {
        this.options.title = value;
        this.reloadPreview();
      });
    });

    new Setting(settings).setName("Label X").addText((text) => {
      text.onChange(async (value) => {
        this.options.xAxis.label = value;
        this.reloadPreview();
      });
    });
    new Setting(settings).setName("Label Y").addText((text) => {
      text.onChange(async (value) => {
        this.options.yAxis.label = value;
        this.reloadPreview();
      });
    });

    /*const placeholders = ["X min", "X max", "Y min", "Y max"];

    const bounds = new Setting(settings).setName("Bounds");

    placeholders.forEach((placeholder, i) => {
      bounds.addText((text) => {
        text
          .setPlaceholder(placeholder)
          .onChange((value) => {
            if (value && !isNaN(+value)) {
              this.options.bounds[i] = +value;
              this.reloadPreview();
            } else {
              this.options.bounds[i] = DEFAULT_PLOT_OPTIONS.bounds[i];
              this.reloadPreview();
            }
          })
          .inputEl.setAttribute("style", "width: 4em");
      });
    });*/

    new Setting(settings).setName("Disable Zoom").addToggle((com) => {
      com.setValue(this.options.disableZoom);
      com.onChange(async (value) => {
        this.options.disableZoom = value;
        this.reloadPreview();
      });
    });

    new Setting(settings).setName("Enable Grid").addToggle((com) => {
      com.setValue(this.options.grid);
      com.onChange(async (value) => {
        this.options.grid = value;
        this.reloadPreview();
      });
    });

    const dataSetting = new Setting(settings)
      .setName("Data")
    dataSetting.settingEl.setAttribute("style", "display: block");
    
    new FunctionsList({
      target: dataSetting.controlEl,
      props: {
        options: this.options,
        reloadPreview: this.reloadPreview.bind(this),
      }
    })

    new Setting(contentEl)
      /*.addDropdown((com) => {
        com
          .addOptions(rendererOptions)
          .setValue(this.plugin.settings.defaultRenderer)
          .onChange((value: rendererType) => {
            this.renderer = value;
          });
      })*/
      .addButton((btn) => {
        btn
          .setButtonText("Plot")
          .setCta()
          .onClick(async () => {
           // await this.handleFinalPlotCreate(this.options);
          });
      });
  }

  /*
  async handleFinalPlotCreate(options: PlotOptions) {
    // render and insert chosen plot using renderer
    switch ("interactive") {
      case "interactive":
        renderPlotAsInteractive(this.plugin, this.editor, options);
        break;
      /*
      case "image":
        await renderPlotAsImage(this.plugin, this.editor, options);
        break; *//*
    }

    this.close();
  }
  */

  onClose() {
    this.contentEl.empty();
  }
}
