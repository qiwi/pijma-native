import { View } from '@pijma/react-native'
import React, { Children, FC } from 'react'

export interface WrapperProps {
  padding?: number
}

export const Wrapper: FC<WrapperProps> = ({ children, padding = 8 }) => (
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
