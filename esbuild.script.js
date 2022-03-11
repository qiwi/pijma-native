/* eslint-disable */

const esbuild = require('esbuild')
const { nodeExternalsPlugin } = require('esbuild-node-externals')

esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    outfile: './lib/index.js',
    bundle: true,
    sourcemap: true,
    minify: true,
    platform: 'node',
    plugins: [nodeExternalsPlugin()],
    jsxFactory: 'createElement',
    inject: ['./react-shim.js'],
  })
  .catch(() => process.exit(1))
