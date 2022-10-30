import { parse } from 'yaml';

export function parseYaml(text: string): any {
    return parse(text);
}
