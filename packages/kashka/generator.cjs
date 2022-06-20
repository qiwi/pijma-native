/* eslint-disable */

const glob = require('fast-glob')
const path = require('path')
const fs = require('fs')
const md2ast = require('@textlint/markdown-to-ast')
const { withCustomConfig } = require('react-docgen-typescript')
const requireFromString = require('require-from-string')

const { readPackageUpSync } = require('./read-pkg-up.cjs')
const { findUpSync } = require('./find-up.cjs')

const docgens = {}
const froms = {}

const from = (file) => {
  const cwd = path.dirname(file)
  if (!froms[cwd]) {
    const { packageJson } = readPackageUpSync({
      cwd,
    })
    froms[cwd] = packageJson.name
  }
  return froms[cwd]
}

const readme = (file) =>
  md2ast.parse(fs.readFileSync(file).toString()).children.map((node, i) => {
    if (node.type === 'CodeBlock' && node.meta !== 'static') {
      return {
        type: 'playground',
        content: node.value.replace(/^;/, ''),
      }
    } else {
      return {
        type: 'markdown',
        content: node.raw.replaceAll(/(```\S+) static/g, '$1'),
      }
    }
  })

const docgen = (file) => {
  const cwd = path.dirname(file)
  if (!docgens[cwd]) {
    docgens[cwd] = withCustomConfig(findUpSync('tsconfig.json', { cwd }), {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      shouldExtractValuesFromUnion: true,
      skipChildrenPropWithoutDoc: false,
      shouldIncludePropTagMap: true,
      shouldIncludeExpression: true,
    })
  }
  return docgens[cwd]
}

const docs = (file) => {
  const [{ displayName, description, props }] = docgen(file).parse(file)
  return {
    displayName,
    description,
    props: Object.values(props)
      .map(({ name, required, type, defaultValue, description, tags }) => ({
        name,
        required,
        types:
          type.name === 'enum'
            ? type.value.map(({ value }) => value)
            : [type.name],
        defaultValue,
        description,
        tags: tags || {},
      }))
      .sort((a, b) => {
        if (a.required && !b.required) {
          return -1
        }
        if (!a.required && b.required) {
          return 1
        }
        if (a.tags.deprecated && !b.tags.deprecated) {
          return 1
        }
        if (!a.tags.deprecated && b.tags.deprecated) {
          return -1
        }
        if (a.tags.platform && !b.tags.platform) {
          return 1
        }
        if (!a.tags.platform && b.tags.platform) {
          return -1
        }
        if (a.tags.platform && b.tags.platform) {
          return a.tags.platform.localeCompare(b.tags.platform)
        }
        return a.name.localeCompare(b.name)
      }),
  }
}

const processSections = (sections, cwd) =>
  sections.reduce(
    (sections, section) => [...sections, ...processSection(section, cwd)],
    [],
  )

const processComponents = (components, cwd) =>
  glob
    .sync(components, {
      absolute: true,
      cwd,
    })
    .map((file) => ({
      name: path.basename(file, path.extname(file)),
      readme: findUpSync('README.md', { cwd: file }),
      file,
    }))
    .map((c1, index, components) => ({
      ...c1,
      count: components.filter((c2) => c2.readme === c1.readme).length,
    }))
    .filter(({ count }) => count === 1)
    .map((component) => processComponent(component))

const processComponent = (component) => ({
  type: 'component',
  name: component.name,
  from: from(component.file),
  readme: readme(component.readme),
  ...docs(component.file),
})

const processSection = (section, cwd) => [
  {
    type: 'section',
    name: section.name,
    readme: readme(path.resolve(cwd, section.readme)),
  },
  ...(section.components ? processComponents(section.components, cwd) : []),
  ...(section.sections ? processSections(section.sections, cwd) : []),
]

module.exports = (source) => {
  const config = requireFromString(source)
  return `module.exports = ${JSON.stringify({
    prefix: config.prefix,
    pages: processSection(config.section, config.cwd || process.cwd()),
  })}`
}
