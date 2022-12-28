import { type MarkdownPostProcessorContext, Plugin, Editor } from "obsidian";
import CreatePlotModal from "./app/CreatePlotModal";
import SettingsTab from "./app/SettingsTab";
import { createPlot, parseCodeBlock } from "./common/utils";
import type { PlotOptions, PluginSettings } from "./common/types";
import {
  DEFAULT_PLOT_OPTIONS,
  DEFAULT_PLUGIN_SETTINGS,
} from "./common/defaults";
import './styles.scss'

export default class ObsidianFunctionPlot extends Plugin {
  settings: PluginSettings;

  async onload(): Promise<void> {
    // load settings
    await this.loadSettings();

    // add settings tab
    this.addSettingTab(new SettingsTab(this.app, this));
    // register command for PlotModal
    this.addCommand({
      id: "insert-functionplot",
      name: "Plot a function",
      editorCallback: (editor: Editor) => {
        new CreatePlotModal(this, editor).open();
      },
    });
    // register code block renderer
    this.registerMarkdownCodeBlockProcessor(
      "functionplot",
      this.createFunctionPlotHandler(this)
    );
  }

  async loadSettings() {
    this.settings = Object.assign(
      {},
      DEFAULT_PLUGIN_SETTINGS,
      await this.loadData()
    );
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  /**
   * A closure creating a code-block handler that also has access to the plugin object
   * through the outer function's scope.
   * @param plugin The plugin
   * @returns The code-block handler
   */
  createFunctionPlotHandler(plugin: ObsidianFunctionPlot) {
    return async (
      source: string,
      el: HTMLElement,
      _ctx: MarkdownPostProcessorContext /* eslint-disable-line no-unused-vars, @typescript-eslint/no-unused-vars */
    ) => {
      const [header, functions] = parseCodeBlock(source);
      const options: PlotOptions = Object.assign(
        {},
        DEFAULT_PLOT_OPTIONS,
        header,
        { functions }
      );
      await createPlot(options, el, plugin);
    };
  }
}
