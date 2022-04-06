import { Image } from 'pijma'
import React from 'react'
export const ImageExample3 = () => {
  return (
    <Image
      width={[300, 600, 800]}
      height={[300, 600, 800]}
      source={{
        uri: 'https://chpic.su/_data/stickers/f/FreeFromWorries/FreeFromWorries_041.webp',
      }}
    />
  )
}
