import { Button, Modal, Text, View } from 'pijma'
import React, { useState } from 'react'

export const ModalExample1 = () => {
  const [modalVisible, setModalVisible] = useState(false)

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
              color="#2196F3"
            />
          </View>
        </View>
      </Modal>
      <Button
        onPress={() => setModalVisible(!modalVisible)}
        title="Show Modal"
        color="#F194FF"
      />
    </View>
  )
}
