import { SafeAreaView as RNSafeAreaView } from 'react-native'

import { ViewProps } from '../../props'
import { styled } from '../../styled'
import { viewStyles } from '../../styles'

export type SafeAreaViewProps = ViewProps

export const SafeAreaView = styled<SafeAreaViewProps>(
  RNSafeAreaView,
  viewStyles,
)
