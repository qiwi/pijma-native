Wrapper around [FlatList](https://reactnative.dev/docs/flatlist)

```tsx
;() => {
  const [selectedId, setSelectedId] = React.useState(undefined)
  return (
    <FlatList
      height={200}
      data={[
        {
          id: '1',
          title: 'First Item',
        },
        {
          id: '2',
          title: 'Second Item',
        },
        {
          id: '3',
          title: 'Third Item',
        },
        {
          id: '4',
          title: 'Fourth Item',
        },
        {
          id: '5',
          title: 'Fifth Item',
        },
        {
          id: '6',
          title: 'Sixth Item',
        },
      ]}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <Pressable
          backgroundColor={item.id === selectedId ? '#6e3b6e' : '#f9c2ff'}
          padding={20}
          marginVertical={10}
          opacity={({ pressed, hovered }) =>
            pressed ? 0.6 : hovered ? 0.8 : 1
          }
          onPress={() =>
            setSelectedId(item.id === selectedId ? undefined : item.id)
          }
        >
          <Text
            selectable={false}
            fontSize={32}
            color={item.id === selectedId ? '#fff' : '#000'}
          >
            {item.title}
          </Text>
        </Pressable>
      )}
    />
  )
}
```
