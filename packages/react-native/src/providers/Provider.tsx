import React, { ComponentType, ReactNode } from 'react'

import { Theme } from '../Theme'
import { BreakpointProvider } from './BreakpointProvider'
import { ComponentProvider } from './ComponentProvider'
import { ThemeProvider } from './ThemeProvider'

export interface ProviderProps {
  components?: Record<string, ComponentType>
  theme?: Theme
  breakpoints?: number[]
  children?: ReactNode
}

export const Provider = ({
  components = {},
  theme = {},
  breakpoints = [0],
  children,
}: ProviderProps) => (
  <ComponentProvider components={components}>
    <ThemeProvider theme={theme}>
      <BreakpointProvider breakpoints={breakpoints}>
        {children}
      </BreakpointProvider>
    </ThemeProvider>
  </ComponentProvider>
)
