/* eslint-disable */

const path = require('path')

const pkg = require(path.resolve(__dirname, 'package.json'))

module.exports = function (api) {
  if (api.caller((caller) => caller?.name) === 'metro') {
    return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        'react-native-reanimated/plugin',
        [
          'module-resolver',
          {
            alias: {
              [`${pkg.name}`]: path.resolve(__dirname, 'src'),
            },
          },
        ],
      ],
    }
  }
  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      'react-native-web',
      [
        'extension-resolver',
        {
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
      ],
    ],
  }
}
