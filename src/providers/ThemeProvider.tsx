import React, { FC, useMemo } from 'react'

import { ThemeContext } from '../contexts'
import { Theme } from '../Theme'

export const ThemeProvider: FC<{ theme: Theme }> = ({ theme, children }) => {
  const value = useMemo(() => theme, [theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
