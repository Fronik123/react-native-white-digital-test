import React from 'react'
import { SafeAreaView } from 'react-native'
import { useActivities } from '@hooks/useActivities'
import Error from '@component/Error'
import Loading from '@component/Loading'

import { TActivities } from '../data/types/activities'

import tw from '../../tw'

import { RootStackParamList } from '../screens/types/root'
import { StackNavigationProp } from '@react-navigation/stack'
import Activities from '@component/activities/Activities'

type Props = {
  navigation: StackNavigationProp<RootStackParamList>
}

const handleActivitiesItem = (
  activities: TActivities,
  navigation: StackNavigationProp<RootStackParamList>,
) => {
  navigation.navigate('Favorites', { activities })
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { data, error, isLoading, isRefetching, refetch } = useActivities()

  if (error) {
    return <Error message={error.message} />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <SafeAreaView style={tw`flex-1 `}>
      <Activities
        data={data}
        refetch={refetch}
        handleActivitiesItem={handleActivitiesItem}
        isRefetching={isRefetching}
        navigation={navigation}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
