import { StatusBar} from 'expo-status-bar';
import { View, Text } from 'react-native';
import {Link} from 'expo-router';


export default function App() {
  return (
   <View className= "flex-1 items-center justify-center bg-white">
    <Text className='text-3xl'>Aora</Text>
    <StatusBar style="auto" />
    <Link href="/profile">Go toProfile</Link>
    </View>
  );

}
