const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        port: 4200,
        hot:true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
                collapseWhitespace: !isDev
            }
        }),

        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
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
            },
            {
                from: path.resolve(__dirname, 'src/assets/SkillDriveLogo.svg'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/VK.svg'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/insta.svg'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/facebook.svg'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/Authorization.svg'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/backArrow.svg'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/cross.svg'),
                to: path.resolve(__dirname, 'dist/assets')
            },
            {
                from: path.resolve(__dirname, 'src/assets/recImage.svg'),
                to: path.resolve(__dirname, 'dist/assets')
            }
        ]})
    ],
    module: {
        rules:[
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options:{
                        publicPath: './'
                    }
                }, 'css-loader', 'sass-loader']
            },
            {
                test: /\.ttf$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
}