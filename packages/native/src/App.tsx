import 'react-native-gesture-handler'

import { Provider, ScrollView, Theme } from '@pijma/react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { examples } from './examples'

const { Navigator, Screen } = createDrawerNavigator()

const theme: Theme = {
  breakpoints: [600, 1240],
}

export const App = () => (
  <Provider theme={theme}>
    <NavigationContainer>
      <Navigator initialRouteName="Pijma">
        {Object.entries(examples).map(([name, Component]) => (
          <Screen key={name} name={name}>
            {() => (
              <ScrollView
                contentContainerPaddingHorizontal={10}
                contentContainerPaddingVertical={20}
              >
                <Component />
              </ScrollView>
            )}
          </Screen>
        ))}
      </Navigator>
    </NavigationContainer>
  </Provider>
)
