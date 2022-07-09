import React, { ReactNode, useMemo } from 'react'

import { BreakpointContext } from '../contexts'
import { useWindowDimensions } from '../hooks'

export const getBreakpoint = (width: number, breakpoints: number[]) => {
  const breakpoint = breakpoints.findIndex((breakpoint) => width < breakpoint)
  return breakpoint === -1 ? breakpoints.length : breakpoint
}

export interface BreakpointProviderProps {
  breakpoints: number[]
  children?: ReactNode
}

export const BreakpointProvider = ({
  breakpoints,
  children,
}: BreakpointProviderProps) => {
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
