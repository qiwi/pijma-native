import { ActivityIndicator, View } from 'pijma'
import React from 'react'
export const ActivityIndicatorExample1 = () => {
  return (
    <View flexDirection="row">
      <ActivityIndicator color="#1DA1F2" size="small" padding={10} />
      <ActivityIndicator color="#FFAD1F" size="large" padding={10} />
      <ActivityIndicator color="#794BC4" size={48} padding={10} />
      <ActivityIndicator color="#17BF63" size={60} padding={10} />
    </View>
  )
}
