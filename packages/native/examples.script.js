/* eslint-disable */

const fs = require('fs')
const path = require('path')

const { camelCase, startCase } = require('lodash')

const getConfig = require('react-styleguidist/lib/scripts/config').default

const getSections =
  require('react-styleguidist/lib/loaders/utils/getSections').default
const filterComponentsWithExample =
  require('react-styleguidist/lib/loaders/utils/filterComponentsWithExample').default
const getProps =
  require('react-styleguidist/lib/loaders/utils/getProps').default
const chunkify =
  require('react-styleguidist/lib/loaders/utils/chunkify').default

const config = getConfig(require.resolve('@pijma/web/styleguide.config.js'))

const examplesDir = path.resolve(__dirname, 'src', 'examples')

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
        path.resolve(dir, `${name}${i}.tsx`),
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
          if (line.trim().startsWith(';<')) {
            return {
              ...lines,
              renders: [...lines.renders, line.replace(';<', '<')],
              type: 'render',
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
        path.resolve(dir, `${name}${i}.tsx`),
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
    path.resolve(dir, `${name}.tsx`),
    [
      `import React from 'react'`,
      `import { Wrapper } from '../../Wrapper'`,
      ``,
      ...examples.map((example, i) => {
        return `import { ${name}${i} } from './${name}${i}'`
      }),
      ``,
      `export const ${name} = () => (`,
      `  <Wrapper>`,
      ...examples.map((example, i) => {
        return `    <${name}${i} />`
      }),
      `  </Wrapper>`,
      `)`,
    ].join('\n'),
  )

  fs.writeFileSync(
    path.resolve(dir, `index.ts`),
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
  const name = startCase(camelCase(section.name)).replace(/[^\w\d]/g, '')

  if (file) {
    processExample(`${name}Example`, file)
  }

  const sections = processSections(section.sections || [])

  const components = processComponents(section.components || [])

  return [...(file ? [name] : []), ...sections, ...components]
}

function processSections(sections) {
  return sections.reduce(
    (sections, section) => [...sections, ...processSection(section)],
    [],
  )
}

function processStyleGuide() {
  console.log('Generate native examples...')
  fs.rmSync(examplesDir, { recursive: true, force: true })
  const examples = processSections(
    filterComponentsWithExample(getSections(config.sections, config)),
  )
  fs.writeFileSync(
    path.resolve(examplesDir, 'index.ts'),
    [
      ...examples.map(
        (example) => `import { ${example}Example } from './${example}Example'`,
      ),
      '',
      `export const examples = {`,
      ...examples.map((example) => `  ${example}: ${example}Example,`),
      `}`,
      ``,
    ].join('\n'),
  )
}

processStyleGuide()
