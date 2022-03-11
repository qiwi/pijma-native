import React, { FC, useEffect } from 'react'

export const CssLoader: FC<{ href: string }> = ({ href, children }) => {
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
