import { StatusBar} from 'expo-status-bar';
import { View, Text } from 'react-native';
import {Link} from 'expo-router';


export default function App() {
  return (
   <View className= " bg-red">
    <Text className='text-3xl font-pblack'>Aora</Text>
    <StatusBar style="auto" />
    <Link href="/home" style={{color:'blue'}}>Go to Home</Link>
    </View>
  );

}
