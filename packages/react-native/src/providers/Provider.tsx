import React, { ComponentType, FC } from 'react'

import { Theme } from '../Theme'
import { BreakpointProvider } from './BreakpointProvider'
import { ComponentProvider } from './ComponentProvider'
import { ThemeProvider } from './ThemeProvider'

export interface ProviderProps {
  components?: Record<string, ComponentType>
  theme?: Theme
  breakpoints?: number[]
}

export const Provider: FC<ProviderProps> = ({
  components = {},
  theme = {},
  breakpoints = [0],
  children,
}) => (
  <ComponentProvider components={components}>
    <ThemeProvider theme={theme}>
      <BreakpointProvider breakpoints={breakpoints}>
        {children}
      </BreakpointProvider>
    </ThemeProvider>
  </ComponentProvider>
)
