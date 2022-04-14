import {
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
} from 'react-native'

import {
  ResponsivePrefixStyleProps,
  ResponsiveStyleProps,
  styled,
  ViewStyle,
} from '../../styled'

export type ScrollViewProps = Omit<
  RNScrollViewProps,
  'style' | 'contentContainerStyle'
> &
  ResponsiveStyleProps<ViewStyle> &
  ResponsivePrefixStyleProps<ViewStyle, 'contentContainer'>

export const ScrollView = styled<ScrollViewProps>(RNScrollView, {
  style: 'view',
  contentContainerStyle: 'view',
})

ScrollView.displayName = 'ScrollView'
