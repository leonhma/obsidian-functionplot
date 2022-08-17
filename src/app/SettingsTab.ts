import { App, PluginSettingTab, Setting } from "obsidian";
import ObsidianFunctionPlot from "../main"

export default class SettingsTab extends PluginSettingTab {

    plugin: ObsidianFunctionPlot;

    constructor(app: App, plugin: ObsidianFunctionPlot) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display() {
        // @ts-ignore
        let { containerEl: contentEl } = this;
        console.log(contentEl)
        contentEl.empty();

        contentEl.createEl('h1', { text: 'Settings' })
        contentEl.createEl('h3', { text: 'Font Sizes' })

        new Setting(contentEl)
            .setName("Title Font Size")
            .setDesc("Font size used for the title.")
            .addSlider((slider) => {
                slider
                    .setLimits(8, 48, 2)
                    .setValue(this.plugin.settings.titleFontSize)
                    .onChange(async (value) => {
                        this.plugin.settings.titleFontSize = value;
                    })
                    .setDynamicTooltip()
            })

        new Setting(contentEl)
            .setName("Scale Font Size")
            .setDesc("Font size used for the axis scales.")
            .addSlider((slider) => {
                slider
                    .setLimits(4, 24, 1)
                    .setValue(this.plugin.settings.scaleFontSize)
                    .onChange(async (value) => {
                        this.plugin.settings.scaleFontSize = value;
                    })
                    .setDynamicTooltip()
            })

        new Setting(contentEl)
            .setName("Label Font Size")
            .setDesc("Font size used for the axis labels.")
            .addSlider((slider) => {
                slider
                    .setLimits(6, 32, 1)
                    .setValue(this.plugin.settings.labelFontSize)
                    .onChange(async (value) => {
                        this.plugin.settings.labelFontSize = value;
                    })
                    .setDynamicTooltip()
            })

        contentEl.createEl('h3', { text: 'Line Widths' })

        new Setting(contentEl)
            .setName("Line Width")
            .setDesc("Line width used for the outer and 0-lines.")
            .addSlider((slider) => {
                slider
                    .setLimits(1, 8, 1)
                    .setValue(this.plugin.settings.lineWidth)
                    .onChange(async (value) => {
                        this.plugin.settings.lineWidth = value;
                    })
                    .setDynamicTooltip()
            })

        new Setting(contentEl)
            .setName("Grid Line Width")
            .setDesc("Line width used for the gridlines.")
            .addSlider((slider) => {
                slider
                    .setLimits(1, 8, 1)
                    .setValue(this.plugin.settings.gridWidth)
                    .onChange(async (value) => {
                        this.plugin.settings.gridWidth = value;
                    })
                    .setDynamicTooltip()
            })

        contentEl.createEl('h3', { attr: { style: 'margin-bottom: 0' }, text: 'Colors' })
        contentEl.createEl('p', {
            attr: {
                style: 'margin-top: 8px; font-size: 0.8em; color: var(--text-faint)' }, text: 'Use #rrggbb format.' })

        new Setting(contentEl)
            .setName("Font Color")
            .setDesc("Color used for the title and labels. ")
            .addText((text) => {
                text
                    .setValue(this.plugin.settings.fontColor)
                    .onChange(async (value) => {
                        if (value.length === 7 && value[0] === '#') {
                            this.plugin.settings.fontColor = value;
                        }
                    })
            })

        new Setting(contentEl)
            .setName("Line Color")
            .setDesc("Color used for the outer and 0-lines. ")
            .addText((text) => {
                text
                    .setValue(this.plugin.settings.lineColor)
                    .onChange(async (value) => {
                        if (value.length === 7 && value[0] === '#') {
                            this.plugin.settings.lineColor = value;
                        }
                    })
            })

        new Setting(contentEl)
            .setName("Grid Color")
            .setDesc("Color used for the gridlines. ")
            .addText((text) => {
                text
                    .setValue(this.plugin.settings.gridColor)
                    .onChange(async (value) => {
                        if (value.length === 7 && value[0] === '#') {
                            this.plugin.settings.gridColor = value;
                        }
                    })
            })
    }
}
