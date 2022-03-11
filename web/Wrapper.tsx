import { Provider, Theme } from 'pijma'
import React, { FC } from 'react'

const theme: Theme = {
  breakpoints: [600, 1240],
}

export const Wrapper: FC = ({ children }) => (
  <Provider theme={theme}>{children}</Provider>
)

export default Wrapper
