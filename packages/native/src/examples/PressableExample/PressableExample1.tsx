import { Pressable, Text } from '@pijma/react-native'
import React from 'react'
export const PressableExample1 = () => {
  return (
    <Pressable
      backgroundColor={({ pressed }) => (pressed ? 'red' : 'green')}
      width={300}
      height={300}
      padding={10}
      borderRadius={150}
      alignContent="center"
      justifyContent="center"
      shadowColor={({ pressed }) => (pressed ? 'green' : undefined)}
      shadowRadius={({ pressed }) => (pressed ? 10 : undefined)}
      elevation={({ pressed }) => (pressed ? 10 : undefined)}
    >
      {({ pressed }) => (
        <Text textAlign="center" color="#fff" fontSize={30} selectable={false}>
          {pressed
            ? 'Are you freak?\nStop pressing me!'
            : 'Let`s do this!\nYou can press me'}
        </Text>
      )}
    </Pressable>
  )
}
