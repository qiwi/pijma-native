Велосипед над нативным компонентом [Text](https://reactnative.dev/docs/text)

## Простой текст

```jsx
import React from 'react';
import {View, Text} from 'pijma';

<View flex={1} width="100%">
  {['100', '200', '300', '400', '500', '600', '700', '800', '900'].map((fontWeight) => (
    <Text key={fontWeight} display="flex" color="gray" fontWeight={fontWeight} fontSize={40}>
      Все говно! И говно - говно!
    </Text>
  ))}
</View>
```

## Адаптивный текст

```jsx
import React from 'react';
import {View, Text} from 'pijma';

<View flex={1} width="100%">
  {['100', '200', '300', '400', '500', '600', '700', '800', '900'].map((fontWeight) => (
    <Text key={fontWeight} display="flex" color={['red', 'green', 'blue']} fontWeight={fontWeight} fontSize={[30, 40, 50]}>
      Все говно! И говно - говно!
    </Text>
  ))}
</View>
```

## Ссылка

```jsx
import React, {useState} from 'react';
import {Text} from 'pijma';

const [hovered, setHovered] = useState(false);

<Text
  color={hovered ? 'orange' : 'blue'}
  fontWeight="100"
  fontSize={40}
  href="https://google.com"
  hrefAttrs={{
    target: '_blank',
  }}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  Все говно! И говно - говно!
</Text>
```
