import { Plugin, Editor, Modal, App } from "obsidian";
import lorem from "./loremipsum.txt";

export default class ObsidianFunctionPlot extends Plugin {
  async onload(): Promise<void> {
    // register command for PlotModal
    this.addCommand({
      id: "insert-functionplot",
      name: "Plot a function",
      editorCallback: (editor: Editor) => {
        new FilledModal(this.app).open();
      },
    });
  }
}

class FilledModal extends Modal {
  constructor(app: App) {
    super(app);
  }

  onOpen() {
    let { contentEl } = this;
    const p = contentEl.createEl("p");
    p.setText(lorem);
    p.setAttr("style", "width: 100vw; height: 100vh;");
  }

  onClose() {
    let { contentEl } = this;
    contentEl.empty();
  }
}
