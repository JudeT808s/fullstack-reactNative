import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'

const Trending = (posts) => {
  return (
   <FlatList  
    data={posts}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <Text className="text-3xl text-white">{item.id}</Text>
    )}
   />
  )
}

export default Trending