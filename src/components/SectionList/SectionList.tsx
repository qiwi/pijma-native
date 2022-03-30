import React, { forwardRef } from 'react'
import {
  SectionList as RNSectionList,
  SectionListProps as RNSectionListProps,
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

export type SectionListProps<Item> = Omit<
  RNSectionListProps<Item>,
  | 'style'
  | 'contentContainerStyle'
  | 'ListFooterComponentStyle'
  | 'ListHeaderComponentStyle'
> &
  ResponsiveStyleProps<ViewStyle> &
  ResponsivePrefixStyleProps<ViewStyle, 'contentContainer'> &
  ResponsivePrefixStyleProps<ViewStyle, 'listFooterComponent'> &
  ResponsivePrefixStyleProps<ViewStyle, 'listHeaderComponent'>

const contentContainerViewStyles = prefixStyles(viewStyles, 'contentContainer')

const listFooterComponentViewStyles = prefixStyles(
  viewStyles,
  'listFooterComponent',
)

const listHeaderComponentViewStyles = prefixStyles(
  viewStyles,
  'listHeaderComponent',
)

export const SectionList = forwardRef<any, SectionListProps<any>>(
  (props, ref) => {
    const styles = {} as ViewStyle
    const contentContainerStyles = {} as ViewStyle
    const listFooterComponentStyles = {} as ViewStyle
    const listHeaderComponentStyles = {} as ViewStyle
    const attrs = {} as RNSectionListProps<any>
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
      const attrsProp = prop as keyof RNSectionListProps<any>
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
    } = createStyleSheet({
      style: styles,
      contentContainerStyle: contentContainerStyles,
      listFooterComponentStyle: listFooterComponentStyles,
      listHeaderComponentStyle: listHeaderComponentStyles,
    })
    return (
      <RNSectionList
        ref={ref}
        {...attrs}
        style={style}
        contentContainerStyle={contentContainerStyle}
        ListFooterComponentStyle={listFooterComponentStyle}
        ListHeaderComponentStyle={listHeaderComponentStyle}
      />
    )
  },
)

SectionList.displayName = 'SectionList'
