import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from 'react-native'

import { styled, StyledProps, ViewStyle } from '../../styled'

export type SwitchProps = StyledProps<RNSwitchProps, ViewStyle>

export const Switch = styled<SwitchProps>(RNSwitch, { style: 'view' })
