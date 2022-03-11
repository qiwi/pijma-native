import { Image as RNImage } from 'react-native'

import { ImageProps } from '../../props'
import { styled } from '../../styled'
import { imageStyles } from '../../styles'

export const Image = styled<ImageProps>(RNImage, imageStyles)
