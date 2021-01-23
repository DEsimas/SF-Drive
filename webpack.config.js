const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        FAQ: './src/scripts/faq-boxes.js',
        aboutUs: './src/scripts/aboutUsInit.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'FAQ.html',
            template: './src/FAQ.html'
        }),

        new HtmlWebpackPlugin({
            filename: 'aboutUs.html',
            template: './src/aboutUs.html'
        }),

        new CleanWebpackPlugin()
    ]
}