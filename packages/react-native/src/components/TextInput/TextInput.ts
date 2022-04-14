import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native'

import { styled, StyledProps, TextStyle } from '../../styled'

export type TextInputProps = StyledProps<RNTextInputProps, TextStyle>

export const TextInput = styled<TextInputProps>(RNTextInput, { style: 'text' })
