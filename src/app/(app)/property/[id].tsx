import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
} from 'react-native'

import { router, useLocalSearchParams } from 'expo-router'
// import { Container } from './styles';

const Property: React.FC = () => {
  const { id } = useLocalSearchParams()
  return <View />
}

export default Property
