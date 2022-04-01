import {
  SectionList as RNSectionList,
  SectionListProps as RNSectionListProps,
} from 'react-native'

import {
  ResponsivePrefixStyleProps,
  ResponsiveStyleProps,
  styled,
  ViewStyle,
} from '../../styled'

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

export const SectionList = styled<SectionListProps<any>>(RNSectionList, {
  style: 'view',
  contentContainerStyle: 'view',
  ListFooterComponentStyle: 'view',
  ListHeaderComponentStyle: 'view',
})

SectionList.displayName = 'SectionList'
