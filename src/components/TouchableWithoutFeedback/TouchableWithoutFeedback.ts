import {
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  TouchableWithoutFeedbackProps as RNTouchableWithoutFeedbackProps,
} from 'react-native'

import { styled, StyledProps } from '../../styled'
import { ViewStyle, viewStyles } from '../../styles'

export type TouchableWithoutFeedbackProps = StyledProps<
  RNTouchableWithoutFeedbackProps,
  ViewStyle
>

export const TouchableWithoutFeedback = styled<TouchableWithoutFeedbackProps>(
  RNTouchableWithoutFeedback,
  viewStyles,
)
