Wrapper around [Switch](https://reactnative.dev/docs/switch)

```jsx
;() => {
  const [value, setValue] = React.useState(false)
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <Switch onValueChange={() => setValue(!value)} value={value} />
    </View>
  )
}
```
