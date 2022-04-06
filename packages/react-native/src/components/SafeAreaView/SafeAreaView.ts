import { SafeAreaView as RNSafeAreaView } from 'react-native'

import { styled, ViewProps } from '../../styled'

export type SafeAreaViewProps = ViewProps

export const SafeAreaView = styled<SafeAreaViewProps>(RNSafeAreaView, {
  style: 'view',
})
