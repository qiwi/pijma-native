import { useMemo } from 'react'
import { useWindowDimensions } from 'react-native'

export const useViewportUnits = () => {
  const { width, height } = useWindowDimensions()
  return useMemo(() => {
    const vw = width / 100
    const vh = height / 100
    const vmin = Math.min(vw, vh)
    const vmax = Math.max(vw, vh)
    return {
      vw,
      vh,
      vmin,
      vmax,
    }
  }, [width, height])
}
