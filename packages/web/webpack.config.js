/* eslint-disable */

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.[cmjt]sx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    mainFields: ['main'],
    plugins: [
      new TsconfigPathsPlugin({
        mainFields: ['main'],
      }),
    ],
    alias: {
      'react-native$': 'react-native-web',
      'react/jsx-dev-runtime$': 'react/jsx-dev-runtime.js',
      'react/jsx-runtime$': 'react/jsx-runtime.js',
      'sockjs-client/dist/sockjs$': 'sockjs-client/lib/entry',
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
}
