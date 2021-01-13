// webpack.config.js

// webpack needs to be explicitly required
const webpack = require('webpack')

// Webpack requires this to work with directories
const path = require('path')

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // mode: process.env.NODE_ENV,

    // path to entry paint
    entry: './src/index.js',

    // path and filename of the final output
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'sidebar-shortode-chiffres.js',
    },
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
    // },
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: 'css/fullcalendar.css',
    //     }),
    // ],
}
