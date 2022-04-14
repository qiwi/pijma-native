import { Pressable, Text } from '@pijma/react-native'
import React from 'react'
export const TextExample5 = () => {
  return (
    <Pressable>
      {({ hovered, pressed }) => (
        <Text
          color={hovered || pressed ? 'orange' : 'blue'}
          fontWeight="100"
          fontSize={40}
          href="https://google.com"
          hrefAttrs={{
            target: '_blank',
          }}
        >
          Все говно! И говно - говно!
        </Text>
      )}
    </Pressable>
  )
}
