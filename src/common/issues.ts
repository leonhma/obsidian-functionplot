import { DEFAULT_BUG_FORM_PROPS } from "./defaults";
import { BugFormProps, ErrorLog } from "./types";


/**
 * Wrapper for a GitHub issue
 */
export class BugForm {
    props: BugFormProps
    n_logs: number

    /**
     * Create a BugForm with prefilled fields
     * @param props The prefilled fields
     */
    constructor(props?: BugFormProps) {
        this.props = Object.assign({}, DEFAULT_BUG_FORM_PROPS, props)
        this.n_logs = 1
    }


    addLog(log: ErrorLog) {
        this.props.additional += `### Log ${this.n_logs}\n\n\`\`\`text\n`

        for (const { time, type, msg } of log) {
            this.props.additional += `${time}: ${type}: ${msg}\n`
        }

        this.props.additional += '```\n\n'
    }

    /**
     * Generate a url that encodes the props
     * @returns string, the URL to open the bug report
     */
    generateURL(): string {
        let url = 'https://github.com/leonhma/obsidian-functionplot/issues/new?labels=bug&template=BUG_REPORT.yml'
        for (const [key, value] of Object.entries(this.props)) {
            url += `&${key}=${value}`
        }
        return encodeURI(url)
    }
}
