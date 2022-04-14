Wrapper around [VirtualizedList](https://reactnative.dev/docs/virtualizedlist)

```jsx
import React from 'react'
import { VirtualizedList, View, Text } from '@pijma/react-native'
;<VirtualizedList
  height={400}
  data={[]}
  initialNumToRender={4}
  renderItem={({ item }) => (
    <View
      backgroundColor="#f9c2ff"
      height={150}
      justifyContent="center"
      padding={20}
      marginVertical={8}
    >
      <Text fontSize={32}>{item.title}</Text>
    </View>
  )}
  keyExtractor={(item) => item.id}
  getItemCount={() => 50}
  getItem={(data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  })}
/>
```
