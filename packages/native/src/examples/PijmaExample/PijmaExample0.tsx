import React from 'react'

import { Markdown } from '../../Markdown'

export const PijmaExample0 = () => {
  return (
    <Markdown>
      {
        "Wrapper around [react-native](https://reactnative.dev)\n\n## Styles are Props\n\n### react-native\n\n```static\n<View\n  style={{\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    width: 200,\n    height: 100,\n    padding: 20,\n  }}\n/>\n```\n\n### pijma\n\n```static\n<View\n  flex={1}\n  alignItems=\"center\"\n  justifyContent=\"center\"\n  width={200}\n  height={100}\n  padding={20}\n>\n```\n\n## Adaptive\n\n### react-native\n\n```static\nimport React from 'react'\nimport { Provider, Theme } from '@pijma/react-native'\n\nconst Box = () => <View style={view} />\n\nconst styles = StyleSheet.create({\n  view: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    width: 200,\n    height: 100,\n    padding: 20,\n  },\n})\n\nconst stylesLarge = StyleSheet.create({\n  view: {\n    width: 400,\n    height: 200,\n  },\n})\n\nlet view = styles.view\n\nif (Dimensions.get('window').width > 400) {\n  view = StyleSheet.compose(stylesLarge.view)\n}\n```\n\n### pijma\n\n```static\nimport React from 'react'\nimport { Provider, Theme } from '@pijma/react-native'\n\nconst Box = () => (\n  <View\n    flex={1}\n    alignItems=\"center\"\n    justifyContent=\"center\"\n    width={[200, 400]}\n    height={[100, 200]}\n    padding={20}\n  />\n)\n\nconst theme: Theme = {\n  breakpoints: [600, 1240],\n}\n\nconst App = () => (\n  <Provider theme={theme}>\n    <Box />\n  </Provider>\n)\n```"
      }
    </Markdown>
  )
}
