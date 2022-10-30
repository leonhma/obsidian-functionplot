import { parseCodeBlock } from "../src/utils";

describe("parseCodeBlock", () => {
  test("header is parsed correctly", () => {
    const result = parseCodeBlock("---\ntitle: test\n---\n\n");
    expect(result).toStrictEqual([{ title: "test" }, []]);
  });
  test("functions are parsed correctly", () => {
    const result = parseCodeBlock("f(x) = x");
    expect(result).toStrictEqual([{}, ["f(x) = x"]]);
  });
});
