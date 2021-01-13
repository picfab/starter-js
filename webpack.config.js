// webpack.config.js

// Webpack requires this to work with directories
const path = require('path')

module.exports = {
    // path to entry paint
    entry: './src/index.js',

    // path and filename of the final output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        ],
    },

    // default mode is production
    mode: 'development',
}
