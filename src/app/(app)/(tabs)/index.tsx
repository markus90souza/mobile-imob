import { Link } from 'expo-router'
import { View, Text } from 'react-native'

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold">Tab One</Text>
      <Link href="/sign-in">Sign in</Link>
    </View>
  )
}
