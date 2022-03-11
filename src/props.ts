import {
  ImageProps as RNImageProps,
  TextProps as RNTextProps,
  ViewProps as RNViewProps,
} from 'react-native'

import { StyledProps } from './styled'
import { ImageStyle, TextStyle, ViewStyle } from './styles'

type HrefProps = {
  href?: string
  hrefAttrs?: {
    download?: string
    rel?: string
    target?: string
  }
}

export type ViewProps = StyledProps<RNViewProps, ViewStyle> & HrefProps

export type TextProps = StyledProps<RNTextProps, TextStyle> & HrefProps

export type ImageProps = StyledProps<RNImageProps, ImageStyle>
