import { View } from 'pijma'
import React, { useState } from 'react'

export const ViewExample5 = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <View
      backgroundColor={hovered ? 'orange' : 'blue'}
      outlineColor="orange"
      width={200}
      height={200}
      href="https://google.com"
      hrefAttrs={{
        target: '_blank',
      }}
      // it works but wrong
      onMouseEnter={() => setHovered(true)}
      // it works but wrong
      onMouseLeave={() => setHovered(false)}
    />
  )
}
