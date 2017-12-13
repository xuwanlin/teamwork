let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/, loader: "babel-loader", exclude: /node_modules/, query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.(jpg|gif|png|svg|ttf|eot|woff|woff2)$/, loader: "url-loader"}
        ]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            //favicon:path.resolve('./src/images/favicon.ico')
        })
    ],
    devServer: {
        proxy: {
            '/api': {
                target: "http://localhost:3000",
            }
        },
    }
};