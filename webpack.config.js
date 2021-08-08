var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const BrowserSync = require('browser-sync-webpack-plugin')

module.exports = {

    mode: "production",
    devtool: "none",

    entry: {
        main: "./src/scripts.js"
    },
    output: {
        filename: "[name].[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },

    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [

                MiniCssExtractPlugin.loader,
                'css-loader',

                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [autoprefixer()]
                    }
                },
                'sass-loader',
            ],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            loader: 'file-loader',
            options: {
                name: 'images/[name].[ext]',
            },
        },
        {
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=100000',
            options: {
                name: '[name].[ext]'
            }
        }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),

        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        }),
        new BrowserSync({
            host: 'localhost',
            port: 9000,
            proxy: 'http://localhost:8080',
        }, {
            reload: false,
        })
    ]
}