const path = require('path');

module.exports = {
    mode: "production",
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
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
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: {
        obsidian: 'obsidian'
    },
    output: {
        path: path.resolve(__dirname, ''),  // dist
        filename: 'main.js',
    },
};
