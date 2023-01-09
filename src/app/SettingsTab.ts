import {
  App,
  Notice,
  PluginSettingTab,
  Setting,
  ValueComponent,
} from "obsidian";
import type ObsidianFunctionPlot from "../main.js";
import { DEFAULT_PLUGIN_SETTINGS, rendererOptions } from "../common/defaults";
import type { PluginSettings, rendererType } from "../common/types";

export default class SettingsTab extends PluginSettingTab {
  plugin: ObsidianFunctionPlot;
  settingsInputs: Map<keyof PluginSettings, ValueComponent<unknown>>;

  constructor(app: App, plugin: ObsidianFunctionPlot) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    this.settingsInputs = new Map();
    const { containerEl } = this;
    containerEl.empty();

    containerEl.createEl("h1", { text: "Settings" });

    /*
     * Default Plot Options
     */

    containerEl.createEl("h3", { text: "Default Plot Options" });
    new Setting(containerEl)
      .setName("Default Render Type")
      .setDesc("The default renderer to use.")
      .addDropdown((com) => {
        this.settingsInputs.set("defaultRenderer", com);
        com
          .addOptions(rendererOptions)
          .setValue(this.plugin.settings.defaultRenderer)
          .onChange(async (value: rendererType) => {
            this.plugin.settings.defaultRenderer = value;
            await this.plugin.saveSettings();
          });
      });

    /*
     * Font Sizes
     */

    containerEl.createEl("h3", { text: "Font Sizes" });

    new Setting(containerEl)
      .setName("Title Font Size")
      .setDesc("Font size used for the title.")
      .addSlider((slider) => {
        this.settingsInputs.set("titleFontSize", slider);
        slider
          .setLimits(8, 40, 2)
          .setValue(this.plugin.settings.titleFontSize)
          .onChange(async (value) => {
            this.plugin.settings.titleFontSize = value;
            await this.plugin.saveSettings();
          })
          .setDynamicTooltip();
      });

    new Setting(containerEl)
      .setName("Scale Font Size")
      .setDesc("Font size used for the axis scales.")
      .addSlider((slider) => {
        this.settingsInputs.set("scaleFontSize", slider);
        slider
          .setLimits(4, 20, 1)
          .setValue(this.plugin.settings.scaleFontSize)
          .onChange(async (value) => {
            this.plugin.settings.scaleFontSize = value;
            await this.plugin.saveSettings();
          })
          .setDynamicTooltip();
      });

    new Setting(containerEl)
      .setName("Label Font Size")
      .setDesc("Font size used for the axis labels.")
      .addSlider((slider) => {
        this.settingsInputs.set("labelFontSize", slider);
        slider
          .setLimits(4, 20, 1)
          .setValue(this.plugin.settings.labelFontSize)
          .onChange(async (value) => {
            this.plugin.settings.labelFontSize = value;
            await this.plugin.saveSettings();
          })
          .setDynamicTooltip();
      });

    /*
     * Line Widths
     */

    containerEl.createEl("h3", { text: "Line Widths" });

    new Setting(containerEl)
      .setName("Line Width")
      .setDesc("Line width used for the domain- and origin-lines.")
      .addSlider((slider) => {
        this.settingsInputs.set("lineWidth", slider);
        slider
          .setLimits(1, 4, 1)
          .setValue(this.plugin.settings.lineWidth)
          .onChange(async (value) => {
            this.plugin.settings.lineWidth = value;
            await this.plugin.saveSettings();
          })
          .setDynamicTooltip();
      });

    new Setting(containerEl)
      .setName("Grid Line Width")
      .setDesc("Line width used for the gridlines.")
      .addSlider((slider) => {
        this.settingsInputs.set("gridWidth", slider);
        slider
          .setLimits(1, 4, 1)
          .setValue(this.plugin.settings.gridWidth)
          .onChange(async (value) => {
            this.plugin.settings.gridWidth = value;
            await this.plugin.saveSettings();
          })
          .setDynamicTooltip();
      });

    /*
     * Colors
     */

    containerEl.createEl("h3", {
      attr: { style: "margin-bottom: 0" },
      text: "Colors",
    });
    containerEl.createEl("p", {
      attr: {
        style: "margin-top: 8px; font-size: 0.8em; color: var(--text-faint)",
      },
      text: "Use any of the web formats (name, hex, rgb, rgba, ...) or css variables.",
    });

    new Setting(containerEl)
      .setName("Font Color")
      .setDesc("Color used for the title and labels.")
      .addText((text) => {
        this.settingsInputs.set("fontColor", text);
        text
          .setValue(this.plugin.settings.fontColor)
          .onChange(async (value) => {
            this.plugin.settings.fontColor = value;
            await this.plugin.saveSettings();
          });
      });

    new Setting(containerEl)
      .setName("Line Color")
      .setDesc("Color used for the domain- and origin-lines.")
      .addText((text) => {
        this.settingsInputs.set("lineColor", text);
        text
          .setValue(this.plugin.settings.lineColor)
          .onChange(async (value) => {
            this.plugin.settings.lineColor = value;
            await this.plugin.saveSettings();
          });
      });

    new Setting(containerEl)
      .setName("Grid Color")
      .setDesc("Color used for the gridlines.")
      .addText((text) => {
        this.settingsInputs.set("gridColor", text);
        text
          .setValue(this.plugin.settings.gridColor)
          .onChange(async (value) => {
            this.plugin.settings.gridColor = value;
            await this.plugin.saveSettings();
          });
      });

    /*
     *  Reset Settings
     */

    new Setting(containerEl).addButton((btn) => {
      btn
        .setButtonText("Reset Settings to Default")
        .setWarning()
        .onClick(() => {
          Object.assign(this.plugin.settings, DEFAULT_PLUGIN_SETTINGS);
          for (const [key, input] of this.settingsInputs) {
            input.setValue(this.plugin.settings[key]);
          }
          this.plugin.saveSettings();
          new Notice("Settings reset to default");
        });
    });
  }
}
