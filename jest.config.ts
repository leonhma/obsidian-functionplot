console.log("jest config loaded");

export default {
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.+(ts)"],
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
