import { dirname } from "path";
import { fileURLToPath } from "url";
import preprocess from 'svelte-preprocess'

export default {
  mode: "production",
  entry: "./src/main.ts",
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
            preprocess: preprocess({

            })
          }
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
