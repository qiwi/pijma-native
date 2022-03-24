import Markdown from 'markdown-to-jsx'
import { Image, Linking, Text, View } from 'pijma'
import React, { useCallback } from 'react'

Markdown.defaultProps = {
  options: {
    wrapper: View,
    forceBlock: true,
    overrides: {
      p: ({ children }) => (
        <View marginVertical={10}>
          <Text flex={1} fontSize={16}>
            {children}
          </Text>
        </View>
      ),
      div: ({ children }) => <View marginVertical={10}>{children}</View>,
      span: {
        component: Text,
      },
      code: {
        component: Text,
      },
      pre: {
        component: Text,
        props: {
          flex: 1,
          fontFamily: 'monospace',
        },
      },
      img: ({ src }) => (
        <View marginVertical={10}>
          <Image
            width="90vmin"
            height="90vmin"
            source={{
              uri: src,
            }}
          />
        </View>
      ),
      a: ({ href, children }) => {
        const onPress = useCallback(async () => {
          await Linking.openURL(href)
        }, [href])
        return (
          <Text onPress={onPress} href={href} color="blue">
            {children}
          </Text>
        )
      },
      h1: {
        component: Text,
        props: {
          flex: 1,
          fontSize: 36,
          fontWeight: '500',
          marginVertical: 8,
        },
      },
      h2: {
        component: Text,
        props: {
          flex: 1,
          fontSize: 32,
          fontWeight: '500',
          marginVertical: 8,
        },
      },
      h3: {
        component: Text,
        props: {
          flex: 1,
          fontSize: 28,
          fontWeight: '500',
          marginVertical: 8,
        },
      },
      h4: {
        component: Text,
        props: {
          flex: 1,
          fontSize: 24,
          fontWeight: '500',
          marginVertical: 8,
        },
      },
      h5: {
        component: Text,
        props: {
          flex: 1,
          fontSize: 20,
          fontWeight: '500',
          marginVertical: 8,
        },
      },
      h6: {
        component: Text,
        props: {
          flex: 1,
          fontSize: 16,
          fontWeight: '500',
          marginVertical: 8,
        },
      },
    },
  },
}

export { Markdown }
