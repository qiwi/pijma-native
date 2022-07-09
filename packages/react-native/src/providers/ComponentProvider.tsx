import React, { ComponentType, ReactNode } from 'react'

import { ComponentContext } from '../contexts'

export interface ComponentProviderProps {
  components: Record<string, ComponentType>
  children?: ReactNode
}

export const ComponentProvider = ({
  components,
  children,
}: ComponentProviderProps) => (
  <ComponentContext.Provider value={components}>
    {children}
  </ComponentContext.Provider>
)
