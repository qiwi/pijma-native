import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native'

import { styled, StyledProps, ViewStyle } from '../../styled'

export type ActivityIndicatorProps = StyledProps<
  RNActivityIndicatorProps,
  ViewStyle
>

export const ActivityIndicator = styled<ActivityIndicatorProps>(
  RNActivityIndicator,
  { style: 'view' },
)
