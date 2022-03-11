import React, { ReactNode } from 'react'

import { Theme } from '../Theme'
import { BreakpointProvider } from './BreakpointProvider'
import { ThemeProvider } from './ThemeProvider'

export const Provider = <T extends Theme>({
  theme,
  children,
}: {
  theme: T
  children: ReactNode
}) => (
  <ThemeProvider theme={theme}>
    <BreakpointProvider>{children}</BreakpointProvider>
  </ThemeProvider>
)
