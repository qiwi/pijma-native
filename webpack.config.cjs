/* eslint-disable */

const path = require('path')

const pkg = require(path.resolve(__dirname, 'package.json'))

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
    alias: {
      [`${pkg.name}$`]: path.resolve(__dirname, 'src'),
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
