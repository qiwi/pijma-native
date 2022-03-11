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
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      '.web.es6',
      '.web.es',
      '.web.mjs',
      '.web.cjs',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.es6',
      '.es',
      '.mjs',
      '.cjs',
    ],
  },
}
