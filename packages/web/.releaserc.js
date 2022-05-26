module.exports = {
  extends: '@qiwi/semrel-config-monorepo',
  plugins: [
    [
      '@qiwi/semrel-metabranch',
      {
        publish: {
          action: 'push',
          branch: 'gh-pages',
          from: './lib',
          to: '.',
          message: 'update web docs ${nextRelease.gitTag}',
        },
      },
    ],
    [
      '@semrel-extra/npm',
      {
        npmPublish: false,
      },
    ],
  ],
}
