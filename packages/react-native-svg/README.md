Wrapper around [react-native-svg](https://github.com/react-native-svg/react-native-svg#readme)

No special magic... just reexporting components from `react-native-svg` with prefix `Svg`

```tsx
import React from 'react'
import { Svg, SvgCircle, SvgRect } from '@pijma/react-native-svg'
;<Svg height="50%" width="50%" viewBox="0 0 100 100">
  <SvgCircle
    cx="50"
    cy="50"
    r="45"
    stroke="blue"
    strokeWidth="2.5"
    fill="green"
  />
  <SvgRect
    x="15"
    y="15"
    width="70"
    height="70"
    stroke="red"
    strokeWidth="2"
    fill="yellow"
  />
</Svg>
```
