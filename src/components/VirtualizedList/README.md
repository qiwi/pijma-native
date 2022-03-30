Велосипед над нативным компонентом [VirtualizedList](https://reactnative.dev/docs/virtualizedlist)

```jsx
import React from 'react'
import { VirtualizedList, View, Text } from 'pijma'

const data = []

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
})

const getItemCount = (data) => 50

;<VirtualizedList
  height={400}
  data={data}
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
  getItemCount={getItemCount}
  getItem={getItem}
/>
```
