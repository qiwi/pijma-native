import React, { forwardRef } from 'react'
import {
  ImageBackground as RNImageBackground,
  ImageBackgroundProps as RNImageBackgroundProps,
} from 'react-native'

import {
  createStyleSheet,
  normalizeValue,
  PrefixStyle,
  prefixStyles,
  ResponsivePrefixStyleProps,
  ResponsiveStyleProps,
  unPrefixStyle,
} from '../../styled'
import { ImageStyle, imageStyles, ViewStyle, viewStyles } from '../../styles'

export type ImageBackgroundProps = Omit<
  RNImageBackgroundProps,
  'style' | 'imageStyle'
> &
  ResponsiveStyleProps<ViewStyle> &
  ResponsivePrefixStyleProps<ImageStyle, 'image'>

const imageImageStyles = prefixStyles(imageStyles, 'image')

export const ImageBackground = forwardRef<any, ImageBackgroundProps>(
  (props, ref) => {
    const styles = {} as ViewStyle
    const imageStyles = {} as ImageStyle
    const attrs = {} as RNImageBackgroundProps
    Object.entries(props).forEach(([prop, value]) => {
      const styleProp = prop as keyof ViewStyle
      const imageStyleProp = prop as PrefixStyle<ImageStyle, 'image'>
      const attrsProp = prop as keyof RNImageBackgroundProps
      if (viewStyles.includes(styleProp)) {
        styles[styleProp] = normalizeValue(styleProp, value)
      } else if (imageImageStyles.includes(imageStyleProp)) {
        const imageImageStyleProp = unPrefixStyle<ImageStyle, 'image'>(
          imageStyleProp,
          'image',
        )
        imageStyles[imageImageStyleProp] = normalizeValue(
          imageImageStyleProp,
          value,
        )
      } else {
        // @ts-ignore TS2590: Expression produces a union type that is too complex to represent.
        attrs[attrsProp] = value
      }
    })
    const { style, imageStyle } = createStyleSheet({
      style: styles,
      imageStyle: imageStyles,
    })
    return (
      <RNImageBackground
        ref={ref}
        {...attrs}
        style={style}
        imageStyle={imageStyle}
      />
    )
  },
)

ImageBackground.displayName = 'ImageBackground'
