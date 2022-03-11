import { useContext } from 'react'

import { BreakpointContext } from '../contexts'

export const useBreakpoint = () => useContext(BreakpointContext)
