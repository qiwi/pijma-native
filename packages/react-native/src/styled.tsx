import { Property } from 'csstype'
import React, {
  ComponentProps,
  ComponentType,
  forwardRef,
  MouseEventHandler,
} from 'react'
import {
  FlexStyle,
  ImageProps as RNImageProps,
  ImageStyle as RNImageStyle,
  Platform,
  ShadowStyleIOS,
  StyleProp,
  StyleSheet,
  TextProps as RNTextProps,
  TextStyle as RNTextStyle,
  TransformsStyle,
  ViewProps as RNViewProps,
  ViewStyle as RNViewStyle,
} from 'react-native'

import { useBreakpoint, useViewportUnits } from './hooks'

export type HrefProps = {
  /**
   * @platform web
   */
  href?: string
  /**
   * @platform web
   */
  hrefAttrs?: {
    download?: string
    rel?: string
    target?: string
  }
}

export type MouseEventHandlerProps = {
  /**
   * @platform web
   */
  onMouseDown?: MouseEventHandler
  /**
   * @platform web
   */
  onMouseEnter?: MouseEventHandler
  /**
   * @platform web
   */
  onMouseLeave?: MouseEventHandler
  /**
   * @platform web
   */
  onMouseMove?: MouseEventHandler
  /**
   * @platform web
   */
  onMouseOut?: MouseEventHandler
  /**
   * @platform web
   */
  onMouseOver?: MouseEventHandler
  /**
   * @platform web
   */
  onMouseUp?: MouseEventHandler
}

export type ViewProps = StyledProps<RNViewProps, ViewStyle> &
  HrefProps &
  MouseEventHandlerProps

export type TextProps = StyledProps<RNTextProps, TextStyle> &
  HrefProps &
  MouseEventHandlerProps

export type ImageProps = StyledProps<RNImageProps, ImageStyle> &
  MouseEventHandlerProps

interface WebStyle {
  /**
   * @platform web
   */
  cursor?: Property.Cursor
  /**
   * @platform web
   */
  touchAction?: Property.TouchAction
  /**
   * @platform web
   */
  userSelect?: Property.UserSelect
  /**
   * @platform web
   */
  willChange?: Property.WillChange
  /**
   * @platform web
   */
  outlineColor?: Property.OutlineColor
  /**
   * @platform web
   */
  outlineOffset?: Property.OutlineOffset
  /**
   * @platform web
   */
  outlineStyle?: Property.OutlineStyle
  /**
   * @platform web
   */
  outlineWidth?: Property.OutlineWidth
  /**
   * @platform web
   */
  transitionDelay?: Property.TransitionDelay
  /**
   * @platform web
   */
  transitionDuration?: Property.TransitionDuration
  /**
   * @platform web
   */
  transitionProperty?: Property.TransitionProperty
  /**
   * @platform web
   */
  transitionTimingFunction?: Property.TransitionTimingFunction
}

export type ViewStyle = Omit<RNViewStyle, 'testID'> & WebStyle

export type TextStyle = Omit<RNTextStyle, 'testID'> & WebStyle

export type ImageStyle = Omit<RNImageStyle, 'testID'> & WebStyle

const webStyles: (keyof WebStyle)[] = [
  'cursor',
  'touchAction',
  'userSelect',
  'willChange',
  'outlineColor',
  'outlineOffset',
  'outlineStyle',
  'outlineWidth',
  'transitionDelay',
  'transitionDuration',
  'transitionProperty',
  'transitionTimingFunction',
]

const borderRadiusStyles: (keyof Pick<
  ViewStyle & ImageStyle,
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
  | 'borderRadius'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
>)[] = [
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
]

const colorStyles: (keyof Pick<
  ViewStyle & ImageStyle,
  'backfaceVisibility' | 'backgroundColor' | 'borderColor' | 'opacity'
>)[] = ['backfaceVisibility', 'backgroundColor', 'borderColor', 'opacity']

const shadowStyles: (keyof ShadowStyleIOS)[] = [
  'shadowColor',
  'shadowOffset',
  'shadowOpacity',
  'shadowRadius',
]

const transformsStyles: (keyof TransformsStyle)[] = ['transform']

const layoutStyles: (keyof FlexStyle)[] = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'aspectRatio',
  'borderBottomWidth',
  'borderEndWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderStartWidth',
  'borderTopWidth',
  'borderWidth',
  'bottom',
  'direction',
  'display',
  'end',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'height',
  'justifyContent',
  'left',
  'margin',
  'marginBottom',
  'marginEnd',
  'marginHorizontal',
  'marginLeft',
  'marginRight',
  'marginStart',
  'marginTop',
  'marginVertical',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'overflow',
  'padding',
  'paddingBottom',
  'paddingEnd',
  'paddingHorizontal',
  'paddingLeft',
  'paddingRight',
  'paddingStart',
  'paddingTop',
  'paddingVertical',
  'position',
  'right',
  'start',
  'top',
  'width',
  'zIndex',
]

export const viewStyles: (keyof ViewStyle)[] = [
  'borderBottomColor',
  'borderBottomEndRadius',
  'borderBottomStartRadius',
  'borderEndColor',
  'borderLeftColor',
  'borderRightColor',
  'borderStartColor',
  'borderStyle',
  'borderTopColor',
  'borderTopEndRadius',
  'borderTopStartRadius',
  'elevation',
  ...colorStyles,
  ...borderRadiusStyles,
  ...layoutStyles,
  ...shadowStyles,
  ...transformsStyles,
  ...webStyles,
]

export const textStyles: (keyof TextStyle)[] = [
  'color',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'includeFontPadding',
  'fontVariant',
  'letterSpacing',
  'lineHeight',
  'textAlign',
  'textAlignVertical',
  'textDecorationColor',
  'textDecorationLine',
  'textDecorationStyle',
  'textShadowColor',
  'textShadowOffset',
  'textShadowRadius',
  'textTransform',
  'writingDirection',
  ...viewStyles,
]

export const imageStyles: (keyof ImageStyle)[] = [
  'overlayColor',
  'resizeMode',
  'tintColor',
  ...borderRadiusStyles,
  ...layoutStyles,
  ...shadowStyles,
  ...transformsStyles,
  ...webStyles,
]

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
  if (Platform.OS === 'web') {
    return val
  }
  if (typeof val !== 'string') {
    return val
  }
  const match = val.match(/^([+-]?\d*\.?\d+)(vw|vh|vmin|vmax)$/)
  if (!match) {
    return val
  }
  return (
    parseFloat(match[1]) *
    useViewportUnits()[match[2] as keyof ReturnType<typeof useViewportUnits>]
  )
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

type StyleType = 'view' | 'text' | 'image'

const StyleStyles: Record<
  StyleType,
  (keyof ViewStyle)[] | (keyof TextStyle)[] | (keyof ImageStyle)[]
> = {
  view: viewStyles,
  text: textStyles,
  image: imageStyles,
}

export const styled = <
  Props extends Record<string, any>,
  C extends ComponentType<ComponentProps<C>> = any,
>(
  Component: C,
  styles: Record<string, StyleType>,
) => {
  const StyledComponent = forwardRef<any, Props>((props, ref) => {
    const allStyles: Record<string, ViewStyle | TextStyle | ImageStyle> = {}
    const attrs = {} as ComponentProps<C>
    const prefixes = Object.keys(styles)
    const prefixedStyles = prefixes.reduce(
      (prefixedStyles, prefix) => ({
        ...prefixedStyles,
        ...{
          [prefix]:
            prefix === 'style'
              ? StyleStyles[styles[prefix]]
              : prefixStyles(
                  StyleStyles[styles[prefix]],
                  prefix.replace(/style$/i, ''),
                ),
        },
      }),
      {},
    )
    Object.entries(props).forEach(([prop, value]) => {
      const prefix = prefixes.find((prefix) =>
        // @ts-ignore
        prefixedStyles[prefix].includes(prop),
      )
      if (prefix !== undefined) {
        const styleProp =
          prefix === 'style'
            ? prop
            : unPrefixStyle(
                // @ts-ignore
                prop,
                prefix.replace(/style$/i, ''),
              )
        allStyles[prefix] = {
          ...(allStyles[prefix] || {}),
          ...{
            [styleProp]: normalizeValue(
              // @ts-ignore
              styleProp,
              value,
            ),
          },
        }
      } else {
        // @ts-ignore
        attrs[prop] = value
      }
    })
    return (
      // @ts-ignore
      <Component
        {...attrs}
        ref={ref}
        {...Object.entries(createStyleSheet(allStyles)).reduce(
          (res, [key, value]) => ({
            ...res,
            ...{
              [key]: [
                value,
                // @ts-ignore
                attrs[key],
              ],
            },
          }),
          {},
        )}
      />
    )
  })

  StyledComponent.displayName = Component.displayName

  return StyledComponent
}
