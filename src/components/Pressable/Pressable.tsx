import React, { forwardRef } from 'react'
import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  PressableStateCallbackType as RNPressableStateCallbackType,
} from 'react-native'

import {
  createStyleSheet,
  normalizeValue,
  ResponsiveStateValue,
  ResponsiveStyleStateProps,
} from '../../styled'
import { ViewStyle, viewStyles } from '../../styles'

type PressableStateCallbackType = RNPressableStateCallbackType & {
  hovered?: boolean
  focused?: boolean
}

export type PressableProps = Omit<RNPressableProps, 'style'> &
  ResponsiveStyleStateProps<ViewStyle, PressableStateCallbackType>

export const Pressable = forwardRef<any, PressableProps>((props, ref) => {
  const styles = {} as ResponsiveStyleStateProps<
    ViewStyle,
    PressableStateCallbackType
  >
  const attrs = {} as RNPressableProps
  Object.entries(props).forEach(([prop, value]) => {
    const styleProp = prop as keyof ViewStyle
    const styleValue = value as ResponsiveStateValue<
      keyof ViewStyle,
      PressableStateCallbackType
    >
    const attrsProp = prop as keyof RNPressableProps
    if (viewStyles.includes(styleProp)) {
      // @ts-ignore TS2590: Expression produces a union type that is too complex to represent.
      styles[styleProp] = (state: PressableStateCallbackType) =>
        // @ts-ignore TS2590: Expression produces a union type that is too complex to represent.
        normalizeValue(
          styleProp,
          typeof styleValue === 'function' ? styleValue(state) : styleValue,
        )
    } else {
      // @ts-ignore TS2590: Expression produces a union type that is too complex to represent.
      attrs[attrsProp] = value
    }
  })
  const style = (state: PressableStateCallbackType) =>
    createStyleSheet({
      style: Object.entries(styles).reduce(
        (styles, [prop, value]) => ({
          ...styles,
          ...{
            // @ts-ignore
            [prop]: value(state),
          },
        }),
        {},
      ),
    }).style
  return <RNPressable {...attrs} ref={ref} style={style} />
})

Pressable.displayName = 'Pressable'
