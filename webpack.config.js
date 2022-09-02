import sveltePreprocess from "svelte-preprocess";
import { fileURLToPath, URL } from 'url'
import pkg from 'webpack';
const { HotModuleReplacementPlugin } = pkg;


const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

export default {
    mode: prod ? 'production' : 'development',
    entry: './src/main.ts',
    devtool: !prod ? 'inline-source-map' : false,
    performance: {
        hints: false  // ignore this since the bundle is downloaded once then locally
    },
    module: {
        rules: [
            {
                test: /\.png$/,
                type: 'asset/inline'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            sourceMap: !prod
                        }
                    }
                }
            },
            {
                test: /\.(html|svelte)$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        compilerOptions: {
                            dev: !prod,
                            enableSourcemap: !prod
                        },
                        preprocess: sveltePreprocess({
                            sourceMap: !prod
                        }),
                        hotReload: !prod
                    },
                },
            },
        ],
    },
    plugins: !prod ? [new HotModuleReplacementPlugin()] : [],
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: {
        obsidian: 'commonjs obsidian'
    },
    output: {
        path: fileURLToPath(new URL('.', import.meta.url)),
        filename: 'main.js',
        libraryTarget: 'commonjs'
    }
};
