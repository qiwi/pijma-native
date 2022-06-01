import React from 'react'

import { Markdown } from '../../Markdown'

export const ReactNativeExample0 = () => {
  return (
    <Markdown>
      {
        "Wrapper around [react-native](https://reactnative.dev)\n\n## Styles are Props\n\n### `react-native`\n\n```static\n<View\n  style={{\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    width: 200,\n    height: 100,\n    padding: 20,\n  }}\n/>\n```\n\n### `@pijma/react-native`\n\n```static\n<View\n  flex={1}\n  alignItems=\"center\"\n  justifyContent=\"center\"\n  width={200}\n  height={100}\n  padding={20}\n>\n```\n\n## Adaptive\n\n### `react-native`\n\n```static\nimport React from 'react'\nimport { Dimensions, StyleSheet, View } from 'react-native'\n\nconst styles = StyleSheet.create({\n  view: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    width: 200,\n    height: 100,\n    padding: 20,\n  },\n})\n\nconst stylesLarge = StyleSheet.create({\n  view: {\n    width: 400,\n    height: 200,\n  },\n})\n\nconst Box = () => (\n  <View\n    style={\n      Dimensions.get('window').width > 400\n        ? StyleSheet.compose(styles.view, stylesLarge.view)\n        : styles.view\n    }\n  />\n)\n```\n\n### `@pijma/react-native`\n\n```static\nimport React from 'react'\nimport { Provider, Theme, View } from '@pijma/react-native'\n\nconst Box = () => (\n  <View\n    flex={1}\n    alignItems=\"center\"\n    justifyContent=\"center\"\n    width={[200, 400]}\n    height={[100, 200]}\n    padding={20}\n  />\n)\n\nconst theme: Theme = {\n  breakpoints: [600, 1240],\n}\n\nconst App = () => (\n  <Provider theme={theme}>\n    <Box />\n  </Provider>\n)\n```"
      }
    </Markdown>
  )
}
