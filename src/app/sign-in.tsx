import images from '@/constants/images'
import {
  Image,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import icons from '@/constants/icons'
import { signInWithGoogle } from '@/lib/appwrite'
import { useAppwriteContext } from '@/contexts/appwriter-context'
import { Redirect } from 'expo-router'
const SignInScreen = () => {
  const { refetch, loading, isLogged } = useAppwriteContext()

  if (!loading && isLogged) {
    return <Redirect href="/" />
  }

  const handleSignInWithGoogle = async () => {
    const response = await signInWithGoogle()

    console.log(response)

    if (response) {
      refetch()
    } else {
      Alert.alert('Error', 'Failed to sign in with Google')
    }
  }
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          alt=""
          resizeMode="cover"
          source={images.onboarding}
          className="w-full h-4/6"
        />

        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Bem Vindo
          </Text>

          <Text className="text-3xl text-center font-rubik-bold text-black-300 mt-2">
            Encontre o seu {'\n'}
            <Text className="text-primary-300">Imóvel Perfeito</Text>
          </Text>

          <Text className="text-lg text-center mt-12 font-rubik text-black-200">
            Acesse com uma conta Google
          </Text>

          <TouchableOpacity
            onPress={handleSignInWithGoogle}
            className="w-full mt-5 py-4 bg-white shadow-md shadow-zinc-300 rounded-full"
          >
            <View className="flex-row items-center justify-center gap-2 ">
              <Image
                alt=""
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />

              <Text className="text-lg font-rubik-medium text-black-300">
                Entrar com Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignInScreen
