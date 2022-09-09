import { Modal, Notice, Setting } from "obsidian";

export default class CreatePlotModal extends Modal {
  constructor(plugin) {
    super(plugin.app);
  }

  async onOpen() {
    const { contentEl } = this;
    contentEl.empty();

    contentEl.createEl("h1", { text: "Feedback" });

    new Setting(contentEl).addButton((button) => {
      button
        .setButtonText("Submit")
        .setCta()
        .onClick(() => {
          this.close();
          new Notice("Thank you for your feedback!");
        });
    });
  }
}
