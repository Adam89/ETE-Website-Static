const path = require('path'); // path module access to all node.js methods

const config = {
	entry: './src/index.js', // entry point
	output: {
		path: path.resolve(__dirname, 'build'), // builds absolute path
		filename: 'bundle.js'
	}
	module:{
		rules: [
			{
				use:'babel-loader'
			}
		]
	}
};

//loaders are used to enhance webpacks features


module.exports = config;