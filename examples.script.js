/* eslint-disable */

const fs = require('fs')
const path = require('path')

const getConfig = require('react-styleguidist/lib/scripts/config').default

const getSections =
  require('react-styleguidist/lib/loaders/utils/getSections').default
const filterComponentsWithExample =
  require('react-styleguidist/lib/loaders/utils/filterComponentsWithExample').default
const getProps =
  require('react-styleguidist/lib/loaders/utils/getProps').default
const chunkify =
  require('react-styleguidist/lib/loaders/utils/chunkify').default

const config = getConfig()

const examplesDir = path.resolve(__dirname, 'examples')

function processExample(name, file) {
  const examples = chunkify(
    fs
      .readFileSync(file)
      .toString()
      .replaceAll(/```\S+ static/g, '```static'),
  )

  const dir = path.resolve(examplesDir, name)

  fs.mkdirSync(dir, { recursive: true })

  examples.forEach((example, i) => {
    if (example.type === 'markdown') {
      const markdown = example.content
        .replaceAll("'", "\\'")
        .replaceAll('\n', '\\n')
      fs.writeFileSync(
        path.resolve(dir, `${name}${i}.jsx`),
        [
          `import React from 'react'`,
          `import { Markdown } from '../../Markdown'`,
          ``,
          `export const ${name}${i} = () => {`,
          `  return (`,
          `    <Markdown>{'${markdown}'}</Markdown>`,
          `  )`,
          `}`,
        ].join('\n'),
      )
    }
    if (example.type === 'code') {
      const lines = example.content.split('\n').reduce(
        (lines, line) => {
          if (line.startsWith('import')) {
            return {
              ...lines,
              imports: [...lines.imports, line.replace(';', '')],
              type: 'import',
            }
          }
          if (line.trim().startsWith('const')) {
            return {
              ...lines,
              expressions: [...lines.expressions, line],
              type: 'expression',
            }
          }
          if (line.trim().startsWith('<')) {
            return {
              ...lines,
              renders: [...lines.renders, line],
              type: 'render',
            }
          }
          if (line.trim().endsWith('/>')) {
            return {
              ...lines,
              renders: [...lines.renders, line],
              type: undefined,
            }
          }
          if (lines.type === 'import') {
            return {
              ...lines,
              imports: [...lines.imports, line.replace(';', '')],
            }
          }
          if (lines.type === 'render') {
            return {
              ...lines,
              renders: [...lines.renders, line],
            }
          }
          if (lines.type === 'expression') {
            return {
              ...lines,
              expressions: [...lines.expressions, line],
            }
          }
          return lines
        },
        {
          imports: [],
          expressions: [],
          renders: [],
          type: undefined,
        },
      )

      fs.writeFileSync(
        path.resolve(dir, `${name}${i}.jsx`),
        [
          ...lines.imports,
          `export const ${name}${i} = () => {`,
          ...lines.expressions.map((line) => `  ${line}`),
          `  return (`,
          ...lines.renders.map((line) => `    ${line}`),
          `  )`,
          `}`,
        ].join('\n'),
      )
    }
  })

  fs.writeFileSync(
    path.resolve(dir, `${name}.jsx`),
    [
      `import React from 'react'`,
      ``,
      ...examples.map((example, i) => {
        return `import { ${name}${i} } from './${name}${i}'`
      }),
      ``,
      `export const ${name} = () => (`,
      `  <>`,
      ...examples.map((example, i) => {
        return `    <${name}${i} />`
      }),
      `  </>`,
      `)`,
    ].join('\n'),
  )

  fs.writeFileSync(
    path.resolve(dir, `index.js`),
    [`export * from './${name}'`, ``].join('\n'),
  )

  return examples
}

function processComponent(file) {
  const docs = config.propsParser(
    file,
    fs.readFileSync(file),
    config.resolver,
    config.handlers(file),
  )

  const { displayName } = getProps(Array.isArray(docs) ? docs[0] : docs, file)

  processExample(`${displayName}Example`, config.getExampleFilename(file))

  return displayName
}

function processComponents(components) {
  return components.map((component) => processComponent(component.filepath))
}

function processSection(section) {
  const file = section.content.require.split('!').pop()

  processExample(`${section.name}Example`, file)
  // processSections(section.sections || [])
  const components = processComponents(section.components || [])

  fs.writeFileSync(
    path.resolve(examplesDir, 'index.js'),
    [
      `import { ${section.name}Example } from './${section.name}Example'`,
      ...components.map(
        (component) =>
          `import { ${component}Example } from './${component}Example'`,
      ),
      '',
      `export const examples = {`,
      `  ${section.name}: ${section.name}Example,`,
      ...components.map((component) => `  ${component}: ${component}Example,`),
      `}`,
      ``,
    ].join('\n'),
  )
}

function processSections(sections) {
  sections.forEach((section) => {
    processSection(section)
  })
}

function processStyleGuide() {
  fs.rmSync(examplesDir, { recursive: true, force: true })
  processSections(
    filterComponentsWithExample(getSections(config.sections, config)),
  )
}

processStyleGuide()
