import {
  VirtualizedList as RNVirtualizedList,
  VirtualizedListProps as RNVirtualizedListProps,
} from 'react-native'

import {
  ResponsivePrefixStyleProps,
  ResponsiveStyleProps,
  styled,
  ViewStyle,
} from '../../styled'

export type VirtualizedListProps<Item> = Omit<
  RNVirtualizedListProps<Item>,
  'style' | 'contentContainerStyle'
> &
  ResponsiveStyleProps<ViewStyle> &
  ResponsivePrefixStyleProps<ViewStyle, 'contentContainer'>

export const VirtualizedList = styled<VirtualizedListProps<any>>(
  RNVirtualizedList,
  {
    style: 'view',
    contentContainerStyle: 'view',
  },
)

VirtualizedList.displayName = 'VirtualizedList'
