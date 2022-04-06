Велосипед над нативным компонентом [Image](https://reactnative.dev/docs/image)

## Простая картинка

```jsx
import React from 'react'
import { Image } from '@pijma/react-native'
;<Image
  width={300}
  height={300}
  source={{
    uri: 'https://chpic.su/_data/stickers/f/FreeFromWorries/FreeFromWorries_041.webp',
  }}
/>
```

## Адаптивная картинка

```jsx
import React from 'react'
import { Image } from '@pijma/react-native'
;<Image
  width={[300, 600, 800]}
  height={[300, 600, 800]}
  source={{
    uri: 'https://chpic.su/_data/stickers/f/FreeFromWorries/FreeFromWorries_041.webp',
  }}
/>
```
