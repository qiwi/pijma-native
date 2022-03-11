import React, { FC, useMemo } from 'react'

import { BreakpointContext } from '../contexts'
import { useBreakpoints, useWindowDimensions } from '../hooks'

export const getBreakpoint = (width: number, breakpoints: number[]) => {
  const breakpoint = breakpoints.findIndex((breakpoint) => width < breakpoint)
  return breakpoint === -1 ? breakpoints.length : breakpoint
}

export const BreakpointProvider: FC = ({ children }) => {
  const breakpoints = useBreakpoints()
  const { width } = useWindowDimensions()
  const value = useMemo(
    () => getBreakpoint(width, breakpoints),
    [width, breakpoints],
  )
  return (
    <BreakpointContext.Provider value={value}>
      {children}
    </BreakpointContext.Provider>
  )
}
