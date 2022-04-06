import { useMemo } from 'react'

import { useTheme } from './useTheme'

export const useBreakpoints = () => {
  const { breakpoints } = useTheme()
  return useMemo(() => breakpoints, [breakpoints])
}
