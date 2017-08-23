const path = require('path')


module.exports = {
	// webpack folder's entry js -excluded from jekyll's build process
	  entry: './webpack/entry.js',
	  output: {
	  	//put the generated file in the assets folder so jekyll will grab it
	  	path: path.resolve('src', './js'),
	  	filename: 'bundle.js'
	  },
	  module: {
	  	loaders: [
	  	  {
	  	  	test: /\.jsx?$/,
	  	  	exclude: /(node_modules)/,
	  	  	loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
	  	  	query: {
	  	  		presets: ['react']
	  	  	}
	  	  }
	  	]
	}
};