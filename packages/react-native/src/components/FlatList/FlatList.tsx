import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
} from 'react-native'

import {
  ResponsivePrefixStyleProps,
  ResponsiveStyleProps,
  styled,
  ViewStyle,
} from '../../styled'

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

export const FlatList = styled<FlatListProps<any>>(RNFlatList, {
  style: 'view',
  contentContainerStyle: 'view',
  ListFooterComponentStyle: 'view',
  ListHeaderComponentStyle: 'view',
  columnWrapperStyle: 'view',
})

FlatList.displayName = 'FlatList'
