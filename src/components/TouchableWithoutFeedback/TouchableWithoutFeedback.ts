import {
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  TouchableWithoutFeedbackProps as RNTouchableWithoutFeedbackProps,
} from 'react-native'

import { styled, StyledProps, ViewStyle } from '../../styled'

export type TouchableWithoutFeedbackProps = StyledProps<
  RNTouchableWithoutFeedbackProps,
  ViewStyle
>

export const TouchableWithoutFeedback = styled<TouchableWithoutFeedbackProps>(
  RNTouchableWithoutFeedback,
  { style: 'view' },
)
