Wrapper around [ImageBackground](https://reactnative.dev/docs/imagebackground)

## Simple

```jsx
<ImageBackground
  width={300}
  height={300}
  alignItems="center"
  justifyContent="center"
  imageShadowColor="#ff0000"
  imageShadowOpacity={0.5}
  imageShadowOffset={{ width: 1, height: 1 }}
  source={{
    uri: 'https://chpic.su/_data/stickers/f/FreeFromWorries/FreeFromWorries_041.webp',
  }}
>
  <Text
    width={200}
    height={200}
    color="white"
    fontSize={40}
    fontWeight="bold"
    lineHeight={200}
    textAlign="center"
    backgroundColor="#000000c0"
  >
    INSIDE
  </Text>
</ImageBackground>
```

## Adaptive

```jsx
<ImageBackground
  width={[300, 600, 800]}
  height={[300, 600, 800]}
  alignItems="center"
  justifyContent="center"
  imageShadowColor="#ff0000"
  imageShadowOpacity={0.5}
  imageShadowOffset={[
    { width: 1, height: 1 },
    { width: 5, height: 5 },
    { width: 10, height: 10 },
  ]}
  source={{
    uri: 'https://chpic.su/_data/stickers/f/FreeFromWorries/FreeFromWorries_041.webp',
  }}
>
  <Text
    width={[200, 500, 700]}
    height={[200, 500, 700]}
    color="white"
    fontSize={[40, 60, 80]}
    fontWeight="bold"
    lineHeight={[200, 500, 700]}
    textAlign="center"
    backgroundColor="#000000c0"
  >
    INSIDE
  </Text>
</ImageBackground>
```
