import { useContext } from 'react'

import { ComponentContext } from '../contexts'

export const useComponent = () => useContext(ComponentContext)
