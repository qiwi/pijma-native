Велосипед над нативным компонентом [View](https://reactnative.dev/docs/view)

## Простой блок

```jsx
import React from 'react'
import { View } from 'pijma'

;<View backgroundColor="gray" width={200} height={200} />
```

## Адаптивный блок

```jsx
import React from 'react'
import { View } from 'pijma'

;<View
  backgroundColor={['red', 'green', 'blue']}
  width={[100, 200, 300]}
  height={[100, 200, 300]}
/>
```

## Ссылка

```jsx
import React from 'react'
import { Pressable, View } from 'pijma'

;<Pressable>
  {({ hovered, pressed }) => (
    <View
      backgroundColor={hovered || pressed ? 'orange' : 'blue'}
      outlineColor="orange"
      width={200}
      height={200}
      href="https://google.com"
      hrefAttrs={{
        target: '_blank',
      }}
    />
  )}
</Pressable>
```

## Анимация

```jsx
import React from 'react'
import { Animated, Easing } from 'pijma'

const anim = new Animated.Value(0)

Animated.loop(
  Animated.sequence([
    Animated.timing(anim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.bounce,
      useNativeDriver: false,
    }),
    Animated.timing(anim, {
      toValue: 0,
      duration: 2000,
      easing: Easing.bounce,
      useNativeDriver: false,
    }),
  ]),
).start()
;<Animated.View
  margin={anim.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 50],
  })}
  width={anim.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 200],
  })}
  height={anim.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 200],
  })}
  borderRadius={anim.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 20],
  })}
  backgroundColor={anim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#46e891', '#277ef4'],
  })}
  transform={[
    {
      rotateZ: anim.interpolate({
        inputRange: [0, 1],
        outputRange: ['45deg', '225deg'],
      }),
    },
  ]}
/>
```
