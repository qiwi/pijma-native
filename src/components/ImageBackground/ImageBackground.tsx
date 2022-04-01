import {
  ImageBackground as RNImageBackground,
  ImageBackgroundProps as RNImageBackgroundProps,
} from 'react-native'

import {
  ImageStyle,
  ResponsivePrefixStyleProps,
  ResponsiveStyleProps,
  styled,
  ViewStyle,
} from '../../styled'

export type ImageBackgroundProps = Omit<
  RNImageBackgroundProps,
  'style' | 'imageStyle'
> &
  ResponsiveStyleProps<ViewStyle> &
  ResponsivePrefixStyleProps<ImageStyle, 'image'>

export const ImageBackground = styled<ImageBackgroundProps>(RNImageBackground, {
  style: 'view',
  imageStyle: 'image',
})

ImageBackground.displayName = 'ImageBackground'
