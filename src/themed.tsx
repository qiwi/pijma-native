import React, { ComponentProps, ComponentType, forwardRef } from 'react'

import { useTheme } from './hooks'
import { Theme } from './Theme'

export const themed =
  <C extends ComponentType<ComponentProps<C>>>(Component: C) =>
  <T extends Theme = Theme>(themed: (theme: T) => ComponentProps<C>) =>
    forwardRef<any, ComponentProps<C>>((props, ref) => {
      const theme = useTheme() as T
      // @ts-ignore TS2322: Type '{ ref: ForwardedRef<any>; } & ComponentProps<C> & { children?: ReactNode; }' is not assignable to type 'IntrinsicAttributes & LibraryManagedAttributes<C, PropsWithChildren<ComponentProps<C>>>'
      return <Component ref={ref} {...themed(theme)} {...props} />
    })
