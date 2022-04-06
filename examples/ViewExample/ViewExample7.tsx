import { Animated, Easing } from 'pijma'
import React from 'react'

export const ViewExample7 = () => {
  const anim = new Animated.Value(0)

  Animated.loop(
    Animated.sequence([
      Animated.timing(anim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.bounce,
        useNativeDriver: false,
      }),
      Animated.timing(anim, {
        toValue: 0,
        duration: 2000,
        easing: Easing.bounce,
        useNativeDriver: false,
      }),
    ]),
  ).start()
  return (
    <Animated.View
      margin={anim.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 50],
      })}
      width={anim.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 200],
      })}
      height={anim.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 200],
      })}
      borderRadius={anim.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 20],
      })}
      backgroundColor={anim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#46e891', '#277ef4'],
      })}
      transform={[
        {
          rotateZ: anim.interpolate({
            inputRange: [0, 1],
            outputRange: ['45deg', '225deg'],
          }),
        },
      ]}
    />
  )
}
