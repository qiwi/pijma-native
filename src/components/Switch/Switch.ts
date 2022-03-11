import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from 'react-native'

import { styled, StyledProps } from '../../styled'
import { ViewStyle, viewStyles } from '../../styles'

export type SwitchProps = StyledProps<RNSwitchProps, ViewStyle>

export const Switch = styled<SwitchProps>(RNSwitch, viewStyles)
