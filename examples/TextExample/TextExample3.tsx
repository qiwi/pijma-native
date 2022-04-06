import { Text, View } from 'pijma'
import React from 'react'
export const TextExample3 = () => {
  return (
    <View flex={1} width="100%">
      {['100', '200', '300', '400', '500', '600', '700', '800', '900'].map(
        (fontWeight) => (
          <Text
            key={fontWeight}
            display="flex"
            color={['red', 'green', 'blue']}
            fontWeight={fontWeight}
            fontSize={[30, 40, 50]}
          >
            Все говно! И говно - говно!
          </Text>
        ),
      )}
    </View>
  )
}
