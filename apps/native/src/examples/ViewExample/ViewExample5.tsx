import { Pressable, View } from '@pijma/react-native'
import React from 'react'
export const ViewExample5 = () => {
  return (
    <Pressable>
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
  )
}
