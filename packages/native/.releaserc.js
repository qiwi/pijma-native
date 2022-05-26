module.exports = {
  extends: '@qiwi/semrel-config-monorepo',
  plugins: [
    [
      '@semrel-extra/npm',
      {
        npmPublish: false,
      },
    ],
  ],
}
