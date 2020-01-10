const HtmlWebPackPlugin = require("html-webpack-plugin");
const WebpackAssetsManifest = require('webpack-assets-manifest');
const WebpackExternalImport = require('webpack-external-import/webpack');

module.exports = {
    devtool: 'inline-source-map',
    externals: {
        'react': 'React',
		'styled-components': 'StyledComponents'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new WebpackExternalImport({
            manifestName: 'App1Manifest'
        })
    ],
    devServer: {
        hot: false,
        injectHot: false,
        injectClient: false,
    }
};