import {
  InputAccessoryView as RNInputAccessoryView,
  InputAccessoryViewProps as RNInputAccessoryViewProps,
} from 'react-native'

import { styled, StyledProps, ViewStyle } from '../../styled'

export type InputAccessoryViewProps = StyledProps<
  RNInputAccessoryViewProps,
  ViewStyle
>

export const InputAccessoryView = styled<InputAccessoryViewProps>(
  RNInputAccessoryView,
  { style: 'view' },
)
