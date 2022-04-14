/* eslint-disable */

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'babel-loader',
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
      '.web.jsx',
      '.web.tsx',
      '.web.cjs',
      '.web.mjs',
      '.ts',
      '.js',
      '.jsx',
      '.tsx',
      '.cjs',
      '.mjs',
    ],
  },
}
