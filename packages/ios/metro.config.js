/* eslint-disable */

const {
  getMetroTools,
  getMetroAndroidAssetsResolutionFix,
} = require('react-native-monorepo-tools')

const { watchFolders, extraNodeModules } = getMetroTools()
const { publicPath, applyMiddleware } = getMetroAndroidAssetsResolutionFix()

module.exports = {
  transformer: {
    publicPath,
    babelTransformerPath: require.resolve('@pijma/kashka/transformer.cjs'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  server: {
    enhanceMiddleware: (middleware) => applyMiddleware(middleware),
  },
  watchFolders,
  resolver: {
    sourceExts: ['ts', 'js', 'jsx', 'tsx', 'cjs', 'mjs'],
    extraNodeModules,
  },
}
