import {
  TouchableHighlight as RNTouchableHighlight,
  TouchableHighlightProps as RNTouchableHighlightProps,
} from 'react-native'

import { styled, StyledProps } from '../../styled'
import { ViewStyle, viewStyles } from '../../styles'

export type TouchableHighlightProps = StyledProps<
  RNTouchableHighlightProps,
  ViewStyle
>

export const TouchableHighlight = styled<TouchableHighlightProps>(
  RNTouchableHighlight,
  viewStyles,
)
