import {
  DrawerLayoutAndroid as RNDrawerLayoutAndroid,
  DrawerLayoutAndroidProps as RNDrawerLayoutAndroidProps,
} from 'react-native'

import { styled, StyledProps } from '../../styled'
import { ViewStyle, viewStyles } from '../../styles'

export type DrawerLayoutAndroidProps = StyledProps<
  RNDrawerLayoutAndroidProps,
  ViewStyle
>

export const DrawerLayoutAndroid = styled<DrawerLayoutAndroidProps>(
  RNDrawerLayoutAndroid,
  viewStyles,
)
