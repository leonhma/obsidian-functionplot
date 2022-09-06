import sveltePreprocess from "svelte-preprocess";
import { fileURLToPath, URL } from 'url'


const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

export default {
    mode: prod ? 'production' : 'development',
    entry: './src/main.ts',
    devtool: !prod ? 'inline-source-map' : false,
    performance: {
        hints: false  // ignore size since the bundle is run locally
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
                            sourceMap: !prod,
                            inlineSources: !prod
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
                        onwarn: (warning, handler) => {
                            const { code, frame } = warning;
                            if (code === "css-unused-selector")
                                return;

                            handler(warning);
                        },
                        preprocess: sveltePreprocess({
                            sourceMap: !prod
                        }),
                    },
                },
            },
        ],
    },
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
