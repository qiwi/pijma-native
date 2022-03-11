import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native'

import { styled, StyledProps } from '../../styled'
import { ViewStyle, viewStyles } from '../../styles'

export type TouchableOpacityProps = StyledProps<
  RNTouchableOpacityProps,
  ViewStyle
>

export const TouchableOpacity = styled<TouchableOpacityProps>(
  RNTouchableOpacity,
  viewStyles,
)
