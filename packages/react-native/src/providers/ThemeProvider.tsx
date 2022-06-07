import React, { FC } from 'react'

import { ThemeContext } from '../contexts'
import { Theme } from '../Theme'

export interface ThemeProviderProps {
  theme: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
