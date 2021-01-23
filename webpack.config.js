module.exports = {
    entry: './scripts/faq-boxes.js',
    mode:'production',
    output: {
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            }
        ]
    }
}