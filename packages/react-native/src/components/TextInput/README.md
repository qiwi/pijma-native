Wrapper around [TextInput](https://reactnative.dev/docs/textinput)

```jsx
;() => {
  const [number, setNumber] = React.useState('')
  return (
    <TextInput
      width={300}
      height={40}
      margin={12}
      borderWidth={1}
      borderColor="#000"
      outlineStyle="none"
      padding={10}
      value={number}
      placeholder="useless placeholder"
      keyboardType="numeric"
      onChangeText={setNumber}
    />
  )
}
```
