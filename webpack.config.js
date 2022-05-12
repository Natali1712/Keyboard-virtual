const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: { main: './js/script.js' },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    /*resolve: {
        extensions: ['.js', '.json']
    },*/
    optimization: optimization(),
    devServer: {
        port: 4200
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            //inject: false,
            //hash: true,
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
            //filename: 'index.html'
        }), 
        /*
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }, 
            ],
        }),
        */
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            //hmr: isDev,
                            //reloadAll: true
                        }
                    },
                    'css-loader'] 
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            //hmr: isDev,
                            //reloadAll: true
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    }
}