module.exports = {
	entry: './src/index.ts',
	mode: 'production',
  	module: {
    	rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
    	],
  	},
  	resolve: {
    	extensions: ['.tsx', '.ts', '.js'],
	},
	externals: {
		'obsidian': {
			commonjs: 'obsidian',
			commonjs2: 'obsidian',
			amd: 'obsidian',
			root: '_'
		}
	},
  	output: {
    	filename: 'main.js',
    	path: __dirname,
  	},
};
