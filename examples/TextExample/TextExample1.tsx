import { Text, View } from 'pijma'
import React from 'react'
export const TextExample1 = () => {
  return (
    <View flex={1} width="100%">
      {['100', '200', '300', '400', '500', '600', '700', '800', '900'].map(
        (fontWeight) => (
          <Text
            key={fontWeight}
            display="flex"
            color="gray"
            fontWeight={fontWeight}
            fontSize={40}
          >
            Все говно! И говно - говно!
          </Text>
        ),
      )}
    </View>
  )
}
