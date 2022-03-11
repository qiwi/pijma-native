import React, { forwardRef } from 'react'
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
} from 'react-native'

import {
  breakpointValue,
  createStyleSheet,
  PrefixStyle,
  prefixStyles,
  ResponsivePrefixStyleProps,
  ResponsiveStyleProps,
  unPrefixStyle,
} from '../../styled'
import { ViewStyle, viewStyles } from '../../styles'

export type KeyboardAvoidingViewProps = Omit<
  RNKeyboardAvoidingViewProps,
  'style' | 'contentContainerStyle'
> &
  ResponsiveStyleProps<ViewStyle> &
  ResponsivePrefixStyleProps<ViewStyle, 'contentContainer'>

const contentContainerViewStyles = prefixStyles(viewStyles, 'contentContainer')

export const KeyboardAvoidingView = forwardRef<any, KeyboardAvoidingViewProps>(
  (props, ref) => {
    const styles = {} as ViewStyle
    const contentContainerStyles = {} as ViewStyle
    const attrs = {} as RNKeyboardAvoidingViewProps
    Object.entries(props).forEach(([prop, value]) => {
      const styleProp = prop as keyof ViewStyle
      const contentContainerStyleProp = prop as PrefixStyle<
        ViewStyle,
        'contentContainer'
      >
      const attrsProp = prop as keyof RNKeyboardAvoidingViewProps
      if (viewStyles.includes(styleProp)) {
        styles[styleProp] = breakpointValue(styleProp, value)
      } else if (
        contentContainerViewStyles.includes(contentContainerStyleProp)
      ) {
        const contentContainerViewStyleProp = unPrefixStyle<
          ViewStyle,
          'contentContainer'
        >(contentContainerStyleProp, 'contentContainer')
        contentContainerStyles[contentContainerViewStyleProp] = breakpointValue(
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
      <RNKeyboardAvoidingView
        ref={ref}
        {...attrs}
        style={style}
        contentContainerStyle={contentContainerStyle}
      />
    )
  },
)

KeyboardAvoidingView.displayName = 'KeyboardAvoidingView'
