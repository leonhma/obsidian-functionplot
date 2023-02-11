import { dirname } from "path";
import { fileURLToPath } from "url";
import preprocess from "svelte-preprocess";
import pkg from "webpack";
const { DefinePlugin } = pkg;
import { execSync } from "child_process";
import { readFileSync } from "fs";

export default (env) => {
  const isProd = env.production === true;
  const commitSHA = execSync("git rev-parse --short HEAD").toString().trim();
  const isCI = process.env.CI === "true";
  const manifest = JSON.parse(readFileSync("manifest.json", "utf8"));

  return {
    mode: isProd ? "production" : "development",
    entry: "./src/main.ts",
    performance: {
      hints: false,
    },
    devtool: isProd ? false : "inline-source-map",
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(html|svelte)$/,
          use: {
            loader: "svelte-loader",
            options: {
              preprocess: preprocess({}),
            },
          },
        },
        {
          // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
          test: /node_modules\/svelte\/.*\.mjs$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
    plugins: [
      new DefinePlugin({
        'process.env.BUILD_DATE': new Date(),
        'process.env.BUILD_VERSION': JSON.stringify(
          isCI ? manifest.version : `${commitSHA}+`
        ),
      }),
    ],
    resolve: {
      extensions: [".ts", ".js", ".svelte"],
    },
    externals: {
      obsidian: "commonjs obsidian",
    },
    output: {
      path: dirname(fileURLToPath(import.meta.url)),
      filename: "main.js",
      libraryTarget: "commonjs",
    },
  };
};
