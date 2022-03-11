import { Text as RNText } from 'react-native'

import { TextProps } from '../../props'
import { styled } from '../../styled'
import { textStyles } from '../../styles'

export const Text = styled<TextProps>(RNText, textStyles)
