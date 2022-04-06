import {
  TouchableNativeFeedback as RNTouchableNativeFeedback,
  TouchableNativeFeedbackProps as RNTouchableNativeFeedbackProps,
} from 'react-native'

import { styled, StyledProps, ViewStyle } from '../../styled'

export type TouchableNativeFeedbackProps = StyledProps<
  RNTouchableNativeFeedbackProps,
  ViewStyle
>

export const TouchableNativeFeedback = styled<TouchableNativeFeedbackProps>(
  RNTouchableNativeFeedback,
  { style: 'view' },
)
