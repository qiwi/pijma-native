import {
  InputAccessoryView as RNInputAccessoryView,
  InputAccessoryViewProps as RNInputAccessoryViewProps,
} from 'react-native'

import { styled, StyledProps } from '../../styled'
import { ViewStyle, viewStyles } from '../../styles'

export type InputAccessoryViewProps = StyledProps<
  RNInputAccessoryViewProps,
  ViewStyle
>

export const InputAccessoryView = styled<InputAccessoryViewProps>(
  RNInputAccessoryView,
  viewStyles,
)
