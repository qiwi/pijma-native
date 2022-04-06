import { TextInput } from 'pijma'
import React, { useState } from 'react'

export const TextInputExample1 = () => {
  const [number, setNumber] = useState('')

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
