import { View } from 'pijma'
import React, { Children, FC } from 'react'

export const Wrapper: FC = ({ children }) => (
  <>
    {Children.toArray(children)
      .filter((child) => !!child)
      .map((child, key, children) => (
        <View
          key={key}
          marginTop={key === 0 ? undefined : 10}
          marginBottom={key === children.length - 1 ? undefined : 10}
        >
          {child}
        </View>
      ))}
  </>
)
