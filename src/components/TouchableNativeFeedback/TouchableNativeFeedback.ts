import {
  TouchableNativeFeedback as RNTouchableNativeFeedback,
  TouchableNativeFeedbackProps as RNTouchableNativeFeedbackProps,
} from 'react-native'

import { styled, StyledProps } from '../../styled'
import { ViewStyle, viewStyles } from '../../styles'

export type TouchableNativeFeedbackProps = StyledProps<
  RNTouchableNativeFeedbackProps,
  ViewStyle
>

export const TouchableNativeFeedback = styled<TouchableNativeFeedbackProps>(
  RNTouchableNativeFeedback,
  viewStyles,
)
