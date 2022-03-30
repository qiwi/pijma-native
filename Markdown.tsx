import Markdown from 'markdown-to-jsx'
import { Image, Linking, Platform, Text, View } from 'pijma'
import React, { useCallback } from 'react'

import { Wrapper } from './Wrapper'

Markdown.defaultProps = {
  options: {
    wrapper: Wrapper,
    forceBlock: true,
    overrides: {
      p: {
        component: Text,
        props: {
          flex: 1,
          fontSize: 16,
        },
      },
      div: {
        component: View,
      },
      i: {
        component: Text,
        props: {
          fontStyle: 'italic',
        },
      },
      em: {
        component: Text,
        props: {
          fontStyle: 'italic',
        },
      },
      b: {
        component: Text,
        props: {
          fontWeight: '700',
        },
      },
      strong: {
        component: Text,
        props: {
          fontWeight: '700',
        },
      },
      code: {
        component: Text,
        props: {
          fontFamily: Platform.select({
            ios: 'Courier New',
            default: 'monospace',
          }),
        },
      },
      pre: {
        component: Text,
        props: {
          flex: 1,
          fontSize: 12,
        },
      },
      img: ({ src }) => (
        <Image
          width="90vmin"
          height="90vmin"
          source={{
            uri: src,
          }}
        />
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
