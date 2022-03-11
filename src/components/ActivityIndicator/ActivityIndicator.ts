import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native'

import { ResponsiveStyleProps, styled } from '../../styled'
import { ViewStyle, viewStyles } from '../../styles'

export type ActivityIndicatorProps = Omit<RNActivityIndicatorProps, 'style'> &
  ResponsiveStyleProps<ViewStyle>

export const ActivityIndicator = styled<ActivityIndicatorProps>(
  RNActivityIndicator,
  viewStyles,
)
