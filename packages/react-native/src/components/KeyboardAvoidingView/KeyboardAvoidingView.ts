import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
} from 'react-native'

import {
  ResponsivePrefixStyleProps,
  ResponsiveStyleProps,
  styled,
  ViewStyle,
} from '../../styled'

export type KeyboardAvoidingViewProps = Omit<
  RNKeyboardAvoidingViewProps,
  'style' | 'contentContainerStyle'
> &
  ResponsiveStyleProps<ViewStyle> &
  ResponsivePrefixStyleProps<ViewStyle, 'contentContainer'>

export const KeyboardAvoidingView = styled<KeyboardAvoidingViewProps>(
  RNKeyboardAvoidingView,
  {
    style: 'view',
    contentContainerStyle: 'view',
  },
)

KeyboardAvoidingView.displayName = 'KeyboardAvoidingView'
