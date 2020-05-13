const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.svg$/, use: 'svg-inline-loader' }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}