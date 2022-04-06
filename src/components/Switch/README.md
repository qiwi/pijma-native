Велосипед над нативным компонентом [Switch](https://reactnative.dev/docs/switch)

```jsx
import React, { useState } from 'react'
import { Switch, View } from 'pijma'

const [value, setValue] = useState(false)

;<View flex={1} alignItems="center" justifyContent="center">
  <Switch onValueChange={() => setValue(!value)} value={value} />
</View>
```
