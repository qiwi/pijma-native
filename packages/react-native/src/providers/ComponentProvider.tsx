import React, { ComponentType, FC } from 'react'

import { ComponentContext } from '../contexts'

export const ComponentProvider: FC<{
  components: Record<string, ComponentType>
}> = ({ components, children }) => (
  <ComponentContext.Provider value={components}>
    {children}
  </ComponentContext.Provider>
)
