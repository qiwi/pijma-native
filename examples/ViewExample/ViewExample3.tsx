import { View } from 'pijma'
import React from 'react'
export const ViewExample3 = () => {
  return (
    <View
      backgroundColor={['red', 'green', 'blue']}
      width={[100, 200, 300]}
      height={[100, 200, 300]}
    />
  )
}
