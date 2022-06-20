Wrapper around [react-native](https://reactnative.dev)

## Styles are Props

### `react-native`

```tsx static
<View
  style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    padding: 20,
  }}
/>
```

### `@pijma/react-native`

```tsx static
<View
  flex={1}
  alignItems="center"
  justifyContent="center"
  width={200}
  height={100}
  padding={20}
>
```

## Adaptive

### `react-native`

```tsx static
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    padding: 20,
  },
})

const stylesLarge = StyleSheet.create({
  view: {
    width: 400,
    height: 200,
  },
})

const Box = () => (
  <View
    style={
      Dimensions.get('window').width > 600
        ? StyleSheet.compose(styles.view, stylesLarge.view)
        : styles.view
    }
  />
)
```

### `@pijma/react-native`

```tsx static
import React from 'react'
import { Provider, Theme, View } from '@pijma/react-native'

const Box = () => (
  <View
    flex={1}
    alignItems="center"
    justifyContent="center"
    width={[200, 400]}
    height={[100, 200]}
    padding={20}
  />
)

const App = () => (
  <Provider breakpoints={[600, 1240]}>
    <Box />
  </Provider>
)
```
