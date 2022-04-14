import { Pressable, Text } from '@pijma/react-native'
import React from 'react'
export const TextExample5 = () => {
  return (
    <Pressable>
      {({ hovered, pressed }) => (
        <Text
          color={hovered || pressed ? 'orange' : 'blue'}
          fontWeight="100"
          fontSize={24}
          href="https://google.com"
          hrefAttrs={{
            target: '_blank',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      )}
    </Pressable>
  )
}
