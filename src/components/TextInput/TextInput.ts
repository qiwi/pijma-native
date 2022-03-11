import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native'

import { styled, StyledProps } from '../../styled'
import { TextStyle, textStyles } from '../../styles'

export type TextInputProps = StyledProps<RNTextInputProps, TextStyle>

export const TextInput = styled<TextInputProps>(RNTextInput, textStyles)
