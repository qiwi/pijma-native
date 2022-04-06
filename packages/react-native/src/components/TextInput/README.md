Велосипед над нативным компонентом [TextInput](https://reactnative.dev/docs/textinput)

```jsx
import React, { useState } from 'react'
import { TextInput } from '@pijma/react-native'

const [number, setNumber] = useState('')

;<TextInput
  width={300}
  height={40}
  margin={12}
  borderWidth={1}
  borderColor="#000"
  outlineStyle="none"
  padding={10}
  value={number}
  placeholder="useless placeholder"
  keyboardType="numeric"
  onChangeText={setNumber}
/>
```
