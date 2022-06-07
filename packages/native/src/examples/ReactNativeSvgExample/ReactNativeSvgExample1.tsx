import { Svg, SvgCircle, SvgRect } from '@pijma/react-native-svg'
import React from 'react'
export const ReactNativeSvgExample1 = () => {
  return (
    <Svg height="300" width="300" viewBox="0 0 100 100">
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
  )
}
