import { fileURLToPath, URL } from "url";
import pkg from "webpack";
const { DefinePlugin, EnvironmentPlugin } = pkg;

export default async function (env) {
  const mode = env.mode || "development";
  const prod = mode == "production";

  return {
    mode: prod ? "production" : "development",
    entry: "./src/main.ts",
    devtool: mode === "development" ? "inline-source-map" : "source-map",
    performance: {
      hints: false, // ignore size since the bundle is run locally
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
          },
        }
      ],
    },
    ignoreWarnings: [/Failed to parse source map/],
    plugins: [
      new EnvironmentPlugin({
        SENTRY_DSN: "",
      }),
      new DefinePlugin({
        __SENTRY_DEBUG__: !prod,
      }),
    ],
    resolve: {
      extensions: [".ts", ".js"],
    },
    externals: {
      obsidian: "commonjs obsidian",
    },
    output: {
      path: fileURLToPath(new URL(".", import.meta.url)),
      filename: "main.js",
      libraryTarget: "commonjs",
    },
  };
}
