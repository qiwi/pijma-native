import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native'

import {
  MouseEventHandlerProps,
  styled,
  StyledProps,
  TextStyle,
} from '../../styled'

export type TextInputProps = StyledProps<
  RNTextInputProps &
    MouseEventHandlerProps & {
      /**
       * @platform web
       */
      disabled?: boolean
    },
  TextStyle
>

export const TextInput = styled<TextInputProps>(RNTextInput, { style: 'text' })
