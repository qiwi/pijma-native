/* eslint-disable */

const path = require('path')

const { DefinePlugin } = require('webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = (env, { mode }) => ({
  mode,
  entry: {
    index: path.resolve(__dirname, './src/index'),
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    assetModuleFilename: '[name].[contenthash][ext]',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.[jt]sx?$/,
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
            },
          },
          {
            exclude: [/^$/, /\.[jt]sx?$/, /\.html$/, /\.json$/],
            type: 'asset/resource',
          },
        ],
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: [
      '.web.ts',
      '.web.js',
      '.web.tsx',
      '.web.jsx',
      '.web.cjs',
      '.web.mjs',
      '.ts',
      '.js',
      '.tsx',
      '.jsx',
      '.cjs',
      '.mjs',
    ],
  },
  plugins: [
    ...['index', '404'].map(
      (filename) =>
        new HtmlPlugin({
          title: 'Pijma',
          filename: `${filename}.html`,
          template: path.resolve(__dirname, 'index.html'),
          minify: {
            collapseWhitespace: true,
            keepClosingSlash: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
            minifyCSS: true,
          },
        }),
    ),
    new DefinePlugin({
      process: { env: {} },
      __DEV__: String(mode === 'development'),
    }),
  ],
  stats: 'minimal',
  devServer: {
    historyApiFallback: true,
  },
  ignoreWarnings: [
    {
      module: /react-native-gesture-handler/,
    },
  ],
})
