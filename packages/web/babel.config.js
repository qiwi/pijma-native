module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'react-native-web',
    'tsconfig-paths-module-resolver',
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
