module.exports = {
  cwd: __dirname,
  prefix: 'pijma-native',
  section: {
    name: 'Pijma',
    readme: './README.md',
    sections: [
      {
        name: 'ReactNative',
        readme: './packages/react-native/README.md',
        components: [
          './packages/react-native/src/**/*.{ts,tsx}',
          '!./packages/react-native/src/**/index.{ts,tsx}',
        ],
      },
      {
        name: 'ReactNativeSvg',
        readme: './packages/react-native-svg/README.md',
      },
    ],
  },
}
