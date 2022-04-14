import { ImageBackground, Text } from '@pijma/react-native'
import React from 'react'
export const ImageBackgroundExample1 = () => {
  return (
    <ImageBackground
      width={300}
      height={300}
      alignItems="center"
      justifyContent="center"
      imageShadowColor="#ff0000"
      imageShadowOpacity={0.5}
      imageShadowOffset={{ width: 1, height: 1 }}
      source={{
        uri: 'https://chpic.su/_data/stickers/f/FreeFromWorries/FreeFromWorries_041.webp',
      }}
    >
      <Text
        width={200}
        height={200}
        color="white"
        fontSize={40}
        fontWeight="bold"
        lineHeight={200}
        textAlign="center"
        backgroundColor="#000000c0"
      >
        INSIDE
      </Text>
    </ImageBackground>
  )
}
