const path = require('path');

const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SriPlugin = require('webpack-subresource-integrity');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const MODE = process.env.NODE_ENV;
const IS_PROD = MODE === 'production';

const PUBLIC_PATH = path.resolve(__dirname, 'public');
const OUTPUT_PATH = path.resolve(__dirname, 'build');

module.exports = {
  mode: MODE || 'development',
  devtool: 'source-map',
  entry: './src/index',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules', 'src'],
  },
  output: {
    path: OUTPUT_PATH,
    filename: IS_PROD
      ? 'static/js/[name].[contenthash:8].js'
      : 'static/js/bundle.js',
    chunkFilename: IS_PROD
      ? 'static/js/[name].[contenthash:8].chunk.js'
      : 'static/js/[name].chunk.js',
    crossOriginLoading: 'anonymous',
  },
  optimization: {
    minimize: IS_PROD,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        extractComments: false,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new OptimizeCssAssetsPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    runtimeChunk: true,
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        parser: {
          requireEnsure: false,
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          IS_PROD && {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/build/',
            },
          },
          !IS_PROD && 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: IS_PROD
                  ? '[hash:base64:8]'
                  : '[name]__[local]--[hash:base64:5]',
              },
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('autoprefixer')({ flexbox: 'no-2009' }),
                // require('postcss-preset-env'),
              ],
              sourceMap: true,
            },
          },
        ].filter(Boolean),
      },
    ],
  },
  plugins: [
    IS_PROD && new CleanWebpackPlugin(),
    IS_PROD && new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 6,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
    IS_PROD && new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
    new SriPlugin({
      hashFuncNames: ['sha256'],
      enabled: IS_PROD,
    }),
    new CspHtmlWebpackPlugin({
      'base-uri': '\'self\'',
      'object-src': '\'none\'',
      'script-src': ['\'self\''],
      'style-src': ['\'self\'', !IS_PROD && '\'unsafe-inline\''].filter(Boolean),
    }, {
      enabled: true,
      hashEnabled: {
        'script-src': false,
        'style-src': false
      },
      nonceEnabled: {
        'script-src': false,
        'style-src': false
      }
    }),
  ].filter(Boolean),
  performance: false,
  stats: {
    assetsSort: '!size',
    children: false,
    modules: false,
    entrypoints: false,
  },
  devServer: {
    contentBase: PUBLIC_PATH,
    compress: true,
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    https: true,
    open: 'Google Chrome',
  }
};
