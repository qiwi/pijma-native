import { useMemo } from 'react'

import { useTheme } from '../hooks'

export const useBreakpoints = () => {
  const { breakpoints } = useTheme()
  return useMemo(() => breakpoints, [breakpoints])
}
