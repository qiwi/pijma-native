import {
  TouchableHighlight as RNTouchableHighlight,
  TouchableHighlightProps as RNTouchableHighlightProps,
} from 'react-native'

import { styled, StyledProps, ViewStyle } from '../../styled'

export type TouchableHighlightProps = StyledProps<
  RNTouchableHighlightProps,
  ViewStyle
>

export const TouchableHighlight = styled<TouchableHighlightProps>(
  RNTouchableHighlight,
  { style: 'view' },
)
