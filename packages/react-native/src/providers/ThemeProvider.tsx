import React, { ReactNode } from 'react'

import { ThemeContext } from '../contexts'
import { Theme } from '../Theme'

export interface ThemeProviderProps {
  theme: Theme
  children?: ReactNode
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
