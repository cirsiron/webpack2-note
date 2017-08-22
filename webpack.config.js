const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ejsPlugin = require('ejs-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.js',
        a: './src/a.js',
        b: './src/b.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "http://cdn.ex.com",
        filename: 'js/[name].[hash].js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    externals: {
        "jquery": "jQuery"
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]'
                }]
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader',
                query: {
                    variable: "data",
                    interpolate: '\\{\\{(.+?)\\}\\}',
                    evaluate: '\\[\\[(.+?)\\]\\]'
                }
            },
            {
                test: /\.less$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            scriptMath: true,
                            noIeCompat: true
                        }
                    },
                    {
                        loader: 'autoprefixer-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: `app.html`,
            title: 'app.html',
            template: './src/app.html',
            inject: "header",
            chunks: ["app"]
        }),
        new HtmlWebpackPlugin({
            filename: `a.html`,
            title: 'Output Management',
            inject: "header",
            template: './src/app.html',
            chunks: ["app", "a"]
        }),
        new HtmlWebpackPlugin({
            filename: `b.html`,
            title: 'Output11 Management',
            inject: "header",
            template: './src/app.html',
            chunks: ["app", "b"]
        }),
        new webpack.ProvidePlugin({
            _: "lodash"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}