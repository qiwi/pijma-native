/* eslint-disable */

const path = require('path')
const fs = require('fs')
const { withCustomConfig } = require('react-docgen-typescript')

const pkg = require(path.resolve(__dirname, 'package.json'))
const styleguide = path.resolve(__dirname, 'web')

module.exports = {
  webpackConfig: require(path.resolve(__dirname, 'webpack.config.cjs')),
  propsParser: withCustomConfig(path.resolve(__dirname, 'tsconfig.json'), {})
    .parse,
  ignore: ['**/*/index.{ts,tsx}'],
  sections: [
    {
      name: 'Pijma',
      content: path.resolve(__dirname, 'README.md'),
      components: ['src/components/**/*.{ts,tsx}'],
      sectionDepth: Number.MAX_VALUE,
    },
  ],
  styleguideDir: path.resolve(styleguide, 'build'),
  styleguideComponents: fs
    .readdirSync(styleguide)
    .filter((file) => file.endsWith('tsx'))
    .reduce(
      (files, file) =>
        Object.assign(files, {
          [path.basename(file, path.extname(file))]: path.resolve(
            styleguide,
            file,
          ),
        }),
      {},
    ),
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  getExampleFilename: (file) => path.resolve(path.dirname(file), 'README.md'),
  getComponentPathLine: (file) =>
    `import {${path.basename(file, path.extname(file))}} from '${pkg.name}'`,
  theme: {
    mq: {
      small: '@media (max-width: 599px)',
    },
  },
}
