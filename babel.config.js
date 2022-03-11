/* eslint-disable */

module.exports = {
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
