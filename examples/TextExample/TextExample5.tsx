import { Text } from 'pijma'
import React, { useState } from 'react'

export const TextExample5 = () => {
  const [hovered, setHovered] = useState(false)

  return (
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
  )
}
