/* eslint-disable */

const path = require('path')
const fs = require('fs')
const { withCustomConfig } = require('react-docgen-typescript')

const { readPackageUpSync } = require('./read-pkg-up')

module.exports = {
  webpackConfig: require(path.resolve(__dirname, 'webpack.config.js')),
  propsParser: withCustomConfig(path.resolve(__dirname, 'tsconfig.json'), {})
    .parse,
  ignore: ['**/*/index.{ts,tsx}'],
  sections: [
    {
      name: 'Pijma',
      content: path.resolve(__dirname, '..', '..', 'README.md'),
      components: [],
      sectionDepth: Number.MAX_VALUE,
      sections: fs
        .readdirSync(path.resolve(__dirname, '..'))
        .filter((file) => !['native', 'android', 'ios'].includes(file))
        .filter((file) =>
          fs
            .lstatSync(path.resolve(__dirname, '..', file, 'README.md'), {
              throwIfNoEntry: false,
            })
            ?.isFile(),
        )
        .map((file) => ({
          name: file,
          content: path.resolve(__dirname, '..', file, 'README.md'),
          components: [`../${file}/src/**/*.{ts,tsx}`],
          sectionDepth: Number.MAX_VALUE,
        })),
    },
  ],
  styleguideDir: path.resolve(__dirname, 'lib'),
  styleguideComponents: fs
    .readdirSync(path.resolve(__dirname, 'src'))
    .filter((file) => file.endsWith('tsx'))
    .reduce(
      (files, file) =>
        Object.assign(files, {
          [path.basename(file, path.extname(file))]: path.resolve(
            __dirname,
            'src',
            file,
          ),
        }),
      {},
    ),
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  getExampleFilename: (file) => path.resolve(path.dirname(file), 'README.md'),
  getComponentPathLine: (file) => {
    const { packageJson } = readPackageUpSync({
      cwd: path.dirname(path.resolve(file)),
    })
    const name = path.basename(file, path.extname(file))
    return `import { ${name} } from '${packageJson.name}'`
  },
  theme: {
    mq: {
      small: '@media (max-width: 599px)',
    },
  },
}
