import { View } from '@pijma/react-native'
import React, { Children, ReactNode } from 'react'

export interface WrapperProps {
  padding?: number
  children?: ReactNode
}

export const Wrapper = ({ children, padding = 8 }: WrapperProps) => (
  <>
    {Children.toArray(children)
      .filter((child) => !!child)
      .map((child, key, children) => (
        <View
          key={key}
          paddingTop={key === 0 ? undefined : padding}
          paddingBottom={key === children.length - 1 ? undefined : padding}
        >
          {child}
        </View>
      ))}
  </>
)
