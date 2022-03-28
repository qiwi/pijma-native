Велосипед над [react-native](https://reactnative.dev)

## Равноправие

### react-native

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

### pijma

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

## Адаптация

### react-native

```tsx static
import React from 'react'
import { Provider, Theme } from 'pijma'

const Box = () => (
  <View
    style={view}
  />
)

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

let view = styles.view

if (Dimensions.get('window').width > 400) {
  view = StyleSheet.compose(stylesLarge.view)
}
```

### pijma

```tsx static
import React from 'react'
import { Provider, Theme } from 'pijma'

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

const theme: Theme = {
  breakpoints: [600, 1240],
}

const App = () => (
  <Provider theme={theme}>
    <Box />
  </Provider>
)
```
