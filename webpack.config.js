const webpack = require("webpack");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssnanoPlugin = require('cssnano-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
    mode: "development",
    entry: "./src/webpack.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(sc|c)ss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            },
                {
                    loader: "css-loader",
                },
                {
                    loader: "postcss-loader"
                },
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass"),
                    }
                }
            ]
        },
        ]
    },
    optimization: {
        minimizer: [
            new CssnanoPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "theme.css"
        }),
        new WebpackBuildNotifierPlugin({
            title: "Webpack Build"
        }),
        new DashboardPlugin(),
    ],
};





