const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
            chunks: ['FAQ'],
            minify: {
                collapseWhitespace: !isDev
            }
        }),

        new HtmlWebpackPlugin({
            filename: 'aboutUs.html',
            template: './aboutUs.html',
            chunks: ['aboutUs'],
            minify: {
                collapseWhitespace: !isDev
            }
        }),

        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
            {
                from: path.resolve(__dirname, 'src/assets/arrowDown.svg'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/arrowUp.svg'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/AS.png'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/burger.svg'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/DI.png'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/FAQpic.svg'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/ID.png'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/II.png'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/MS.png'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/NM.png'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/pic.svg'),
                to: path.resolve(__dirname, 'dist/assets')
            }
        ]})
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