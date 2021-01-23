const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        FAQ: './scripts/faq-boxes.js',
        aboutUs: './scripts/aboutUsInit.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'FAQ.html',
            template: './FAQ.html',
            minify: {
                collapseWhitespace: !isDev
            }
        }),

        new HtmlWebpackPlugin({
            filename: 'aboutUs.html',
            template: './aboutUs.html',
            minify: {
                collapseWhitespace: !isDev
            }
        }),

        new CleanWebpackPlugin()
    ],
    module: {
        rules:[
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.ttf$/,
                use: ['file-loader']
            }
        ]
    }
}