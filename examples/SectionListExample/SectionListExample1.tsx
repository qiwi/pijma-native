import { SectionList, Text, View } from 'pijma'
import React from 'react'
export const SectionListExample1 = () => {
  return (
    <SectionList
      height={400}
      sections={[
        {
          title: 'Main dishes',
          data: ['Pizza', 'Burger', 'Risotto'],
        },
        {
          title: 'Sides',
          data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        },
        {
          title: 'Drinks',
          data: ['Water', 'Coke', 'Beer'],
        },
        {
          title: 'Desserts',
          data: ['Cheese Cake', 'Ice Cream'],
        },
      ]}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section }) => (
        <Text fontSize={32} backgroundColor="#fff">
          {section.title}
        </Text>
      )}
      renderItem={({ item }) => (
        <View backgroundColor="#f9c2ff" padding={20} marginVertical={8}>
          <Text fontSize={24}>{item}</Text>
        </View>
      )}
    />
  )
}
