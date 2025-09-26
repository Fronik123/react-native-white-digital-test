import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Alert, ScrollView } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '@screens/types/root'
import tw from '@tw'
import { useAddFavorite } from '@hooks/useAddFavorite'
import Loading from '@component/ui/Loading'
import CustomImage from '@component/ui/CustomImage'
import CustomButton from '@component/ui/CustomButton'
import BackButton from '@component/ui/BackButton'

interface Props {
  route: RouteProp<RootStackParamList, 'Favorites'>
}

const FavoritesScreen: React.FC<Props> = ({ route }) => {
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
        <CustomImage uri={dataActivities.photoUrl} height={450} />
      </View>

      <BackButton />

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

        <CustomButton
          title="Add to Favorites"
          onPress={() => addFavorite(dataActivities.id)}
        />
      </View>
    </ScrollView>
  )
}

export default FavoritesScreen
