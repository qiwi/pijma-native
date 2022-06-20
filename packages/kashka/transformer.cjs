/* eslint-disable */

const path = require('path')
const upstreamTransformer = require('metro-react-native-babel-transformer')

const generator = require('./generator.cjs')

module.exports.transform = async ({ src, filename, options }) => {
  if (path.basename(filename) === 'kashka.config.js') {
    return upstreamTransformer.transform({
      src: generator(src),
      filename,
      options,
    })
  }
  return upstreamTransformer.transform({ src, filename, options })
}
