Велосипед над нативным компонентом [Pressable](https://reactnative.dev/docs/pressable)

```jsx
import React from 'react'
import { Pressable, Text } from '@pijma/react-native'
;<Pressable
  backgroundColor={({ pressed }) => (pressed ? 'red' : 'green')}
  width={300}
  height={300}
  padding={10}
  borderRadius={150}
  alignContent="center"
  justifyContent="center"
  shadowColor={({ pressed }) => (pressed ? 'green' : undefined)}
  shadowRadius={({ pressed }) => (pressed ? 10 : undefined)}
  elevation={({ pressed }) => (pressed ? 10 : undefined)}
>
  {({ pressed }) => (
    <Text textAlign="center" color="#fff" fontSize={30} selectable={false}>
      {pressed
        ? 'Are you freak?\nStop pressing me!'
        : 'Let`s do this!\nYou can press me'}
    </Text>
  )}
</Pressable>
```
