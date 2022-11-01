import { parse } from "yaml";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export function parseYaml(text: string): any {
  return parse(text);
}
