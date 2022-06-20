Wrapper around [Modal](https://reactnative.dev/docs/modal)

```jsx
;() => {
  const [modalVisible, setModalVisible] = React.useState(false)
  return (
    <View flex={1} justifyContent="center" alignItems="center" padding={20}>
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View flex={1} justifyContent="center" alignItems="center" padding={20}>
          <View
            margin={20}
            backgroundColor="white"
            borderRadius={20}
            padding={40}
            alignItems="center"
            shadowColor="#000"
            shadowOffset={{
              width: 0,
              height: 2,
            }}
            shadowOpacity={0.25}
            shadowRadius={4}
            elevation={5}
          >
            <Text marginBottom={15} textAlign="center">
              Hello World!
            </Text>
            <Button
              onPress={() => setModalVisible(!modalVisible)}
              title="Hide Modal"
            />
          </View>
        </View>
      </Modal>
      <Button
        onPress={() => setModalVisible(!modalVisible)}
        title="Show Modal"
      />
    </View>
  )
}
```
