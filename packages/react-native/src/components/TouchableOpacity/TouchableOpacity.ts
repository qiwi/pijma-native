import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native'

import { styled, StyledProps, ViewStyle } from '../../styled'

export type TouchableOpacityProps = StyledProps<
  RNTouchableOpacityProps,
  ViewStyle
>

export const TouchableOpacity = styled<TouchableOpacityProps>(
  RNTouchableOpacity,
  { style: 'view' },
)
