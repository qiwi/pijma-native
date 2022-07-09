import React, { ReactNode, useEffect } from 'react'

export interface CssLoaderProps {
  href: string
  children?: ReactNode
}

export const CssLoader = ({ href, children }: CssLoaderProps) => {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    document.head.appendChild(link)
    return () => {
      document.head.removeChild(link)
    }
  }, [href])
  return <>{children}</>
}
