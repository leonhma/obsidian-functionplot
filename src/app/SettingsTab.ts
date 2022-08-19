import { App, Notice, PluginSettingTab, Setting, ValueComponent } from "obsidian";
import ObsidianFunctionPlot from "../main"
import { DEFAULT_PLOT_PLUGIN_SETTINGS } from "../types";

export default class SettingsTab extends PluginSettingTab {
    plugin: ObsidianFunctionPlot;
    settingsInputs: Map<string, ValueComponent<string | number>>

    constructor(app: App, plugin: ObsidianFunctionPlot) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display() {
        this.settingsInputs = new Map();
        let { containerEl } = this;
        containerEl.empty();

        containerEl.createEl('h1', { text: 'Settings' })
        containerEl.createEl('h3', { text: 'Font Sizes' })

        new Setting(containerEl)
            .setName("Title Font Size")
            .setDesc("Font size used for the title.")
            .addSlider((slider) => {
                this.settingsInputs.set('titleFontSize', slider)
                slider
                    .setLimits(8, 40, 2)
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
                this.settingsInputs.set('scaleFontSize', slider)
                slider
                    .setLimits(4, 20, 1)
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
                this.settingsInputs.set('labelFontSize', slider)
                slider
                    .setLimits(4, 20, 1)
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
            .setDesc("Line width used for the domain- and origin-lines.")
            .addSlider((slider) => {
                this.settingsInputs.set('lineWidth', slider)
                slider
                    .setLimits(1, 4, 1)
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
                this.settingsInputs.set('gridWidth', slider)
                slider
                    .setLimits(1, 4, 1)
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
            }, text: 'Use any of the web formats (name, hex, rgb, rgba, ...) or css variables.'
        })

        new Setting(containerEl)
            .setName("Font Color")
            .setDesc("Color used for the title and labels. ")
            .addText((text) => {
                this.settingsInputs.set('fontColor', text)
                text
                    .setValue(this.plugin.settings.fontColor)
                    .onChange(async (value) => {
                        this.plugin.settings.fontColor = value;
                        await this.plugin.saveSettings();
                    })
            })

        new Setting(containerEl)
            .setName("Line Color")
            .setDesc("Color used for the domain- and origin-lines. ")
            .addText((text) => {
                this.settingsInputs.set('lineColor', text)
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
                this.settingsInputs.set('gridColor', text)
                text
                    .setValue(this.plugin.settings.gridColor)
                    .onChange(async (value) => {
                        this.plugin.settings.gridColor = value;
                        await this.plugin.saveSettings();
                    })
            })

        new Setting(containerEl).addButton((btn) => {
            btn.setButtonText('Reset Settings to Default')
                .setWarning()
                .onClick((_) => {
                    Object.assign(this.plugin.settings, DEFAULT_PLOT_PLUGIN_SETTINGS)
                    this.settingsInputs.forEach((input, key) => {
                        input.setValue(this.plugin.settings[key])
                    })
                    this.plugin.saveSettings()
                    new Notice('Obsidian Functionplot: Settings reset to default.')
                })
        }).addButton((btn) => {
            btn.setButtonText('Save')
                .setCta()
                .onClick((_) => {
                    new Notice('Obsidian Functionplot: Settings saved.')
                })
        })
    }
}
