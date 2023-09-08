const preprocess = require("svelte-preprocess");
const webpack = require("webpack");
const { readFileSync } = require("fs");
const { execSync } = require("child_process");

module.exports = (env) => {
  const isProd = env.production === true;
  const manifest = JSON.parse(readFileSync("manifest.json", "utf8"));
  const isCI = process.env.CI === "true";

  console.log("isCI: ", isCI);
  console.log("BUILD_LINK: ", process.env.BUILD_LINK);

  return {
    mode: isProd ? "production" : "development",
    entry: "./src/main.ts",
    performance: {
      hints: false,
    },
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000,
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
          test: /\.s?[ac]ss$/i,
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
        {
          test: /\.svg$/,
          type: "asset/source",
        },
        {
          test: /\.md$/,
          type: "asset/source",
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        BUILD_DATE: new Date(),
        BUILD_VERSION: JSON.stringify(
          isCI
            ? manifest.version
            : `${execSync("git rev-parse --short HEAD").toString().trim()}*`
        ),
        BUILD_LINK: JSON.stringify(process.env.BUILD_LINK || ""),
      }),
    ],
    resolve: {
      extensions: [".ts", ".js", ".svelte"],
    },
    externals: {
      obsidian: "commonjs obsidian",
    },
    output: {
      path: __dirname,
      filename: "main.js",
      libraryTarget: "commonjs",
    },
  };
};
