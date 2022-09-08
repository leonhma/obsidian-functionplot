import ErrorViewModal from "../app/ErrorViewModal";
import ObsidianFunctionPlot from "../main";
import { DEFAULT_ERROR_VIEW_PROPS } from "./defaults";
import { BugForm } from "./issues";
import { ErrorViewProps } from "./types";

/**
 * Show an error-modal with a qr code and link.
 * @param plugin A reference to the plugin
 * @param props The props for the modal and report
 */
export function renderError(
  plugin: ObsidianFunctionPlot,
  props_?: Partial<ErrorViewProps>
) {
  const props: ErrorViewProps = Object.assign(
    {},
    DEFAULT_ERROR_VIEW_PROPS,
    props_
  );
  const bugForm = new BugForm({
    title: props.heading,
    "what-happened": props.message,
  });
  bugForm.addLog(console.everything);
  props.link = bugForm.generateURL();
  new ErrorViewModal(plugin, props).open();
}
