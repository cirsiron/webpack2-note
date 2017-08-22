const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ejsPlugin = require('ejs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src1/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, "node_modules"),
                include: path.resolve(__dirname, "src1"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, "node_modules"),
                include: path.resolve(__dirname, "src1"),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.less$/,
                exclude: path.resolve(__dirname, "node_modules"),
                include: path.resolve(__dirname, "src1"),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{ loader: 'css-loader', options: { importLoadersL: 1 } },
                        'postcss-loader',
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, "src1"),
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.tpl$/,
                include: path.resolve(__dirname, "src1"),
                use: [
                    "ejs-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: `index.html`,
            title: 'index.html',
            inject: "header",
            template: "./src1/index.html"
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.ProvidePlugin({
            _: "lodash"
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function() {
                    return [
                        require("autoprefixer")({
                            browsers: ['ie>=8', '>1% in CN']
                        })
                    ]
                }
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}