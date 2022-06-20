Wrapper around [View](https://reactnative.dev/docs/view)

## Simple

```jsx
<View backgroundColor="gray" width={200} height={200} />
```

## Adaptive

```jsx
<View
  backgroundColor={['red', 'green', 'blue']}
  width={[100, 200, 300]}
  height={[100, 200, 300]}
/>
```

## Link

```jsx
<Pressable>
  {({ hovered, pressed }) => (
    <View
      backgroundColor={hovered || pressed ? 'orange' : 'blue'}
      outlineColor="orange"
      width={200}
      height={200}
      href="https://google.com"
      hrefAttrs={{
        target: '_blank',
      }}
    />
  )}
</Pressable>
```

## Animation

```jsx
;() => {
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
```
