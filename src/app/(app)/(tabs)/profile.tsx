import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import images from '@/constants/images'
import icons from '@/constants/icons'
import { SettingsItem } from '@/components/settings-item'
import { settings } from '@/constants/data'

const ProfileScreen = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-7 pb-32"
      >
        <View className="flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <Image alt="" source={icons.bell} className="size-5" />
        </View>

        <View className="flex-row mt-5 justify-center">
          <View className="flex-col items-center relative mt-5">
            <View>
              <Image
                alt=""
                source={images.avatar}
                className="size-44 relative rounded-full"
              />

              <TouchableOpacity className="absolute bottom-5 right-2">
                <Image alt="" source={icons.edit} className="size-9" />
              </TouchableOpacity>
            </View>

            <Text className="text-2xl font-rubik-bold mt-2">
              John Doe | RN Dev
            </Text>
          </View>
        </View>

        <View className="mt-10 flex-col">
          <SettingsItem icon={icons.person} title="Agendamentos" showArrow />
          <SettingsItem icon={icons.wallet} title="Pagamentos" />
        </View>

        <View className="mt-5 pt-5 border-t border-primary-200 flex-col">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>

        <View className="mt-5 pt-5 border-t border-primary-200 flex-col">
          <SettingsItem icon={icons.logout} title="Sair" showArrow={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen
