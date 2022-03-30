import React, { forwardRef } from 'react'
import {
  VirtualizedList as RNVirtualizedList,
  VirtualizedListProps as RNVirtualizedListProps,
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

export type VirtualizedListProps<Item> = Omit<
  RNVirtualizedListProps<Item>,
  'style' | 'contentContainerStyle'
> &
  ResponsiveStyleProps<ViewStyle> &
  ResponsivePrefixStyleProps<ViewStyle, 'contentContainer'>

const contentContainerViewStyles = prefixStyles(viewStyles, 'contentContainer')

export const VirtualizedList = forwardRef<any, VirtualizedListProps<any>>(
  (props, ref) => {
    const styles = {} as ViewStyle
    const contentContainerStyles = {} as ViewStyle
    const attrs = {} as RNVirtualizedListProps<any>
    Object.entries(props).forEach(([prop, value]) => {
      const styleProp = prop as keyof ViewStyle
      const contentContainerStyleProp = prop as PrefixStyle<
        ViewStyle,
        'contentContainer'
      >
      const attrsProp = prop as keyof RNVirtualizedListProps<any>
      if (viewStyles.includes(styleProp)) {
        styles[styleProp] = normalizeValue(styleProp, value)
      } else if (
        contentContainerViewStyles.includes(contentContainerStyleProp)
      ) {
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
      <RNVirtualizedList
        ref={ref}
        {...attrs}
        style={style}
        contentContainerStyle={contentContainerStyle}
      />
    )
  },
)

VirtualizedList.displayName = 'VirtualizedList'
