import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-web'

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
      data={[]}
      keyExtractor={(item)=> item.id}
      renderItem={({item})=>(
        <Text>{item.title}</Text>
      ) }
      ListHeaderComponent={()=> (
        <View className = "my-6 px-4 space-y-6">
          <View className= "justify-between items-start flex-row mb-6">
            <View>
              <Text>
                Welcome Back
              </Text>
              <Text>
                Jude
              </Text>
            </View>
          </View>
        </View>
      )}/>
    </SafeAreaView>
  )
}

export default Home