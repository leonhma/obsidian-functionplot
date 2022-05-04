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
		'obsidian': 'obsidian'
	},
  	output: {
    	filename: 'main.js',
    	path: __dirname,
  	},
};
