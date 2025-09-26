import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { useActivities } from '@hooks/useActivities'
import Error from '@component/Error'
import { StackNavigationProp } from '@react-navigation/stack'
import Activities from '@component/activities/Activities'
import Loading from '@component/ui/Loading'
import { IActivities } from 'data/types/activities'
import { RootStackParamList } from '@screens/types/root'
import { useNavigation } from '@react-navigation/native'
import tw from '@tw'

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  const { data, error, isLoading, isRefetching, refetch } = useActivities()

  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>()

  const handleActivitiesItem = (activities: IActivities) => {
    navigate('Favorites', { activities })
  }

  if (error) {
    return <Error message={error.message} />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <SafeAreaView style={tw`flex-1 `}>
      {data ? (
        <Activities
          data={data}
          refetch={refetch}
          handleActivitiesItem={handleActivitiesItem}
          isRefetching={isRefetching}
        />
      ) : (
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-xl font-semibold`}>No found Activities</Text>
        </View>
      )}
    </SafeAreaView>
  )
}

export default HomeScreen
