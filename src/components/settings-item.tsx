import icons from '@/constants/icons'
import { type FC } from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  type ImageSourcePropType,
  type TouchableOpacityProps,
} from 'react-native'

type SettingsItemProps = TouchableOpacityProps & {
  title: string
  icon: ImageSourcePropType
  showArrow?: boolean
}

export const SettingsItem: FC<SettingsItemProps> = ({
  title,
  icon,
  showArrow = true,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      className="flex-row items-center justify-between py-3"
    >
      <View className="flex-row items-center gap-3">
        <Image alt="" source={icon} className="size-6" />
        <Text className="text-lg font-rubik-medium text-black-300">
          {title}
        </Text>
      </View>
      {showArrow && (
        <Image alt="" source={icons.rightArrow} className="size-5" />
      )}
    </TouchableOpacity>
  )
}
