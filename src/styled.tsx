import React, { ComponentType, forwardRef } from 'react'
import {
  Platform,
  StyleProp,
  StyleSheet,
  useWindowDimensions,
} from 'react-native'

import { useBreakpoint } from './hooks'

export type ResponsiveValue<Value> = Value | Value[]

export type ResponsiveStateValue<Value, State> = (
  state: State,
) => Value | Value[]

export type ResponsiveStyleProps<Style> = {
  [Key in keyof Style]: ResponsiveValue<Style[Key]>
}

export type ResponsiveStyleStateProps<Style, State> = {
  [Key in keyof Style]:
    | ResponsiveStateValue<Style[Key], State>
    | ResponsiveValue<Style[Key]>
}

export type PrefixStyle<
  Style,
  Prefix extends string,
> = `${Uncapitalize<Prefix>}${Capitalize<keyof Style & string>}`

export type ResponsivePrefixStyleProps<Style, Prefix extends string> = {
  [Key in keyof Style as PrefixStyle<Style, Prefix>]: ResponsiveValue<
    Style[Key]
  >
}

export type ResponsivePrefixStyleStateProps<
  Style,
  State,
  Prefix extends string,
> = {
  [Key in keyof Style as `${Uncapitalize<Prefix>}${Capitalize<
    Key & string
  >}`]: ResponsiveStateValue<Style[Key], State>
}

export const capitalize = (str: string) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`

export const uncapitalize = (str: string) =>
  `${str.charAt(0).toLowerCase()}${str.slice(1)}`

export const prefixStyles: <Style, Prefix extends string>(
  styles: (keyof Style)[],
  prefix: Prefix,
) => PrefixStyle<Style, Prefix>[] = (styles, prefix) =>
  // @ts-ignore
  styles.map((style) => `${uncapitalize(prefix)}${capitalize(style)}`)

export const unPrefixStyle: <Style, Prefix extends string>(
  style: PrefixStyle<Style, Prefix>,
  prefix: Prefix,
) => keyof Style = (style, prefix) =>
  // @ts-ignore
  uncapitalize(style.slice(prefix.length))

export const responsiveValue: <Style>(
  prop: keyof Style,
  value: ResponsiveValue<any> | ResponsiveStateValue<any, any>,
) => any[] = (prop, value) => {
  // transform is array... why? wtf?
  if (prop === 'transform') {
    if (Array.isArray(value) && Array.isArray(value[0])) {
      return value
    }
    return [value]
  }
  if (Array.isArray(value)) {
    return value
  }
  return [value]
}

export const breakpointValue: <Style>(
  prop: keyof Style,
  value: ResponsiveValue<any> | ResponsiveStateValue<any, any>,
) => any = (prop, value) => {
  return responsiveValue(prop, value)
    .slice(0, useBreakpoint() + 1)
    .pop()
}

export const normalizeValue: <Style>(
  prop: keyof Style,
  value: ResponsiveValue<any> | ResponsiveStateValue<any, any>,
) => any = (prop, value) => {
  const val = breakpointValue(prop, value)
  if (typeof val === 'string') {
    const match = val.match(/^([+-]?\d*\.?\d+)(vw|vh|vmin|vmax)?$/)
    if (!match || Platform.OS === 'web') {
      return val
    }
    const unit = match[2]
    const numeric = parseFloat(match[1])
    const { width, height } = useWindowDimensions()
    const vw = width / 100
    const vh = height / 100
    switch (unit) {
      case 'vw':
        return numeric * vw
      case 'vh':
        return numeric * vh
      case 'vmin':
        return numeric * Math.min(vw, vh)
      case 'vmax':
        return numeric * Math.max(vw, vh)
      default:
        return val
    }
  }
  return val
}

type StyleProps<Style> = {
  style?: StyleProp<Style> | undefined
}

export type StyledProps<Props extends StyleProps<Style>, Style> = Omit<
  Props,
  'style'
> &
  ResponsiveStyleProps<Style>

export const createStyleSheet = StyleSheet.create

export const styled = <Props, P extends StyleProps<S> = any, S = any>(
  Component: ComponentType<P>,
  styleProps: (keyof S)[],
) => {
  const StyledComponent = forwardRef<any, Props>((props, ref) => {
    const styles = {} as S
    const attrs = {} as P
    Object.entries(props).forEach(([prop, value]) => {
      const styleProp = prop as keyof S
      const attrsProps = prop as keyof P
      if (styleProps.includes(styleProp)) {
        styles[styleProp] = normalizeValue(styleProp, value)
      } else {
        // @ts-ignore
        attrs[attrsProps] = value
      }
    })
    const { style } = createStyleSheet({ style: styles })
    return <Component {...attrs} ref={ref} style={[style, attrs.style]} />
  })

  StyledComponent.displayName = Component.displayName

  return StyledComponent
}
