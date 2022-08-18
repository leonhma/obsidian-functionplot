import { App, PluginSettingTab, Setting } from "obsidian";
import ObsidianFunctionPlot from "../main"

export default class SettingsTab extends PluginSettingTab {

    plugin: ObsidianFunctionPlot;

    constructor(app: App, plugin: ObsidianFunctionPlot) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display() {
        let { containerEl } = this;
        containerEl.empty();

        containerEl.createEl('h1', { text: 'Settings' })
        containerEl.createEl('h3', { text: 'Font Sizes' })

        new Setting(containerEl)
            .setName("Title Font Size")
            .setDesc("Font size used for the title.")
            .addSlider((slider) => {
                slider
                    .setLimits(8, 48, 2)
                    .setValue(this.plugin.settings.titleFontSize)
                    .onChange(async (value) => {
                        this.plugin.settings.titleFontSize = value;
                        await this.plugin.saveSettings();
                    })
                    .setDynamicTooltip()
            })

        new Setting(containerEl)
            .setName("Scale Font Size")
            .setDesc("Font size used for the axis scales.")
            .addSlider((slider) => {
                slider
                    .setLimits(4, 24, 1)
                    .setValue(this.plugin.settings.scaleFontSize)
                    .onChange(async (value) => {
                        this.plugin.settings.scaleFontSize = value;
                        await this.plugin.saveSettings();
                    })
                    .setDynamicTooltip()
            })

        new Setting(containerEl)
            .setName("Label Font Size")
            .setDesc("Font size used for the axis labels.")
            .addSlider((slider) => {
                slider
                    .setLimits(6, 32, 1)
                    .setValue(this.plugin.settings.labelFontSize)
                    .onChange(async (value) => {
                        this.plugin.settings.labelFontSize = value;
                        await this.plugin.saveSettings();
                    })
                    .setDynamicTooltip()
            })

        containerEl.createEl('h3', { text: 'Line Widths' })

        new Setting(containerEl)
            .setName("Line Width")
            .setDesc("Line width used for the outer and 0-lines.")
            .addSlider((slider) => {
                slider
                    .setLimits(1, 8, 1)
                    .setValue(this.plugin.settings.lineWidth)
                    .onChange(async (value) => {
                        this.plugin.settings.lineWidth = value;
                        await this.plugin.saveSettings();
                    })
                    .setDynamicTooltip()
            })

        new Setting(containerEl)
            .setName("Grid Line Width")
            .setDesc("Line width used for the gridlines.")
            .addSlider((slider) => {
                slider
                    .setLimits(1, 8, 1)
                    .setValue(this.plugin.settings.gridWidth)
                    .onChange(async (value) => {
                        this.plugin.settings.gridWidth = value;
                        await this.plugin.saveSettings();
                    })
                    .setDynamicTooltip()
            })

        containerEl.createEl('h3', { attr: { style: 'margin-bottom: 0' }, text: 'Colors' })
        containerEl.createEl('p', {
            attr: {
                style: 'margin-top: 8px; font-size: 0.8em; color: var(--text-faint)'
            }, text: 'Use any of the web formats. (name, hex, rgb, rgba, ...)'
        })

        new Setting(containerEl)
            .setName("Font Color")
            .setDesc("Color used for the title and labels. ")
            .addText((text) => {
                text
                    .setValue(this.plugin.settings.fontColor)
                    .onChange(async (value) => {
                        this.plugin.settings.fontColor = value;
                        await this.plugin.saveSettings();
                    })
            })

        new Setting(containerEl)
            .setName("Line Color")
            .setDesc("Color used for the outer and 0-lines. ")
            .addText((text) => {
                text
                    .setValue(this.plugin.settings.lineColor)
                    .onChange(async (value) => {
                        this.plugin.settings.lineColor = value;
                        await this.plugin.saveSettings();
                    })
            })

        new Setting(containerEl)
            .setName("Grid Color")
            .setDesc("Color used for the gridlines. ")
            .addText((text) => {
                text
                    .setValue(this.plugin.settings.gridColor)
                    .onChange(async (value) => {
                        this.plugin.settings.gridColor = value;
                        await this.plugin.saveSettings();
                    })
            })
    }
}
