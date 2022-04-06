import { Image } from '@pijma/react-native'
import React from 'react'
export const ImageExample1 = () => {
  return (
    <Image
      width={300}
      height={300}
      source={{
        uri: 'https://chpic.su/_data/stickers/f/FreeFromWorries/FreeFromWorries_041.webp',
      }}
    />
  )
}
