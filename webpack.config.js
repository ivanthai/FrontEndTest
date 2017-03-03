var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './client/main.js',
    output: { path: __dirname+ '/public/javascripts', filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ],
        resolve: {
            extensions: ['', '.js', '.jsx', '.css']
        }
    },
};