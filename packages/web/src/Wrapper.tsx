import { Provider } from '@pijma/react-native'
import React, { FC } from 'react'

export const Wrapper: FC = ({ children }) => (
  <Provider breakpoints={[600, 1240]}>{children}</Provider>
)

export default Wrapper
