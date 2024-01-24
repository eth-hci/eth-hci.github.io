const webpack = require("webpack")
const path = require("path")

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, options: {
                    presets: [
                        ['@babel/preset-env']
                    ]
                }
            },
            {
                test: /\.pug$/,
                loader: '@webdiscus/pug-loader',
                options: {
                    method: 'compile'
                }
            },
            {
                test: /\.bib$/,
                loader: 'raw-loader'
            }
        ]
    },
    mode: 'development'
}