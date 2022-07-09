import { Image, Linking, Platform, Text, View } from '@pijma/react-native'
import { useTheme } from '@react-navigation/native'
import MarkdownToJsx from 'markdown-to-jsx'
import React, { useCallback } from 'react'
import { GestureResponderEvent } from 'react-native'

import { Wrapper } from './Wrapper'

export const Markdown = ({ children }: { children: string | string[] }) => {
  const theme = useTheme()
  return (
    <MarkdownToJsx
      options={{
        wrapper: Wrapper,
        forceBlock: true,
        overrides: {
          div: {
            component: View,
          },
          p: {
            component: Text,
            props: {
              flex: 1,
              fontSize: 16,
              lineHeight: 32,
              color: theme.colors.text,
            },
          },
          ul: {
            component: View,
            props: {
              display: 'flex',
              flexDirection: 'column',
              accessibilityRole: 'list',
            },
          },
          ol: {
            component: View,
            props: {
              display: 'flex',
              flexDirection: 'column',
              accessibilityRole: 'list',
            },
          },
          li: {
            component: Text,
            props: {
              flex: 1,
              fontSize: 16,
              lineHeight: 32,
              color: theme.colors.text,
              accessibilityRole: Platform.select({
                web: 'listitem',
                default: 'text',
              }),
            },
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
              display: 'flex',
              flex: 1,
              fontSize: 12,
              color: theme.colors.text,
              backgroundColor: theme.colors.card,
              borderRadius: 4,
              padding: 8,
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
            const onPress = useCallback(
              async (event: GestureResponderEvent) => {
                event.preventDefault()
                await Linking.openURL(href)
              },
              [href],
            )
            return (
              <Text onPress={onPress} href={href} color={theme.colors.primary}>
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
              color: theme.colors.text,
              accessibilityRole: Platform.select({
                web: 'heading',
                default: 'text',
              }),
              accessibilityLevel: 1,
            },
          },
          h2: {
            component: Text,
            props: {
              flex: 1,
              fontSize: 32,
              fontWeight: '500',
              color: theme.colors.text,
              accessibilityRole: Platform.select({
                web: 'heading',
                default: 'text',
              }),
              accessibilityLevel: 2,
            },
          },
          h3: {
            component: Text,
            props: {
              flex: 1,
              fontSize: 28,
              fontWeight: '500',
              color: theme.colors.text,
              accessibilityRole: Platform.select({
                web: 'heading',
                default: 'text',
              }),
              accessibilityLevel: 3,
            },
          },
          h4: {
            component: Text,
            props: {
              flex: 1,
              fontSize: 24,
              fontWeight: '500',
              color: theme.colors.text,
              accessibilityRole: Platform.select({
                web: 'heading',
                default: 'text',
              }),
              accessibilityLevel: 4,
            },
          },
          h5: {
            component: Text,
            props: {
              flex: 1,
              fontSize: 20,
              fontWeight: '500',
              color: theme.colors.text,
              accessibilityRole: Platform.select({
                web: 'heading',
                default: 'text',
              }),
              accessibilityLevel: 5,
            },
          },
          h6: {
            component: Text,
            props: {
              flex: 1,
              fontSize: 16,
              fontWeight: '500',
              color: theme.colors.text,
              accessibilityRole: Platform.select({
                web: 'heading',
                default: 'text',
              }),
              accessibilityLevel: 6,
            },
          },
        },
      }}
    >
      {Array.isArray(children)
        ? children.filter((child) => child).join('\n\n')
        : children}
    </MarkdownToJsx>
  )
}
