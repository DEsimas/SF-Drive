const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        FAQ: './src/scripts/faq-boxes.js',
        aboutUs: './src/scripts/aboutUsInit.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    }
}