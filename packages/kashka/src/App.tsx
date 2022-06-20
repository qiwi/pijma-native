import 'react-native-gesture-handler'

import {
  FlatList,
  Platform,
  Pressable,
  Provider,
  ScrollView,
  Text,
  useColorScheme,
} from '@pijma/react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FC } from 'react'

import { Markdown } from './Markdown'
import { Playground } from './Playground'
import { Wrapper } from './Wrapper'

interface Readme {
  type: 'playground' | 'markdown'
  content: string
}

interface Component {
  type: 'component'
  name: string
  from: string
  readme: Readme[]
  displayName: string
  description: string
  props: Prop[]
}

interface Section {
  type: 'section'
  name: string
  readme: Readme[]
}

interface Prop {
  name: string
  required: boolean
  defaultValue: any
  description: string
  types: string[]
  tags: Record<string, string>
}

interface Config {
  pages: (Section | Component)[]
  prefix?: string
}

const Readme: FC<{ readme: Readme[] }> = ({ readme }) => (
  <Wrapper>
    {readme.map(({ type, content }, i) =>
      type === 'playground' ? (
        <Playground key={i}>{content}</Playground>
      ) : type === 'markdown' ? (
        <Markdown key={i}>{content}</Markdown>
      ) : undefined,
    )}
  </Wrapper>
)

const Props: FC<{ props: Prop[] }> = ({ props }) => {
  const { Navigator, Screen } = createNativeStackNavigator()
  const theme = useTheme()
  return (
    <Navigator>
      <Screen name="All" options={{ headerShown: false }}>
        {({ navigation }) => (
          <FlatList
            contentContainerPaddingVertical={12}
            contentContainerPaddingHorizontal={8}
            data={props}
            keyExtractor={({ name }) => name}
            renderItem={({ item, index }) => (
              <Pressable
                borderRadius={4}
                padding={8}
                marginTop={index === 0 ? undefined : 8}
                backgroundColor={({ pressed }) =>
                  pressed ? theme.colors.primary : theme.colors.card
                }
                onPress={() => navigation.navigate(item.name)}
              >
                <Text
                  selectable={false}
                  fontSize={16}
                  lineHeight={32}
                  fontFamily={Platform.select({
                    ios: 'Courier New',
                    default: 'monospace',
                  })}
                  color={theme.colors.text}
                  textDecorationLine={
                    item.tags.deprecated ? 'line-through' : undefined
                  }
                >
                  {`${
                    item.tags.platform === 'android'
                      ? '🤖 '
                      : item.tags.platform === 'ios'
                      ? '🍎 '
                      : ''
                  }${item.name}${item.required ? ' ✨' : ''}`}
                </Text>
              </Pressable>
            )}
          />
        )}
      </Screen>
      {props.map(
        ({ name, required, defaultValue, types, description, tags }) => (
          <Screen
            name={name}
            key={name}
            options={{
              title: `${
                tags.platform === 'android'
                  ? '🤖 '
                  : tags.platform === 'ios'
                  ? '🍎 '
                  : ''
              }${name}${required ? ' ✨' : ''}`,
              headerTitleStyle: {
                // @ts-ignore
                textDecorationLine: tags.deprecated
                  ? 'line-through'
                  : undefined,
              },
            }}
          >
            {() => (
              <ScrollView
                contentContainerPaddingVertical={12}
                contentContainerPaddingHorizontal={8}
              >
                <Markdown>
                  {tags.deprecated
                    ? `\`\`\`\nDeprecated. ${tags.deprecated}\n\`\`\``
                    : ''}
                  {defaultValue !== null
                    ? `\`\`\`\n${defaultValue}\n\`\`\``
                    : ''}
                  {types ? `\`\`\`\n${types.join('\n')}\n\`\`\`` : ''}
                  {description}
                </Markdown>
              </ScrollView>
            )}
          </Screen>
        ),
      )}
    </Navigator>
  )
}

const Section: FC<Section> = ({ readme }) => (
  <ScrollView
    contentContainerPaddingVertical={12}
    contentContainerPaddingHorizontal={8}
  >
    <Readme readme={readme} />
  </ScrollView>
)

const Component: FC<Component> = ({ name, from, readme, props }) => {
  const { Navigator, Screen } = createBottomTabNavigator()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}
    >
      <Screen name="Readme">
        {() => (
          <ScrollView
            contentContainerPaddingVertical={12}
            contentContainerPaddingHorizontal={8}
          >
            <Markdown>{`\`\`\`\nimport { ${name} } from '${from}'\n\`\`\``}</Markdown>
            <Readme readme={readme} />
          </ScrollView>
        )}
      </Screen>
      <Screen name="Props">{() => <Props props={props} />}</Screen>
    </Navigator>
  )
}

const Pages: FC<{ pages: (Section | Component)[] }> = ({ pages }) => {
  const { Navigator, Screen } = createDrawerNavigator()
  return (
    <Navigator
      useLegacyImplementation={Platform.OS === 'web'}
      screenOptions={{
        unmountOnBlur: true,
      }}
    >
      {pages.map((page) => (
        <Screen key={page.name} name={page.name}>
          {() =>
            page.type === 'component' ? (
              <Component {...page} />
            ) : page.type === 'section' ? (
              <Section {...page} />
            ) : undefined
          }
        </Screen>
      ))}
    </Navigator>
  )
}

const screens = (pages: (Section | Component)[], prefix?: string) =>
  pages.reduce(
    (screens, page, i) => ({
      ...screens,
      ...{
        [page.name]: {
          path: [
            ...(prefix ? [prefix] : []),
            ...(i === 0 ? [] : [page.name]),
          ].join('/'),
          ...(page.type === 'component'
            ? {
                screens: {
                  Readme: {
                    path: '',
                  },
                  Props: {
                    path: 'Props',
                    screens: {
                      All: {
                        path: '',
                      },
                      ...page.props.reduce(
                        (screens, prop) => ({
                          ...screens,
                          ...{
                            [prop.name]: {
                              path: prop.name,
                            },
                          },
                        }),
                        {},
                      ),
                    },
                  },
                },
              }
            : {}),
        },
      },
    }),
    {},
  )

export const App: FC<{
  config: Config
}> = ({ config }) => {
  const scheme = useColorScheme()
  return (
    <Provider breakpoints={[600, 1200]}>
      <NavigationContainer
        theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
        linking={{
          prefixes: ['http://localhost:8080', 'https://qiwi.github.io'],
          // todo: native is slow
          ...(Platform.OS === 'web'
            ? {
                config: {
                  screens: screens(config.pages, config.prefix),
                },
              }
            : {}),
        }}
      >
        <Pages pages={config.pages} />
      </NavigationContainer>
    </Provider>
  )
}
