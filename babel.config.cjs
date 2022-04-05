module.exports = function (api) {
  if (api.caller((caller) => caller?.name) === 'metro') {
    return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        'react-native-reanimated/plugin',
        'tsconfig-paths-module-resolver',
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
      ],
    ],
  }
}
