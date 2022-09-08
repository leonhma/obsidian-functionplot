import ObsidianFunctionPlot from "../main";
import { MAX_LOG_LENGTH } from "./defaults";
import { renderError } from "./errors";
import { ErrorLog } from "./types";

declare global {
  const errorLog: ErrorLog;
}

export function setupLogging(plugin: ObsidianFunctionPlot | undefined) {
  if (console.everything === undefined) {
    console.everything = [];

    const TS = () => new Date().toLocaleString("sv", { timeZone: "UTC" }) + "Z";

    console.log("adding ev listeners");
    window.addEventListener("onerror", function (e: ErrorEvent) {
      try {
        console.log("error");
        if (console.everything.length == MAX_LOG_LENGTH) {
          console.everything.shift();
        }
        console.everything.push({
          type: "ERROR",
          time: TS(),
          msg: `${e.message}`,
        });
      } catch (e) {
        new Error(`Failed to capture error: ${e}`);
      }
    });
    window.addEventListener(
      "unhandledrejection",
      function (e: PromiseRejectionEvent) {
        try {
          console.log("unhandledrejection");
          if (console.everything.length == MAX_LOG_LENGTH) {
            console.everything.shift();
          }
          console.everything.push({
            type: "REJECT",
            time: TS(),
            msg: e.reason,
          });
        } catch (e) {
          new Error(`Failed to capture unhandled rejection: ${e}`);
        }
      }
    );
    // eslint-disable-next-line no-inner-declarations
    function hookLogType(logType: string) {
      const original = console[logType].bind(console);
      return function (...args: unknown[]) {
        if (console.everything.length == MAX_LOG_LENGTH) {
          console.everything.shift();
        }
        console.everything.push({
          type: logType.toUpperCase(),
          time: TS(),
          msg: Array.from(args).toString(),
        });
        original.apply(console, args);
      };
    }

    ["log", "error", "warn", "debug"].forEach((logType) => {
      console[logType] = hookLogType(logType);
    });
  }
}
