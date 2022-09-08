import { ErrorLog } from "./src/common/types";

declare global {
  interface Console {
    everything: ErrorLog;
  }
}
