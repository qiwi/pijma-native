import 'react-native-gesture-handler'

import { Provider, ScrollView } from '@pijma/react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { examples } from './examples'

const { Navigator, Screen } = createDrawerNavigator()

export const App = () => (
  <Provider breakpoints={[600, 1240]}>
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
