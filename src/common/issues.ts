/* eslint no-console: "error" */

import { DEFAULT_BUG_FORM_PROPS } from "./defaults";
import { BugFormProps, ErrorLog } from "./types";

/**
 * Wrapper for a GitHub issue
 */
export class BugForm {
  props: BugFormProps;

  /**
   * Create a BugForm with prefilled fields
   * @param props The prefilled fields
   */
  constructor(props?: Partial<BugFormProps>) {
    this.props = Object.assign({}, DEFAULT_BUG_FORM_PROPS, props);
  }

  addLog(log: ErrorLog) {
    if (!log) return;
    this.props.additional += `### Log\n\n\`\`\`text\n`;

    for (const { time, type, msg } of log) {
      this.props.additional += `${time}: ${type}: ${msg}\n`;
    }

    this.props.additional += "```\n\n";
  }

  /**
   * Generate a url that encodes the props
   * @returns string, the URL to open the bug report
   */
  generateURL(): string {
    let url =
      "https://github.com/leonhma/obsidian-functionplot/issues/new?labels=bug&template=BUG_REPORT.yml";
    for (const [key, value] of Object.entries(this.props)) {
      url += `&${key}=${encodeURIComponent(value)}`;
    }
    return url;
  }
}
