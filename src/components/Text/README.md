Велосипед над нативным компонентом [Text](https://reactnative.dev/docs/text)

## Простой текст

```jsx
import React from 'react'
import { View, Text } from 'pijma'

;<View flex={1} width="100%">
  <Text display="flex" color="gray" fontWeight="100" fontSize={40}>
    Все говно! И говно - говно!
  </Text>
  <Text display="flex" color="gray" fontWeight="200" fontSize={40}>
    Все говно! И говно - говно!
  </Text>
  <Text display="flex" color="gray" fontWeight="300" fontSize={40}>
    Все говно! И говно - говно!
  </Text>
  <Text display="flex" color="gray" fontWeight="400" fontSize={40}>
    Все говно! И говно - говно!
  </Text>
  <Text display="flex" color="gray" fontWeight="500" fontSize={40}>
    Все говно! И говно - говно!
  </Text>
  <Text display="flex" color="gray" fontWeight="600" fontSize={40}>
    Все говно! И говно - говно!
  </Text>
  <Text display="flex" color="gray" fontWeight="700" fontSize={40}>
    Все говно! И говно - говно!
  </Text>
  <Text display="flex" color="gray" fontWeight="800" fontSize={40}>
    Все говно! И говно - говно!
  </Text>
  <Text display="flex" color="gray" fontWeight="900" fontSize={40}>
    Все говно! И говно - говно!
  </Text>
</View>
```

## Адаптивный текст

```jsx
import React from 'react'
import { View, Text } from 'pijma'

;<View flex={1} width="100%">
  <Text
    display="flex"
    color={['red', 'green', 'blue']}
    fontWeight="100"
    fontSize={[30, 40, 50]}
  >
    Все говно! И говно - говно!
  </Text>
  <Text
    display="flex"
    color={['red', 'green', 'blue']}
    fontWeight="200"
    fontSize={[30, 40, 50]}
  >
    Все говно! И говно - говно!
  </Text>
  <Text
    display="flex"
    color={['red', 'green', 'blue']}
    fontWeight="300"
    fontSize={[30, 40, 50]}
  >
    Все говно! И говно - говно!
  </Text>
  <Text
    display="flex"
    color={['red', 'green', 'blue']}
    fontWeight="400"
    fontSize={[30, 40, 50]}
  >
    Все говно! И говно - говно!
  </Text>
  <Text
    display="flex"
    color={['red', 'green', 'blue']}
    fontWeight="500"
    fontSize={[30, 40, 50]}
  >
    Все говно! И говно - говно!
  </Text>
  <Text
    display="flex"
    color={['red', 'green', 'blue']}
    fontWeight="600"
    fontSize={[30, 40, 50]}
  >
    Все говно! И говно - говно!
  </Text>
  <Text
    display="flex"
    color={['red', 'green', 'blue']}
    fontWeight="700"
    fontSize={[30, 40, 50]}
  >
    Все говно! И говно - говно!
  </Text>
  <Text
    display="flex"
    color={['red', 'green', 'blue']}
    fontWeight="800"
    fontSize={[30, 40, 50]}
  >
    Все говно! И говно - говно!
  </Text>
  <Text
    display="flex"
    color={['red', 'green', 'blue']}
    fontWeight="900"
    fontSize={[30, 40, 50]}
  >
    Все говно! И говно - говно!
  </Text>
</View>
```

## Ссылка

```jsx
import React from 'react'
import { Pressable, Text } from 'pijma'

;<Pressable>
  {({ hovered, pressed }) => (
    <Text
      color={hovered || pressed ? 'orange' : 'blue'}
      fontWeight="100"
      fontSize={40}
      href="https://google.com"
      hrefAttrs={{
        target: '_blank',
      }}
    >
      Все говно! И говно - говно!
    </Text>
  )}
</Pressable>
```
