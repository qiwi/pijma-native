import {
  DrawerLayoutAndroid as RNDrawerLayoutAndroid,
  DrawerLayoutAndroidProps as RNDrawerLayoutAndroidProps,
} from 'react-native'

import { styled, StyledProps, ViewStyle } from '../../styled'

export type DrawerLayoutAndroidProps = StyledProps<
  RNDrawerLayoutAndroidProps,
  ViewStyle
>

export const DrawerLayoutAndroid = styled<DrawerLayoutAndroidProps>(
  RNDrawerLayoutAndroid,
  { style: 'view' },
)
