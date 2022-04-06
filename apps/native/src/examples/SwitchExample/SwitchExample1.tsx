import { Switch, View } from '@pijma/react-native'
import React, { useState } from 'react'

export const SwitchExample1 = () => {
  const [value, setValue] = useState(false)

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <Switch onValueChange={() => setValue(!value)} value={value} />
    </View>
  )
}
