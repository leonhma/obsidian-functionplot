import type { FunctionPlotDatum } from "function-plot/dist/types";
import { Editor, Modal, Setting } from "obsidian";
import {
  DEFAULT_FUNCTION_OPTIONS,
  DEFAULT_PLOT_OPTIONS,
  FUNCTION_CASES,
} from "../common/defaults";
import type { PlotOptions, rendererType, Line } from "../common/types";
import type ObsidianFunctionPlot from "../main";
import { createPlot, renderPlotAsInteractive } from "../common/utils";
import type { Chart } from "function-plot";

export default class CreatePlotModal extends Modal {
  options: PlotOptions;
  plugin: ObsidianFunctionPlot;
  editor: Editor;
  plot: Chart;
  renderer: rendererType;

  constructor(plugin: ObsidianFunctionPlot, editor: Editor) {
    super(plugin.app);
    this.plugin = plugin;
    this.editor = editor;
    this.renderer = this.plugin.settings.defaultRenderer;
  }

  /**
   * Reload the preview using internal functions. Zooming doesn't work here.
   * @returns A Promise
   */
  reloadPreview() {
    if (!this.plot) return;
    // update values
    this.plot.options.title = this.options.title;
    this.plot.options.xAxis.label = this.options.xLabel;
    this.plot.options.yAxis.label = this.options.yLabel;
    this.plot.options.xAxis.domain = this.options.bounds.slice(0, 2);
    this.plot.options.yAxis.domain = this.options.bounds.slice(2, 4);
    this.plot.options.grid = this.options.grid;
    this.plot.options.data = this.options.functions.map(
      (line): FunctionPlotDatum => {
        // use polyline by default
        const lineProperties: Line = { graphType: "polyline" };

        line.split("@").forEach((property) => {
          const tup = property.split("=");
          const value = tup[1].trim();
          lineProperties[tup[0].trim()] = value.startsWith("[")
            ? JSON.parse(value)
            : value;
        });

        return lineProperties;
      }
    );
    // redirect errors within function-plot to debug
    try {
      this.plot.build();
    } catch (e) {
      console.debug(e);
    }
  }

  computeStates(cases, options) {
    const states = [];
    for (const [test] of cases) {
      states.push(test(options));
    }
    return states;
  }

  async onOpen() {
    this.options = JSON.parse(JSON.stringify(DEFAULT_PLOT_OPTIONS)); // deepcopy to avoid side effects

    const { contentEl } = this;
    contentEl.empty();

    // Header
    contentEl.createEl("h1", { text: "Plot a function" });

    const flex = contentEl.createDiv({
      attr: { style: "display: flex; align-items: center" },
    });

    const settings = flex.createDiv();
    const preview = flex.createDiv({ attr: { style: "padding: 1em" } });
    this.plot = await createPlot(
      Object.assign({}, this.options, { disableZoom: true }),
      preview.createDiv(),
      this.plugin
    );
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
        this.options.xLabel = value;
        this.reloadPreview();
      });
    });
    new Setting(settings).setName("Label Y").addText((text) => {
      text.onChange(async (value) => {
        this.options.yLabel = value;
        this.reloadPreview();
      });
    });

    const placeholders = ["X min", "X max", "Y min", "Y max"];

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
              console.log(
                `resetting ${i} to default ${DEFAULT_PLOT_OPTIONS.bounds[i]}`
              );
              this.options.bounds[i] = DEFAULT_PLOT_OPTIONS.bounds[i];
              this.reloadPreview();
            }
          })
          .inputEl.classList.add("function-plot-numberinput");
      });
    });

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

    const functionsSetting = new Setting(settings)
      .setName("Functions")
      .setDesc("Functions to plot.");
    functionsSetting.settingEl.setAttribute("style", "display: block");
    const functionsControlEl = functionsSetting.controlEl;
    functionsControlEl.classList.value = "function-plot-functions-container";
    const functionsList = functionsControlEl.createDiv({
      attr: { class: "function-plot-functions-list" },
    });

    functionsControlEl.createDiv(
      { attr: { class: "function-plot-functions-add" } },
      (el) => {
        new Setting(el).addButton((btn) => {
          btn
            .setButtonText("Add function")
            .setIcon("plus")
            .onClick(async () => {
              const id = Math.random().toString(36).substring(2, 9);
              const options = Object.assign(
                JSON.parse(JSON.stringify(DEFAULT_FUNCTION_OPTIONS)),
                { id }
              );
              const prevStates = this.computeStates(FUNCTION_CASES, options);

              new Setting(functionsList).addDropdown((com) => {
                com
                  .addOptions({
                    linear: "linear",
                    vector: "vector",
                    polar: "polar",
                    points: "points",
                  })
                  .setValue(options.fnType)
                  .onChange((value) => {
                    options.fnType = value;
                  });
              });
            });
        });
      }
    );

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
            await this.handleFinalPlotCreate(this.options);
          });
      });
  }

  async handleFinalPlotCreate(options: PlotOptions) {
    // render and insert chosen plot using renderer
    switch (this.renderer) {
      case "interactive":
        renderPlotAsInteractive(this.plugin, this.editor, options);
        break;
      /*
      case "image":
        await renderPlotAsImage(this.plugin, this.editor, options);
        break; */
    }

    this.close();
  }

  onClose() {
    const { contentEl } = this;
    contentEl.empty();
    this.plot = null;
  }
}
