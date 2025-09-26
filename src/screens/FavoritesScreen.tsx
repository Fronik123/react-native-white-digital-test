import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '@screens/types/root'
import tw from '@tw'
import BackIcon from '@assets/icons/favorites/back.svg'
import { useAddFavorite } from '@hooks/useAddFavorite'
import Loading from '@component/ui/Loading'
import MyImage from '@component/ui/CustomImage'

interface Props {
  route: RouteProp<RootStackParamList, 'Favorites'>
  navigation: StackNavigationProp<RootStackParamList, 'Favorites'>
}

const FavoritesScreen: React.FC<Props> = ({ navigation, route }) => {
  const dataActivities = route.params.activities

  const [message, setMessage] = useState<string>('')
  const {
    mutate: addFavorite,
    isSuccess,
    error,
    isPending,
  } = useAddFavorite(setMessage)

  useEffect(() => {
    if (isSuccess) {
      Alert.alert('', message)
    }

    if (error) {
      Alert.alert('', message)
    }
  }, [isSuccess, error])

  return (
    <ScrollView>
      <StatusBar hidden={true} />

      {isPending && <Loading />}

      <View>
        <MyImage uri={dataActivities.photoUrl} height={450} />
      </View>

      <TouchableOpacity
        style={tw`absolute top-[35px] left-[13px]`}
        onPress={() => navigation.goBack()}
      >
        <BackIcon />
      </TouchableOpacity>

      <View style={tw`mt-5 ml-5 mr-5 mb-5`}>
        <Text style={tw`text-mainBlack text-fz24 leading-lh30`}>
          {dataActivities.name}
        </Text>

        <View
          style={tw`flex-row items-center justify-between mt-5 pb-5 border-b border-bgGray`}
        >
          <Text style={tw`text-mainBlack text-fz16 leading-lh20`}>
            ${dataActivities.price}
          </Text>

          <Text style={tw`text-mainGray text-fz12 leading-lh14`}>
            Included taxes and fees
          </Text>
        </View>

        <View style={tw`pb-5 border-b border-bgGray`}>
          <Text style={tw`text-mainBlack text-fz16 leading-lh20 mb-2.5 mt-5`}>
            Description
          </Text>

          <Text style={tw`text-secondaryGray text-fz14 leading-lh17`}>
            {dataActivities.description}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => addFavorite(dataActivities.id)}
          style={tw`bg-mainBlack h-14 items-center justify-center rounded-[800px] mt-[73px]`}
        >
          <Text style={tw`text-secondaryWhite text-fz16 leading-lh20`}>
            Add to Favorites
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default FavoritesScreen
