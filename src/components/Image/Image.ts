import { Image as RNImage } from 'react-native'

import { ImageProps, styled } from '../../styled'

export const Image = styled<ImageProps>(RNImage, { style: 'image' })
