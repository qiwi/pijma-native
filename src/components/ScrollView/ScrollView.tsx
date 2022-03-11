import React, { forwardRef } from 'react'
import {
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
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
import { ViewStyle, viewStyles } from '../../styles'

export type ScrollViewProps = Omit<
  RNScrollViewProps,
  'style' | 'contentContainerStyle'
> &
  ResponsiveStyleProps<ViewStyle> &
  ResponsivePrefixStyleProps<ViewStyle, 'contentContainer'>

const contentContainerViewStyles = prefixStyles(viewStyles, 'contentContainer')

export const ScrollView = forwardRef<any, ScrollViewProps>((props, ref) => {
  const styles = {} as ViewStyle
  const contentContainerStyles = {} as ViewStyle
  const attrs = {} as RNScrollViewProps
  Object.entries(props).forEach(([prop, value]) => {
    const styleProp = prop as keyof ViewStyle
    const contentContainerStyleProp = prop as PrefixStyle<
      ViewStyle,
      'contentContainer'
    >
    const attrsProp = prop as keyof RNScrollViewProps
    if (viewStyles.includes(styleProp)) {
      styles[styleProp] = normalizeValue(styleProp, value)
    } else if (contentContainerViewStyles.includes(contentContainerStyleProp)) {
      const contentContainerViewStyleProp = unPrefixStyle<
        ViewStyle,
        'contentContainer'
      >(contentContainerStyleProp, 'contentContainer')
      contentContainerStyles[contentContainerViewStyleProp] = normalizeValue(
        contentContainerViewStyleProp,
        value,
      )
    } else {
      // @ts-ignore TS2590: Expression produces a union type that is too complex to represent.
      attrs[attrsProp] = value
    }
  })
  const { style, contentContainerStyle } = createStyleSheet({
    style: styles,
    contentContainerStyle: contentContainerStyles,
  })
  return (
    <RNScrollView
      ref={ref}
      {...attrs}
      style={style}
      contentContainerStyle={contentContainerStyle}
    />
  )
})

ScrollView.displayName = 'ScrollView'
