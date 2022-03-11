import {
  ColorValue,
  FlexStyle,
  ImageStyle as RNImageStyle,
  ShadowStyleIOS,
  TextStyle as RNTextStyle,
  TransformsStyle,
  ViewStyle as RNViewStyle,
} from 'react-native'

interface OutlineStyle {
  outlineStyle?: 'solid' | 'dotted' | 'dashed' | 'none'
  outlineColor?: ColorValue
  outlineWidth?: number
}

const outlineStyles: (keyof OutlineStyle)[] = [
  'outlineColor',
  'outlineStyle',
  'outlineWidth',
]

export type ViewStyle = Omit<RNViewStyle, 'testID'> & OutlineStyle

export type TextStyle = Omit<RNTextStyle, 'testID'> & OutlineStyle

export type ImageStyle = Omit<RNImageStyle, 'testID'> & OutlineStyle

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
  'backfaceVisibility',
  'backgroundColor',
  'borderBottomColor',
  'borderBottomEndRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderBottomStartRadius',
  'borderBottomWidth',
  'borderColor',
  'borderEndColor',
  'borderLeftColor',
  'borderLeftWidth',
  'borderRadius',
  'borderRightColor',
  'borderRightWidth',
  'borderStartColor',
  'borderStyle',
  'borderTopColor',
  'borderTopEndRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderTopStartRadius',
  'borderTopWidth',
  'borderWidth',
  'elevation',
  'opacity',
  ...outlineStyles,
  ...layoutStyles,
  ...shadowStyles,
  ...transformsStyles,
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
  'backfaceVisibility',
  'backgroundColor',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderColor',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderWidth',
  'opacity',
  'overflow',
  'overlayColor',
  'resizeMode',
  'tintColor',
  ...layoutStyles,
  ...outlineStyles,
  ...shadowStyles,
  ...transformsStyles,
]
