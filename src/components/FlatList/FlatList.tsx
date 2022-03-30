import React, { forwardRef } from 'react'
import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
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

export type FlatListProps<Item> = Omit<
  RNFlatListProps<Item>,
  | 'style'
  | 'contentContainerStyle'
  | 'ListFooterComponentStyle'
  | 'ListHeaderComponentStyle'
  | 'columnWrapperStyle'
> &
  ResponsiveStyleProps<ViewStyle> &
  ResponsivePrefixStyleProps<ViewStyle, 'contentContainer'> &
  ResponsivePrefixStyleProps<ViewStyle, 'listFooterComponent'> &
  ResponsivePrefixStyleProps<ViewStyle, 'listHeaderComponent'> &
  ResponsivePrefixStyleProps<ViewStyle, 'columnWrapper'>

const contentContainerViewStyles = prefixStyles(viewStyles, 'contentContainer')

const listFooterComponentViewStyles = prefixStyles(
  viewStyles,
  'listFooterComponent',
)

const listHeaderComponentViewStyles = prefixStyles(
  viewStyles,
  'listHeaderComponent',
)

const columnWrapperViewStyles = prefixStyles(viewStyles, 'columnWrapper')

export const FlatList = forwardRef<any, FlatListProps<any>>((props, ref) => {
  const styles = {} as ViewStyle
  const contentContainerStyles = {} as ViewStyle
  const listFooterComponentStyles = {} as ViewStyle
  const listHeaderComponentStyles = {} as ViewStyle
  const columnWrapperStyles = {} as ViewStyle
  const attrs = {} as RNFlatListProps<any>
  Object.entries(props).forEach(([prop, value]) => {
    const styleProp = prop as keyof ViewStyle
    const contentContainerStyleProp = prop as PrefixStyle<
      ViewStyle,
      'contentContainer'
    >
    const listFooterComponentStyleProp = prop as PrefixStyle<
      ViewStyle,
      'listFooterComponent'
    >
    const listHeaderComponentStyleProp = prop as PrefixStyle<
      ViewStyle,
      'listHeaderComponent'
    >
    const columnWrapperStyleProp = prop as PrefixStyle<
      ViewStyle,
      'columnWrapper'
    >
    const attrsProp = prop as keyof RNFlatListProps<any>
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
    } else if (
      listFooterComponentViewStyles.includes(listFooterComponentStyleProp)
    ) {
      const listFooterComponentViewStyleProp = unPrefixStyle<
        ViewStyle,
        'listFooterComponent'
      >(listFooterComponentStyleProp, 'listFooterComponent')
      listFooterComponentStyles[listFooterComponentViewStyleProp] =
        normalizeValue(listFooterComponentViewStyleProp, value)
    } else if (
      listHeaderComponentViewStyles.includes(listHeaderComponentStyleProp)
    ) {
      const listHeaderComponentViewStyleProp = unPrefixStyle<
        ViewStyle,
        'listHeaderComponent'
      >(listHeaderComponentStyleProp, 'listHeaderComponent')
      listHeaderComponentStyles[listHeaderComponentViewStyleProp] =
        normalizeValue(listHeaderComponentViewStyleProp, value)
    } else if (columnWrapperViewStyles.includes(columnWrapperStyleProp)) {
      const columnWrapperViewStyleProp = unPrefixStyle<
        ViewStyle,
        'columnWrapper'
      >(columnWrapperStyleProp, 'columnWrapper')
      columnWrapperStyles[columnWrapperViewStyleProp] = normalizeValue(
        columnWrapperViewStyleProp,
        value,
      )
    } else {
      // @ts-ignore TS2590: Expression produces a union type that is too complex to represent.
      attrs[attrsProp] = value
    }
  })
  const {
    style,
    contentContainerStyle,
    listFooterComponentStyle,
    listHeaderComponentStyle,
    columnWrapperStyle,
  } = createStyleSheet({
    style: styles,
    contentContainerStyle: contentContainerStyles,
    listFooterComponentStyle: listFooterComponentStyles,
    listHeaderComponentStyle: listHeaderComponentStyles,
    columnWrapperStyle: columnWrapperStyles,
  })
  return (
    <RNFlatList
      ref={ref}
      {...attrs}
      style={style}
      contentContainerStyle={contentContainerStyle}
      ListFooterComponentStyle={listFooterComponentStyle}
      ListHeaderComponentStyle={listHeaderComponentStyle}
      columnWrapperStyle={attrs.numColumns ? columnWrapperStyle : undefined}
    />
  )
})

FlatList.displayName = 'FlatList'
