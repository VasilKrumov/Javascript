const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: [
            './app.js',
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 9000,
        compress: true,
        open: true,
        publicPath: '/dist/',
        writeToDisk: true,
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: {
            index: '/',
            disableDotRule: true,
        },
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devtool: 'eval-source-map',
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.html',
        }),
    ],
    module: {
        rules: [{
                test: /\.partial\..+$/i,
                type: 'asset/source',
            },
            {
                test: /(?<!partial)\.css$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            }
        ]
    }
};