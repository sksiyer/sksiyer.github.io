const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map", // any "source-map"-like devtool is possible,
    plugins: [
        new HtmlWebpackPlugin({
            favicon: 'src/img/favicon.ico'
        })
    ],
    // build: {
    //     test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
    //     loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
    // },
    module: {
        rules: [
            {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }]
        }]
    },
};