const BabiliPlugin = require('babili-webpack-plugin');
const devConfig = require('./webpack.config');
const webpack = require('webpack');

const prodConfig = Object.assign(
    {},
    devConfig,
    {
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new BabiliPlugin()
        ],
        devtool: 'source-map',
        watch: false
    }
);

module.exports = prodConfig;