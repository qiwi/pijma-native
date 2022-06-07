import { ComponentType, createContext } from 'react'

export const ComponentContext = createContext<Record<string, ComponentType>>({})
