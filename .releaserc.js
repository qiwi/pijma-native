module.exports = {
  branch: 'master',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        successComment: false,
        failComment: false,
      },
    ],
    '@semantic-release/git',
    [
      '@qiwi/semrel-metabranch',
      {
        publish: {
          action: 'push',
          branch: 'gh-pages',
          from: './web/build',
          to: './',
          message: 'update docs ${nextRelease.gitTag}',
        },
      },
    ],
  ],
}
