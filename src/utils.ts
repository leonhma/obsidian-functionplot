import { Editor } from "obsidian";
import ObsidianFunctionPlot, { createPlot } from "./main";
import { PlotOptions } from "./types";
import {toPng} from "html-to-image"


/**
 * Parse the options into code-block form, to insert into the editor.
 * @param options The options for the plot
 * @returns The text to insert
 */
export async function renderAsInteractive(options: PlotOptions): Promise<string> {
    return `
\`\`\`functionplot
---
title: ${options.title}
xLabel: ${options.xLabel}
yLabel: ${options.yLabel}
bounds: [${options.bounds}]
disableZoom: ${options.disableZoom}
grid: ${options.grid}
---
${(options.functions ?? []).join('\n')}
\`\`\`
`;
}

/**
 * Render the plot as an image element using a data url.
 * @param options The options for the plot
 * @param plugin A reference to the plugin (for accessing the settings)
 * @returns The text to insert
 */
export async function renderAsImage(options: PlotOptions, plugin: ObsidianFunctionPlot): Promise<string> {
    const htmlTarget = document.createElement('div')
    await createPlot(options, htmlTarget, plugin)
    const text = `
<img alt="Obsidian Functionplot Plot. Name: ${options.title}, X-Label: ${options.xLabel}, Y-Label: ${options.yLabel}, Functions: ${(options.functions ?? []).join('\n')}."src="${await toPng(htmlTarget)}">
`
    htmlTarget.remove()
    return text
}

/**
 * Insert the text as a new paragraph (newline before and after), and place the active cursor below.
 * @param editor The editor element
 * @param text The text to place
 */
export async function insertParagraphAtCursor(editor: Editor, text: string) {
    let currentLineNo = editor.getCursor().line
    let currentLine = editor.getLine(currentLineNo)
    if (!currentLine.endsWith('\n')) {
        editor.setLine(currentLineNo, currentLine + '\n')
        currentLineNo++
    }

    let minLineNo = currentLineNo
    if (minLineNo !== 0) {
        let nextLine = editor.getLine(minLineNo/* - 1*/)
        while (minLineNo > 0 && nextLine == '') {
            minLineNo--
            if (minLineNo === 0) break
            nextLine = editor.getLine(minLineNo - 1)
        }
    }

    const lastLineNo = editor.lastLine()
    let maxLineNo = currentLineNo
    while (maxLineNo < lastLineNo && (editor.getLine(maxLineNo + 1) == '')) {
        maxLineNo++
    }

    editor.replaceRange(text, { line: minLineNo, ch: 0 }, { line: maxLineNo, ch: 0 })
}

