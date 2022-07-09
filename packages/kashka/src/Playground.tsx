import * as ReactNative from '@pijma/react-native'
import { View } from '@pijma/react-native'
import {
  Svg,
  SvgCircle,
  SvgClipPath,
  SvgDefs,
  SvgEllipse,
  SvgForeignObject,
  SvgG,
  SvgImage,
  SvgLine,
  SvgLinearGradient,
  SvgMarker,
  SvgMask,
  SvgPath,
  SvgPattern,
  SvgPolygon,
  SvgPolyline,
  SvgRadialGradient,
  SvgRect,
  SvgSymbol,
  SvgText,
  SvgTextPath,
  SvgTSpan,
  SvgUse,
} from '@pijma/react-native-svg'
import React from 'react'
import {
  // LiveEditor,
  // LiveError,
  LivePreview,
  LiveProvider,
} from 'react-live'

export const Playground = ({ children }: { children: string }) => (
  <LiveProvider
    code={children}
    scope={{
      ...ReactNative,
      ...{
        Svg,
        SvgRect,
        SvgCircle,
        SvgEllipse,
        SvgLine,
        SvgPolygon,
        SvgPolyline,
        SvgPath,
        SvgText,
        SvgTSpan,
        SvgTextPath,
        SvgG,
        SvgUse,
        SvgSymbol,
        SvgDefs,
        SvgImage,
        SvgClipPath,
        SvgLinearGradient,
        SvgRadialGradient,
        SvgMask,
        SvgPattern,
        SvgMarker,
        SvgForeignObject,
      },
    }}
  >
    <LivePreview
      // @ts-ignore
      Component={View}
    />
    {/* <LiveError /> */}
    {/* <LiveEditor /> */}
  </LiveProvider>
)
