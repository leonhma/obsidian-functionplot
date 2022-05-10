module.exports = {
    mode: "production",
    entry: './src/main.ts',
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
        obsidian: 'commonjs obsidian'
    },
    output: {
        path: __dirname,
        filename: 'main.js',
        libraryTarget: 'commonjs'
    }
};
